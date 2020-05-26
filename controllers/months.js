const models = require('../models')

const getAllMonths = async (request, response) => {
  const months = await models.Months.findAll()

  return response.send(months)
}

const getMonthByName = async (request, response) => {
  const { name } = request.params

  const foundName = await models.Months.findOne({ where: { name } })

  return foundName
    ? response.send(foundName)
    : response.sendStatus(404)
}

const getMonthByMoon = async (request, response) => {
  const { moon } = request.params

  const foundMoon = await models.Months.findOne({ where: { moon } })

  return foundMoon
    ? response.send(foundMoon)
    : response.sendStatus(404)
}

const getMonthBySlug = async (request, response) => {
  const { slug } = request.params

  const foundSlug = models.Months.findOne({ where: { slug } })

  return foundSlug
    ? response.send(foundSlug)
    : response.sendStatus(404)
}

const addMonth = async (request, response) => {
  const {
    name, moon, activities, slug
  } = request.body


  if (!name || !moon || !activities || !slug) {
    return response.status(400).send('Please provide requested data.')
  }

  const newMonth = await models.Months.create({
    name, moon, activities, slug
  })

  return response.status(201).send(newMonth)
}

module.exports = {
  getAllMonths,
  getMonthBySlug,
  getMonthByMoon,
  getMonthByName,
  addMonth
}
