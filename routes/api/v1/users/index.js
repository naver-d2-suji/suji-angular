'use strict';
var express = require('express');
var controller = require('./users.controller.js');
var router = express.Router();

router.get('/join', controller.join);
router.post('/join', controller.create);

module.exports = router;
