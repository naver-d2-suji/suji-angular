'use strict';

var express = require('express');
var controller = require('./employee.controller.js');
var router = express.Router();

router.get('/', controller.index);
router.post('/insert', controller.insert);
router.post('/delete', controller.delete);
router.post('/update', controller.update);

module.exports = router;
