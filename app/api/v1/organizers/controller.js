const { createOrganizer, createUser, getAllUsers } = require('../../../services/moongose/users')
const { StatusCodes } = require('http-status-codes')

const getCMSUsers = async (req, res, next) => {
  try {
    const result = await getAllUsers(req);
    res.status(StatusCodes.OK).json({
      data: result
    })
  } catch (error) {
    next(error)
  }
}

const createCMSOrganizer = async (req, res, next) => {
  try {
    const result = await createOrganizer(req)

    res.status(StatusCodes.CREATED).json({
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const createCMSUser = async (req, res, next) => {
  try {
    const result = await createUser(req)

    res.status(StatusCodes.CREATED).json({
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  createCMSOrganizer,
  createCMSUser,
  getCMSUsers
}