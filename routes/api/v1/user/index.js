'use strict';
var express = require('express');
var controller = require('./user.controller.js');
var router = express.Router();

router.get('/', controller.index);
router.get('/join', controller.join);
router.post('/join', controller.create);

module.exports = router;
