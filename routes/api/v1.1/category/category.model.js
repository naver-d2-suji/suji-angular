'use strict';
var Client = require('mariasql');
var async = require('async');
var ERROR = require('../../../../components/error.code.js');
var Module = require('../../../../components/api_module.js');

var c = new Client({
  host: 'localhost',
  user: 'root',
  password: '',
  db: 'suji_dev'
});

exports.insertCategory = function(datas, callback){
  var _name = datas[0];

  async.waterfall([
    function(callback){
      Module.checkExistsRows('CATEGORY', 'NAME', _name, function(isDuplicate){
        if(isDuplicate) callback(true, ERROR.DUPLICATE);
        else callback(null, isDuplicate);
      });
    },
    function(isDuplicate, callback) {
      insertData(datas, function (success) {
        if(!success) callback(true, ERROR.INSERT_CATEGORY);
        else callback(null, success);
      });
    }],
    function(err, results){
      if(err) callback(results);
      else callback(results);
    }
  );
};

function insertData(datas, callback){
  var _name = datas[0];
  var isSuccess = false;

  c.query('INSERT INTO CATEGORY(NAME) VALUES(:name)', { name:_name }, function(err, row){
      if(err) throw(err);
      if(row.info.affectedRows == 1){
        isSuccess = true;
      }
      callback(isSuccess);
    });
  c.end();
}
