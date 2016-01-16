'use strict';

var express = require('express');
var controller = require('./user.controller.js');
var router = express.Router();

router.post('/login', controller.login);
router.post('/register', controller.register);
router.post('/insert/categories', controller.insert);
router.get('/store/:_username', controller.store);

module.exports = router;
