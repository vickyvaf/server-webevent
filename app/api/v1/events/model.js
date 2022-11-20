const mongoose = require('mongoose')
const { model, Schema } = mongoose

const ticketCategoriesSchema = Schema(
  {
    type: {
      type: String,
      required: [true, 'Tipe tiket harus diisi'],
    },
    price: {
      type: Number,
      default: 0,
    },
    stock: {
      type: Number,
      default: 0,
    },
    statusTicketCategories: {
      type: Boolean,
      enum: [true, false],
      default: true,
    },
    expired: {
      type: Date,
    },
  }
)

const eventsSchema = Schema(
  {
    title: {
      type: String,
      required: [true, 'Judul harus diisi!'],
      minLength: 3,
      maxLength: 50
    },
    date: {
      type: Date,
    },
    about: {
      type: String,
    },
    tagline: {
      type: String,
      required: [true, 'Tagline harus diisi']
    },
    keyPoint: {
      type: [String]
    },
    venueName: {
      type: String,
      required: [true, 'Tempat acara harus diisi']
    },
    status: {
      type: String,
      enum: ['Draft', 'Published'],
      default: 'Draft'
    },
    tickets: {
      type: [ticketCategoriesSchema],
      required: true
    },
    image: {
      type: mongoose.Types.ObjectId,
      ref: 'Image',
      required: true
    },
    category: {
      type: mongoose.Types.ObjectId,
      ref: 'Category',
      required: true
    },
    talent: {
      type: mongoose.Types.ObjectId,
      ref: 'Talent',
      required: true
    },
    organizer: {
      type: mongoose.Types.ObjectId,
      ref: 'Organizer',
      required: true
    }
  },
  { timestamps: true }
)

module.exports = model('Event', eventsSchema)