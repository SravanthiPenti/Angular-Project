'use strict';

var express = require('express');
var weatherController=require('./weather.controller');

var router = express.Router();

router.get('/getWeather',weatherController.getWeather);


module.exports = router;