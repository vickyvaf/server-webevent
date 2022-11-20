const { signin } = require('../../../services/moongose/auth')
const { StatusCodes } = require('http-status-codes')

const signinCMS = async (req, res, next) => {
  try {
    const result = await signin(req)

    res.status(StatusCodes.CREATED).json({
      data: { token: result }
    })
  } catch (error) {
    next(error)
  }
}

module.exports = { signinCMS }