const talents = require("../../api/v1/talents/model");
const { checkingImages } = require("./images");
const { badRequest, notFound } = require("../../errors");

const getAlltalents = async (req) => {
  const { keyword } = req.query;

  let condition = {
    organizer: req.user.organizer,
  };

  if (keyword) {
    condition = { ...condition, name: { $regex: keyword, $options: "i" } };
  }

  const result = await talents
    .find(condition)
    .populate({
      path: "image",
      select: "_id name",
    })
    .select("_id name role image");

  return result;
};

const createTalent = async (req) => {
  const { name, role, image } = req.body;

  await checkingImages(image);

  const check = await talents.findOne({ name, organizer: req.user.organizer });

  if (check) throw new badRequest("Pembicara sudah ada");

  const result = await talents.create({
    name,
    role,
    image,
    organizer: req.user.organizer,
  });

  return result;
};

const getOneTalent = async (req) => {
  const { id } = req.params;

  const result = await talents
    .findOne({ _id: id, organizer: req.user.organizer })
    .populate({
      path: "image",
      select: "_id name ",
    })
    .select("_id name");

  if (!result) throw new notFound(`Tidak ada pembicara dengan id ${id}`);

  return result;
};

const updateTalent = async (req) => {
  const { id } = req.params;
  const { name, role, image } = req.body;

  await checkingImages(image);

  const check = await talents.findOne({
    name,
    organizer: req.user.organizer,
    _id: { $ne: id },
  });
  if (check) throw new badRequest("Pembicara sudah ada");

  const result = await talents.findOneAndUpdate(
    { _id: id },
    { name, role, image, organizer: req.user.organizer },
    { new: true, runValidators: true }
  );
  if (!result) throw new notFound(`Tidak ada pembicara dengan id ${id}`);

  return result;
};

const deleteTalent = async (req) => {
  const { id } = req.params;

  const result = await talents.findOne({
    _id: id,
    organizer: req.user.organizer,
  });
  if (!result) throw new notFound(`Tidak ada pembiacara dengan id ${id}`);

  await result.remove();

  return result;
};

const checkingTalents = async (id) => {
  const result = await talents({ _id: id });
  if (!result) throw new notFound(`Tidak ada pembicara dengan id ${id}`);

  return result;
};

module.exports = {
  getAlltalents,
  createTalent,
  getOneTalent,
  updateTalent,
  deleteTalent,
  checkingTalents,
};
