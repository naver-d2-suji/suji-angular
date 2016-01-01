'use strict';
var db = require('./shop.model.js');
var ERROR = require('../../../../components/error.code.js');

exports.index = function(req, res) {
  db.showSHOP(function(results){
    res.send(results);
  });
};
