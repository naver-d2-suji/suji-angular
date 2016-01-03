'use strict';
var db = require('./user.model.js');
var ERROR = require('../../../components/error.code.js');
var Module = require('../../../components/api_module.js');

exports.login = function(req, res) {
  Module.selectTable('PURCHASE', function(results){
    res.send(results);
  });
};

