const express = require('express')

const svcController = require('./controller.js');

const router = express.Router();

router.get('/', svcController.index);



module.exports = router;

