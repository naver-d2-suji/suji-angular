'use strict';
var express = require('express');
var controller = require('./user.controller.js');
var router = express.Router();

router.get('/login', controller.login);

module.exports = router;
