const express = require('express')
const app = express()

// Servicio A
const svcA = require("./pages/servicio-a")
const svcB = require("./pages/servicio-b")



app.get('/', (req, res, next) => {
  res.send('API root')
})

app.use("/servicioa",svcA);
app.use("/serviciob",svcB);


// export the server middleware
module.exports = {
  path: '/api',
  handler: app
}