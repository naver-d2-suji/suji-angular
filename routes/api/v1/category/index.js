'use strict';
var express = require('express');
var controller = require('./category.controller.js');
var router = express.Router();


router.get('/', controller.index);
router.get('/add', controller.addForm);
router.post('/add', controller.addCategory);

module.exports = router;
