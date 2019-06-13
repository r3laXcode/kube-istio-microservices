const express = require('express')

const User = require('./api/user')

const app = express();
const port = 5001

app.get('/', (req, res) => {
  res.json(User)
})

app.get('/api/users', (req, res) => {
  res.json(User)
})

app.listen(port, () => {
  console.log(`Server Starts at ${port}`)
})