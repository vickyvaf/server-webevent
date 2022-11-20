const { getAllCategories, createCategory, getOneCategory, updateCategory, deleteCategory } = require('../../../services/moongose/categories')
const { StatusCodes } = require('http-status-codes')

const index = async (req, res, next) => {
  try {
    const result = await getAllCategories(req)
    res.status(StatusCodes.OK).json({
      data: result
    })
  } catch (error) {
    next(error)
  }
}

const create = async (req, res, next) => {
  try {
    const result = await createCategory(req)
    res.status(StatusCodes.CREATED).json({
      message: 'id category berhasil di tambahkan',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const find = async (req, res, next) => {
  try {
    const result = await getOneCategory(req)
    res.status(StatusCodes.OK).json({
      data: result
    })
  } catch (error) {
    next(error)
  }
}

const update = async (req, res, next) => {
  try {
    const result = await updateCategory(req)
    
    res.status(StatusCodes.OK).json({
      message: 'id category berhasil di update',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const destroy = async (req, res, next) => {
  try {
    const result = await deleteCategory(req)

    res.status(StatusCodes.OK).json({
      message: 'id category berhasil di hapus',
      data: result
    })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  index,
  create,
  find,
  update,
  destroy
}