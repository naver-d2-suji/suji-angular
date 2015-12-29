'use strict';
var Client = require('mariasql');
var async = require('async');
var ERROR = require('../../../../components/error.code.js');

var c = new Client({
  host: 'localhost',
  user: 'root',
  password: '',
  db: 'suji_dev'
});

exports.showUserID = function(callback){
  c.query('SELECT ID FROM USER', function(err, rows){
    if (err)
      throw err;
    callback(rows);
  });
  c.end();
};


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



function insertUser(datas, callback){
  var _id = datas[0];
  var _password = datas[1];
  var _admin_password = datas[2];
  var isSuccess = false;

  c.query('INSERT INTO USER(ID, PASSWORD, ADMIN_PASSWORD) VALUES(:id, :password, :admin_password)',
    { id : _id, password : _password, admin_password : _admin_password }, function(err, row){
      if(err) throw(err);
      if(row.info.affectedRows == 1){
        isSuccess = true;
      }
      callback(isSuccess);
    });
  c.end();
}

exports.createUser = function(datas, callback){
  var _id = datas[0];

  async.waterfall([
    function(callback){
      checkExistRow('USER', 'ID', _id, function(isDuplicate){
        if(isDuplicate) callback(true, ERROR.DUPLICATE);
        else callback(null, isDuplicate);
      });
    },
    function(isDuplicate, callback) {
      insertUser(datas, function (success) {
        if(!success) callback(true, ERROR.INSERT_USER);
        else callback(null, success);
      });
    }],
    function(err, results){
      if(err) callback(results);
      else callback(results);
    }
  );
};
