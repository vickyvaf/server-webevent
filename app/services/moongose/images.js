const images = require("../../api/v1/images/model");
const { StatusCodes } = require("http-status-codes");
const { notFound } = require("../../errors");

const createImage = async (req) => {
  const result = await images.create({
    name: req.file
      ? `uploads/${req.file.filename}`
      : `uploads/avatars/default.png`,
  });

  return result;
};

const checkingImages = async (id) => {
  const result = await images.findOne({ _id: id });

  if (!result) throw new notFound(`Tidak ada gambar dengan id ${id}`);

  return result;
};

module.exports = { createImage, checkingImages };
