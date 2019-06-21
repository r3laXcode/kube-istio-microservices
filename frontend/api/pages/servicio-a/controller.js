const callService = require('../call-service');

exports.index =  (req, res, next) => {
    callService(`http://servicioa:5000`, req.headers).then(data => {
        res.send(data);
      }).catch(err => {
        res.status(503);
        //res.send(request.headers);
        res.send(`Failed to communicate with servicioa due to:${err}`);
      });
}