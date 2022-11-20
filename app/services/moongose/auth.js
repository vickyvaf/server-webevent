const users = require('../../api/v1/users/model')
const { badRequest, unauthorized } = require('../../errors')
const { createJWT, createTokenUser } = require('../../utils')

const signin = async (req) => {
  const { email, password } = req.body

  if (!email || !password) {
    throw new badRequest('Please provide email and password')
  }

  const result = await users.findOne({ email: email })

  if (!result) {
    throw new unauthorized('Invalid credentials')
  }

  const isPasswordCorrect = await result.comparePassword(password)

  if (!isPasswordCorrect) {
    throw new unauthorized('Invalid credentials')
  }

  const token = createJWT({ payload: createTokenUser(result) })

  return token
}

module.exports = { signin }