const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const { model, Schema } = mongoose

const usersSchema = Schema(
  {
    name: {
      type: String,
      required: [true, 'Nama harus di isi'],
      nimLength: 3,
      maxLength: 50
    },
    email: {
      type: String,
      unique: true,
      required: [true, 'Email harus di isi']
    },
    password: {
      type: String,
      minLength: 6,
      required: [true, 'Password harus di isi']
    },
    role: {
      type: String,
      enum: ['admin', 'organizer', 'owner'],
      default: 'admin'
    },
    organizer: {
      type: mongoose.Types.ObjectId,
      ref: 'Organizer',
      required: true
    }
  },
  { timestamps: true }
)

usersSchema.pre('save', async function(next) {
  const User = this
  if (User.isModified('password')) {
    User.password = await bcrypt.hash(User.password, 12)
  }
  next()
})

usersSchema.methods.comparePassword = async function(canditatePassword) {
  const isMatch = await bcrypt.compare(canditatePassword, this.password);
  return isMatch
}

module.exports = model('Users', usersSchema)