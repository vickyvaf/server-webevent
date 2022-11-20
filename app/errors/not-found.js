const { StatusCodes } = require('http-status-codes')
const customApiError = require('./custom-api-error')

class notFound extends customApiError {
  constructor(message) {
    super(message)
    this.statusCode = StatusCodes.NOT_FOUND
  }
}

module.exports = notFound