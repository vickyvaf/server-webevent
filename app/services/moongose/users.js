const users = require('../../api/v1/users/model')
const organizers = require('../../api/v1/organizers/model')
const { badRequest } = require('../../errors')

const createOrganizer = async (req) => {
  const { organizer, email, password, confirmPassword, name, role } = req.body

  if (password !== confirmPassword) {
    throw new badRequest('Password dan confirm password tidak cocok')
  }

  const result = await organizers.create({ organizer })

  const user = await users.create({
    email,
    password,
    name,
    organizer: result._id,
    role
  })

  delete user._doc.password

  return user
}

const createUser = async (req, res) => {
  const { email, password, confirmPassword, name, role } = req.body

  if (password !== confirmPassword) {
    throw new badRequest('Password dan confirm password tidak cocok')
  }

  const result = await users.create({
    name,
    email,
    organizer: req.user.organizer,
    password,
    role
  })

  return result
}

module.exports = {
  createOrganizer,
  createUser,
}