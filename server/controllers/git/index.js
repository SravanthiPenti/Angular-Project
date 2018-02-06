'use strict';

var express = require('express');
var controller = require('./git.controller');

var router = express.Router();

router.get('/git', controller.getCommitsList);
router.get('/repository',controller.getRepositoryList);

module.exports = router;