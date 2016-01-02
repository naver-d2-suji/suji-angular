/**
 * Created by bw on 15. 12. 27.
 */

'use strict';

var express = require('express');
var controller = require('./product.controller.js');
var router = express.Router();

router.get('/', controller.index);
router.get('/additem', controller.additem);
router.get('/showdata', controller.showData);
router.get('/deleteitem', controller.deleteitem);
router.get('/search', controller.searchitem);

router.post('/createitem', controller.createItem);
router.post('/removeitem', controller.deleteItem);
router.post('/searchitem', controller.searchItem);

module.exports = router;
