const categories = require("../../api/v1/categories/model");
const { notFound, badRequest } = require("../../errors");

const getAllCategories = async (req) => {
  const result = await categories.find({ organizer: req.user.organizer });

  return result;
};

const createCategory = async (req) => {
  const { name } = req.body;

  const check = await categories.findOne({
    name,
    organizer: req.user.organizer,
  });

  if (check) throw new badRequest("Kategori nama duplikat");

  const result = await categories.create({
    name,
    organizer: req.user.organizer,
  });

  return result;
};

const getOneCategory = async (req) => {
  const { id } = req.params;

  const result = await categories.findById({
    _id: id,
    organizer: req.user.organizer,
  });
  if (!result) throw new notFound(`Tidak ada kategori dengan id: ${id}`);

  return result;
};

const updateCategory = async (req) => {
  const { id } = req.params;
  const { name } = req.body;

  const check = await categories.findOne({
    name,
    organizer: req.user.organizer,
    _id: { $ne: id },
  });

  if (check) throw new badRequest("kategori nama duplikat");

  const result = await categories.findOneAndUpdate(
    { _id: id },
    { name },
    { new: true, runValidators: true }
  );

  if (!result) throw new notFound(`Tidak ada Kategori dengan id :  ${id}`);

  return result;
};

const deleteCategory = async (req) => {
  const { id } = req.params;

  const result = await categories.findById({
    _id: id,
    organizer: req.user.organizer,
  });

  if (!result) throw new notFound("Id kategori tidak ditemukan");

  await result.remove();

  return result;
};

const checkingCategories = async (id) => {
  const result = await categories.findOne({
    _id: id,
  });

  if (!result) throw new notFound(`Tidak ada Kategori dengan id :  ${id}`);

  return result;
};

module.exports = {
  getAllCategories,
  createCategory,
  getOneCategory,
  updateCategory,
  deleteCategory,
  checkingCategories,
};
