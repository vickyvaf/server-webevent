const { checkingTalent, createTalent, deleteTalent, getAlltalents, getOneTalent, updateTalent } = require('../../../services/moongose/talents')
const { StatusCodes } = require('http-status-codes')

const index = async (req, res, next) => {
  try {
    const result = await getAlltalents(req)

    res.status(StatusCodes.OK).json({
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const create = async (req, res, next) => {
  try {
    const result = await createTalent(req)

    res.status(StatusCodes.CREATED).json({
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const find = async (req, res, next) => {
  try {
    const result = await getOneTalent(req)

    res.status(StatusCodes.OK).json({
      data: result
    })
  } catch (error) {
    next(error)
  }
}

const update = async (req, res, next) => {
  try {
    const result = await updateTalent(req)

    res.status(StatusCodes.OK).json({
      data: result
    })
  } catch (error) {
    next(error)
  }
}

const destroy = async (req, res, next) => {
  try {
    const result = await deleteTalent(req)

    res.status(StatusCodes.OK).json({
      data: result
    })
  } catch (error) {
    next(error)
  }
}

module.exports = { index, create, find, update, destroy }