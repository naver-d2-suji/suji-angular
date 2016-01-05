'use strict';
var express = require('express');
var controller = require('./menu.controller.js');
var router = express.Router();

router.get('/', controller.show);
router.post('/insert', controller.insert);
router.post('/delete', controller.delete);
router.get('/:name', controller.index);

module.exports = router;
