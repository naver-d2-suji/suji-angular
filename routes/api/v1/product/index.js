/**
 * Created by bw on 15. 12. 27.
 */

'use strict';

var express = require('express');
var controller = require('./product.controller.js');
var router = express.Router();

router.get('/', controller.index);
router.get('/additem', controller.additem);
router.post('/createitem', controller.createItem);
router.get('/showdata', controller.showData);

module.exports = router;
