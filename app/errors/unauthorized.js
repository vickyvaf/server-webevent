const { StatusCodes } = require('http-status-codes')
const customApiError = require('./custom-api-error')

class unauthorized extends customApiError {
  constructor(message) {
    super(message)
    this.statusCode = StatusCodes.FORBIDDEN
  }
}

module.exports = unauthorized