'use strict';
var db = require('./history.model.js');
var ERROR = require('../../../../components/error.code.js');
var Module = require('../../../../components/api_module.js');

exports.index = function(req, res) {
  Module.selectTable('HISTORY', function(results){
    res.send(results);
  });
};
