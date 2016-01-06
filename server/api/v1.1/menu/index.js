'use strict';
var express = require('express');
var controller = require('./menu.controller.js');
var router = express.Router();

router.get('/test', controller.test);
router.get('/', controller.show);
router.post('/insert', controller.insert);
router.post('/delete', controller.delete);
router.get('/:category', controller.index);

module.exports = router;
