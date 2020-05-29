const models = require('../models')

const getAllMonths = async (request, response) => {
  try {
    const months = await models.Months.findAll()

    return response.send(months)
  } catch (error) {
    return response.status(500).send('Error')
  }
}

const getMonthByName = async (request, response) => {
  try {
    const { name } = request.params

    const foundName = await models.Months.findOne({
      where: { name }
    })

    return foundName
      ? response.send(foundName)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Error')
  }
}

const getMonthBySlug = async (request, response) => {
  try {
    const { slug } = request.params

    const foundSlug = models.Months.findOne({
      where: { slug }
    })

    return foundSlug
      ? response.send(foundSlug)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Error')
  }
}

module.exports = {
  getAllMonths,
  getMonthBySlug,
  getMonthByName,
}
