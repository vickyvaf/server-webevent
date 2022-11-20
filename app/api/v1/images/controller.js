const { createImage } = require('../../../services/moongose/images')
const { StatusCodes } = require('http-status-codes')

const create = async (req, res, next) => {
  try {
    const result = await createImage(req)

    res.status(StatusCodes.CREATED).json({
      message: 'image berhasil ditambahkan',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

module.exports = { create }