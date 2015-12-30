'use strict';
var Client = require('mariasql');
var async = require('async');

var c = new Client({
  host: 'localhost',
  user: 'root',
  password: '',
  db: 'suji_dev'
});

function checkExistRow(_table, _column, _toCheck, callback){
  var queryString = 'SELECT EXISTS(SELECT 1 FROM ' + _table + ' WHERE ' + _column + ' = :toCheck) AS checkResult';
  var isDuplicate = false;

  c.query(queryString, { toCheck :_toCheck }, function(err, row) {
    if (err) throw err;
    if (row[0].checkResult == 1) //0 : not duplicate, 1 : duplicate
      isDuplicate = true;
    callback(isDuplicate);
  });
  c.end();
}
exports.checkExistsRows = checkExistRow;

