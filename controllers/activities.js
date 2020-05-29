const models = require('../models')

const getAllActivities = async (request, response) => {
  try {
    const activities = await models.Activities.findAll()

    return response.send(activities)
  } catch (error) {
    return response.status(500).send('Error')
  }
}

const getActivitiesByMoon = async (request, response) => {
  try {
    const { moonId } = request.params

    const foundMoon = await models.Activities.findOne({
      where: { moonId }
    })

    return foundMoon
      ? response.send(foundMoon)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Error')
  }
}

const getActivitiesByMonth = async (request, response) => {
  try {
    const { monthId } = request.params

    const foundMonth = await models.Activities.findOne({
      where: { monthId }
    })

    return foundMonth
      ? response.send(foundMonth)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Error')
  }
}

const addActivities = async (request, response) => {
  try {
    const { name, moonId, monthId } = request.body


    if (!name || !moonId || !monthId) {
      return response.status(400).send('Please provide requested data.')
    }

    const [newActivity] = await models.Activities.findOrCreate({ where: { name }, defaults: { moonId, monthId } })

    Promise.resolve(newActivity)

    return response.status(201).send(newActivity)
  } catch (error) {
    return response.status(500).send('Error')
  }
}

const deleteActivities = async (request, response) => {
  try {
    const { id } = request.params
    const activity = await models.Activities.findOne({
      where: { id }
    })

    if (!activity) return response.status(404).send('Error')

    await models.Activities.destroy({
      where: { id }
    })

    return response.send('Successfully deleted.')
  } catch (error) {
    return response.status(500).send('Error')
  }
}


module.exports = {
  getAllActivities,
  getActivitiesByMonth,
  getActivitiesByMoon,
  addActivities,
  deleteActivities,
}

