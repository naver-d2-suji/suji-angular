'use strict';
var express = require('express');
var controller = require('./shop.controller.js');
var router = express.Router();

router.get('/', controller.index);

module.exports = router;
