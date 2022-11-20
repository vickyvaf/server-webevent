const mongoose = require('mongoose')
const { model, Schema } = mongoose

const talentSchema = Schema(
  {
    name: {
      type: String,
      required: [true, 'Nama harus di isi']
    },
    role: {
      type: String,
      default: '-'
    },
    image: {
      type: mongoose.Types.ObjectId,
      ref: 'Image',
      required: true
    }
  },
  { timestamps: true }
)

module.exports = model('Talent', talentSchema)