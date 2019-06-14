const express = require('express')

const User = require('./api/user')

const app = express();
const port = 5000;

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
  res.json(User)
})

app.get('/api/users', (req, res) => {
  res.json(User)
})

app.listen(port, () => {
  console.log(`Server Starts at ${port}`)
})