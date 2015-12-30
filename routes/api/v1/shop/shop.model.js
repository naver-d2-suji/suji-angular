'use strict';
var Client = require('mariasql');
var async = require('async');
var ERROR = require('../../../../components/error.code.js');

var c = new Client({
  host: 'localhost',
  user: 'root',
  password: '',
  db: 'suji_dev_v1'
});

exports.showSHOP = function(callback){
  c.query('SELECT * FROM SHOP', function(err, rows){
    if (err)
      throw err;
    callback(rows);
  });
  c.end();
};
