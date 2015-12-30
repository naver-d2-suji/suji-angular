'use strict';
var express = require('express');
var controller = require('./menu.controller.js');
var router = express.Router();

router.get('/', controller.index);
router.get('/insert', controller.renderInsert);
router.post('/insert', controller.insert);

module.exports = router;
