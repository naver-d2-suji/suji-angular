'use strict';
var Client = require('mariasql');
var async = require('async');
var ERROR = require('../../../components/error.code.js');
var Module = require('../../../components/api_module.js');

var c = new Client({
  host: 'localhost',
  user: 'root',
  password: '',
  db: 'suji_dev'
});

exports.selectMenuTable = function(_cateogry, callback){
  c.query('SELECT * FROM MENU WHERE CATEGORY_NAME=:category',
    {category : _cateogry}, function(err, rows){
      if(err) throw(err);
      callback(rows);
    });
  c.end();
};

exports.insertMenu = function(datas, callback){
  var _name = datas[0];
  var _category_name = datas[5];

  async.waterfall([
    function(callback){
      Module.checkExistsRows('CATEGORY', 'NAME', _category_name, function(isName){
        if(!isName) callback(true, ERROR.NO_NAME_IN_CATEGORY);
        else callback(null, isName);
      });
    },
    function(isName, callback){
      Module.checkExistsRows('MENU', 'NAME', _name, function(isDuplicate){
        if(isDuplicate) callback(true, ERROR.DUPLICATE);
        else callback(null, isDuplicate);
      });
    },
    function(isDuplicate, callback) {
      insertData(datas, function (success) {
        if(!success) callback(true, ERROR.INSERT_MENU);
        else callback(null, success);
      });
    }],
    function(err, results){
      if(err) callback(results);
      else callback(results);
    }
  );
};

exports.deleteMenu = function(datas, callback){
  var _name = datas[0];
  console.log(datas);

  async.waterfall([
    function(callback){
      Module.checkExistsRows('MENU', 'NAME', _name, function(isName){
        if(!isName) callback(true, ERROR.NO_NAME_IN_MENU);
        else callback(null, isName);
      });
    },
    function(isName, callback){
      deleteData(datas, function(success){
        if(!success) callback(true, ERROR.DELETE_MENU);
        else callback(null, success);
      });
    }],
    function(err, results){
      if(err) callback(results);
      else callback(results);
    }
  );
};

function deleteData(datas, callback){
  var _name = datas[0];
  var isSuccess = false;

  c.query('DELETE FROM MENU WHERE NAME = :name', { name : _name }, function(err, row){
    if(err) throw(err);
    if(row.info.affectedRows == 1){
      isSuccess = true;
    }
    callback(isSuccess);
  });
  c.end();
}


function insertData(datas, callback){
  var _name = datas[0];
  var _price = datas[1];
  var _cost = datas[2];
  var _tax_mode = datas[3];
  var _barcode = datas[4];
  var _category_name = datas[5];
  var isSuccess = false;

  c.query('INSERT INTO MENU(NAME, PRICE, COST, TAX_MODE, BARCODE, CATEGORY_NAME) VALUES(:name, :price, :cost, :tax_mode, :barcode, :category_name)',
    { name : _name, price : _price, cost : _cost, tax_mode : _tax_mode, barcode : _barcode, category_name : _category_name }, function(err, row){
      if(err) throw(err);
      if(row.info.affectedRows == 1){
        isSuccess = true;
      }
      callback(isSuccess);
    });
  c.end();
}



