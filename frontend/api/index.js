const callService = require('./call-service');

const express = require('express')
const app = express()

app.get('/', (req, res, next) => {
  res.send('API root')
})

app.get('/servicioa', async (req, res, next) => {
    callService(`http://servicioa:5000`, req.headers).then(data => {
        res.send(data);
      }).catch(err => {
        res.status(503);
        //res.send(request.headers);
        res.send(`Failed to communicate with nodejs-istio-tracing-cute-name due to:${err}`);
      });
})

app.get('/serviciob', async (req, res, next) => {
    callService(`http://serviciob:5000`, req.headers).then(data => {
        res.send(data);
      }).catch(err => {
        res.status(503);
        //res.send(request.headers);
        res.send(`Failed to communicate with nodejs-istio-tracing-cute-name due to:${err}`);
      });
})

// export the server middleware
module.exports = {
  path: '/api',
  handler: app
}