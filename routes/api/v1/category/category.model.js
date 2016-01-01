'use strict';
var Client = require('mariasql');
var async = require('async');
var ERROR = require('../../../../components/error.code.js');
var Module = require('../user/user.model.js');

var c = new Client({
  host: 'localhost',
  user: 'root',
  password: '',
  db: 'suji_dev_v1'
});

exports.showCategories = function(callback){
 c.query('SELECT NAME FROM CATEGORY', function(err, rows){
    if (err)
      throw err;
    callback(rows);
  });
  c.end();
};


exports.insertCategory = function(datas, callback){
  var _name = datas[0];
  var _shoppk = datas[1];

  async.waterfall([
    function(callback){
      //For Check SHOPPK
      Module.checkExistsRows('SHOP', 'ID', _shoppk, function(isSHOP){
        if(!isSHOP) callback(true, ERROR.NO_SHOP);
        else callback(null, isSHOP);
      });
    },
    function(isSHOP, callback){
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
  var _shoppk = datas[1];
  var isSuccess = false;

  c.query('INSERT INTO CATEGORY(NAME, SHOPPK) VALUES(:name, :shoppk)',
    {name:_name, shoppk:_shoppk}, function(err, row){
      if(err) throw(err);
      if(row.info.affectedRows == 1){
        isSuccess = true;
      }
      callback(isSuccess);
    });
  c.end();
}
