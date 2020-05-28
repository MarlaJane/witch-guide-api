const models = require('../models')

const getAllMoons = async (request, response) => {
  try {
    const moons = await models.Moons.findAll()

    return response.send(moons)
  } catch (error) {
    return response.status(500).send('Error')
  }
}

const getMoonByName = async (request, response) => {
  try {
    const { name } = request.params

    const foundName = await models.Moons.findOne({
      where: { name }
    })

    return foundName
      ? response.send(foundName)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Error')
  }
}

const getMoonByMonth = async (request, response) => {
  try {
    const { monthId } = request.params

    const foundMonth = await models.Moons.findOne({
      where: { monthId }
    })

    return foundMonth
      ? response.send(foundMonth)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Error')
  }
}

module.exports = {
  getAllMoons,
  getMoonByName,
  getMoonByMonth,
}
