const events = require('../../api/v1/events/model')
const { checkingCategories } = require('./categories')
const { checkingTalents } = require('./talents')
const { checkingImages } = require('./images')
const { badRequest, notFound } = require('../../errors')

const getAllEvents = async (req) => {
  const { keyword, category, talent } = req.query

  let condition = {}

  if (keyword) {
    condition = { ...condition, name: { $regex: keyword, $option: 'i' } }
  }
  if (category) {
    condition = { ...condition, category: category }
  }
  if (talent) {
    condition = { ...condition, talent: talent }
  }

  const result = await events.find(keyword)
    .populate({
      path: 'image',
      select: '_id name'
    })
    .populate({
      path: 'category',
      select: '_id name'
    })
    .populate({
      path: 'talent',
      select: '_id name role image',
      populate: {
        path: 'image',
        select: '_id name'
      }
    })

  return result
}

const createEvent = async (req) => {
  const {
    title,
    date,
    about,
    tagline,
    venueName,
    keyPoint,
    statusEvent,
    tickets,
    image,
    category,
    talent,
  } = req.body

  await checkingImages(image);
  await checkingCategories(category);
  await checkingTalents(talent);

  const check = await events.findOne({ title })

  if (check) throw new badRequest('Judul event sudah ada')

  const result = await events.create({
    title,
    date,
    about,
    tagline,
    venueName,
    keyPoint,
    statusEvent,
    tickets,
    image,
    category,
    talent,
  })

  return result
}

const getOneEvent = async (req) => {
  const { id } = req.params

  const result = await events.findOne({ _id: id })
    .populate({
      path: 'image', select: '_id name'
    })
    .populate({
      path: 'category',
      select: '_id name',
    })
    .populate({
      path: 'talent',
      select: '_id name role image',
      populate: { path: 'image', select: '_id  name' },
    });

  if (!result) throw new notFound(`Tidak ada acara dengan id ${id}`)

  return result
}

const updateEvent = async (req) => {
  const { id } = req.params
  const {
    title,
    date,
    about,
    tagline,
    venueName,
    keyPoint,
    statusEvent,
    tickets,
    image,
    category,
    talent,
  } = req.body

  await checkingImages(image);
  await checkingCategories(category);
  await checkingTalents(talent);

  const checkEvent = await events.findOne({ _id: id })

  if (!checkEvent) throw new notFound(`Tidak ada acara dengan id ${id}`)

  const check = await events.findOne({
    title,
    _id: { $ne: id },
  })

  if (check) throw new badRequest('Judul event sudah ada')

  const result = await events.findOneAndUpdate(
    { _id: id },
    {
      title,
      date,
      about,
      tagline,
      venueName,
      keyPoint,
      statusEvent,
      tickets,
      image,
      category,
      talent,
    },
    { new: true, runValidators: true }
  )

  return result
}

const deleteEvent = async (req) => {
  const { id } = req.params

  const result = await events.findOne({ _id: id })

  if (!result) throw new notFound(`Tidak ada acara dengan id ${id}`)

  await result.remove()

  return result
}

module.exports = { getAllEvents, createEvent, getOneEvent, updateEvent, deleteEvent }