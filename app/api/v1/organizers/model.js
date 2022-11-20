const mongoose = require('mongoose')
const { model, Schema } = mongoose

const organizersSchema = Schema(
  {
    organizer: {
      type: String,
      required: [true, 'Penyelenggara harus di isi']
    }
  },
  { timestamps: true }
)

module.exports = model('Organizer', organizersSchema)