'use strict';

var express = require('express');
var controller = require('./git.controller');

var router = express.Router();

router.get('/git', controller.getCommitsList);

module.exports = router;