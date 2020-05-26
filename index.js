const express = require('express')
const bodyParser = require('body-parser')
const {
  addMonth, getMonthByMoon, getAllMonths, getMonthByName, getMonthBySlug
} =
  require('./controllers/months')

const app = express()

app.set('view engine', 'pug')

app.use(express.static('public'))

app.use(bodyParser.json())

app.get('/', (request, response) => response.render('index'))

app.get('/months', getAllMonths)

app.get('/:moon', getMonthByMoon)

app.get('/:name', getMonthByName)

app.get('/:slug', getMonthBySlug)

app.post('/months', addMonth)

app.all('*', (request, response) => {
  return response.status(404).send("Witch don't kill my vibe! Try again.")
})

app.listen(2319, () => {
  console.log('Listening on 2319...') // eslint-disable-line no-console
})
