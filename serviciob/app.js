const http = require('http');
const express = require('express')
const bodyParser = require('body-parser');
const probe = require('kube-probe');
const nameService = require('./lib/name-service-client');


const User = require('./api/user')
//const Servicioa = require('./api/servicioa')


const app = express();
const port = 5000;

// Add basic health check endpoints
probe(app);

const nameServiceHost = 'http://servicioa:5000';

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
 
// Send and receive json
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json(User)
})

app.get('/servicioa', (req, res) => {

  console.log(process.env.NAME_SERVICE_HOST)

  nameService(`${nameServiceHost}`, req.headers)
    .then(data => {
      res.json({content:data});
    }).catch(err => {
      res.status(503);
      res.send(`Failed to communicate with servicioa:${err}`);
  });

})

app.get('/api/users', (req, res) => {
  res.json(User)
})

app.listen(port, () => {
  console.log(`Server Starts at ${port}`)
})