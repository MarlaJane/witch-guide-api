const express = require('express')
// const { getAllMonths, /* getMonthByMoon*/ } = require('./controllers/months')

const app = express()

app.set('view engine', 'pug')

app.use(express.static('public'))

app.get('/', (request, response) => response.render('index'))

// app.get('/months', getAllMonths)

// app.get('/:moon', getMonthByMoon)

app.all('*', (request, response) => {
  return response.status(404).send("Witch don't kill my vibe! Try again.")
})

app.listen(2319, () => {
  console.log('Listening on 2319...') // eslint-disable-line no-console
})
