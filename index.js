const express = require('express')
const bodyParser = require('body-parser')
const { getAllMonths, getMonthByName, getMonthBySlug } = require('./controllers/months')
const { getAllMoons, getMoonByName, getMoonByMonth } = require('./controllers/moons')
const {
  getAllActivities, getActivitiesByMonth,
  getActivitiesByMoon, addActivities, deleteActivities
} = require('./controllers/activities')


const app = express()

app.set('view engine', 'pug')

app.use(express.static('public'))

app.use(bodyParser.json())

app.get('/', (request, response) => response.render('index'))

app.get('/months', getAllMonths)
app.get('/months/:name', getMonthByName)
app.get('/months/:slug', getMonthBySlug)

app.get('/moons', getAllMoons)
app.get('/moons/:name', getMoonByName)
app.get('/moons/month/:monthId', getMoonByMonth)

app.get('/activities', getAllActivities)
app.get('/activities/month/:monthId', getActivitiesByMonth)
app.get('/activities/moon/:moonId', getActivitiesByMoon)
app.post('/activities', addActivities)
app.delete('/activities/:id', deleteActivities)

app.all('*', (request, response) => {
  return response.status(404).send("Witch don't kill my vibe! Try again.")
})

app.listen(2319, () => {
  console.log('Listening on 2319...') // eslint-disable-line no-console
})
