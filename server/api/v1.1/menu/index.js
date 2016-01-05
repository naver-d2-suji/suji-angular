'use strict';
var express = require('express');
var controller = require('./menu.controller.js');
var router = express.Router();

router.get('/:category', controller.index);
router.get('/insert', controller.renderInsert);
router.post('/insert', controller.insert);
router.post('/delete', controller.delete);

module.exports = router;
