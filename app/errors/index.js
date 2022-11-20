const customApiError = require('./custom-api-error')
const badRequest = require('./bad-request')
const notFound = require('./not-found')
const unauthorized = require('./unauthorized')
const unauthenticated = require('./unauthenticated')

module.exports = {
  badRequest,
  customApiError,
  notFound,
  unauthorized,
  unauthenticated
}