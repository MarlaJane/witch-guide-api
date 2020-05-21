const express = require('express')

const app = express()

app.set('view engine', 'pug')

app.use(express.static('public'))

app.get('/months', (request, response) => {
  return response.render('index')
})

app.all('*', (request, response) => {
  return response.status(404).send("Witch don't kill my vibe! Try again.")
})

app.listen(2319, () => {
  console.log('Listening on 2319...') // eslint-disable-line no-console
})
