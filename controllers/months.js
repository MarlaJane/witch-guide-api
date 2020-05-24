const months = require('../monthInfo')

const getAllMonths = (request, response) => {
  return response.send(months)
}

const getMonthByName = (request, response) => {
  const { name } = request.params

  const foundName = months.filter((months) => months.name === name)

  return response.send(foundName)
}

const getMonthByMoon = async (request, response) => {
  const { moon } = request.params

  const foundMoon = await months.filter((months) => months.moon === moon)

  return response.send(foundMoon)
}

const getMonthBySlug = (request, response) => {
  const { slug } = request.params

  const foundSlug = months.filter((months) => months.slug === slug)

  return response.send(foundSlug)
}

// const addNew > finish when info is orgaized

module.exports = (getAllMonths, getMonthBySlug, getMonthByMoon, getMonthByName)
