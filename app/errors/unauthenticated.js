const {StatusCodes} = require('http-status-codes');
const customApiError = require('./custom-api-error')

class unauthenticated extends customApiError {
  constructor(message) {
    super(message)
    this.statusCode = StatusCodes.UNAUTHORIZED
  }
}

module.exports = unauthenticated