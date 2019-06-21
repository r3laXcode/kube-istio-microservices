const express = require('express');
const bodyParser = require('body-parser');
const probe = require('kube-probe');
const cors = require('cors');

const User = require('./api/user')

const app = express();
const port = 5000;

// Add basic health check endpoints
probe(app);

// Send and receive json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// CORS support
app.use(cors());

app.get('/', (req, res) => {
  res.json(User)
})

app.get('/api/users', (req, res) => {
  res.json(User)
})

app.listen(port, () => {
  console.log(`Server Starts at ${port}`)
})