'use strict';
var express = require('express');
var controller = require('./category.controller.js');
var router = express.Router();

router.get('/:username', controller.index);
router.get('/insert', controller.renderInsert);
router.post('/insert/:username', controller.insert);

module.exports = router;
