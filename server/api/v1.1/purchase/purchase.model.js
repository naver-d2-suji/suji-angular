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

exports.addPurchase = function(datas, callback){
  var _name = datas[0];

  async.waterfall([
      function(callback){
        Module.checkExistsRows('MENU', 'NAME', _name, function(isName){
          if(!isName) callback(true, ERROR.NO_NAME_IN_MENU);
          else callback(null, isName);
        });
      },
      function(isName, callback) {
        addData(datas, function (success) {
          if(!success) callback(true, ERROR.ADD_PURCHASE);
          else callback(null, success);
        });
      }],
    function(err, results){
      if(err) callback(results);
      else callback(results);
    }
  );
};

exports.deletePurchase = function(datas, callback){
  async.waterfall([
      function(callback){
        checkExistInPurchase(datas, function(isExist){
          if(!isExist) callback(true, ERROR.NO_DATA_IN_PURCHASE);
          else callback(null, isExist);
        });
      },
      function(isExist, callback){
        deleteData(datas, function(success){
          if(!success) callback(true, ERROR.DELETE_PURCHASE);
          else callback(null, success);
        });
      }],
    function(err, results){
      if(err) callback(results);
      else callback(results);
    }
  );
};

function checkExistInPurchase(datas, callback){
  var _name = datas[0];
  var _quantity = datas[1];
  var _purchase_time = datas[2];
  var isExist = false;

  var queryString = 'SELECT EXISTS(SELECT 1 FROM PURCHASE WHERE NAME=:name AND QUANTITY=:quantity AND PURCHASE_TIME=:purchase_time) AS checkResult';
  c.query(queryString,
    { name : _name, quantity:_quantity, purchase_time : _purchase_time}, function(err, row){
      if (err) throw err;
      if (row[0].checkResult == 1) //0 : not duplicate, 1 : duplicate
        isExist = true;
      callback(isExist);
    });
  c.end();
};

function deleteData(datas, callback){
  var _name = datas[0];
  var _quantity = datas[1];
  var _purchase_time = datas[2];
  var isSuccess = false;

  c.query('DELETE FROM PURCHASE WHERE NAME = :name AND QUANTITY = :quantity AND PURCHASE_TIME = :purchase_time',
    { name : _name, quantity : _quantity, purchase_time : _purchase_time}, function(err, row){
      if(err) throw(err);
      if(row.info.affectedRows == 1){
        isSuccess = true;
      }
      callback(isSuccess);
    });
  c.end();
}

function addData(datas, callback){
  var _name = datas[0];
  var _quantity = datas[1];
  var _total_price = datas[2];
  var _purchase_time = datas[3];
  var isSuccess = false;

  if(!_purchase_time){
    var query = 'INSERT INTO PURCHASE(NAME, QUANTITY, TOTAL_PRICE) VALUES(:name, :quantity, :totalPrice)';
    c.query(query, {name : _name, quantity : _quantity, totalPrice : _total_price}, function(err, row){
      if(err) throw(err);
      if(row.info.affectedRows == 1){
        isSuccess = true;
      }
      callback(isSuccess);
    });
  } else {
    var queryWithPurchaseTime = 'INSERT INTO PURCHASE(NAME, QUANTITY, PURCHASE_TIME) VALUES(:name, :quantity, :totalPrice, :purchase_time)';
    c.query(queryWithPurchaseTime, {name : _name, quantity : _quantity, totalPrice : _total_price, purchase_time: _purchase_time}, function(err, row){
      if(err) throw(err);
      if(row.info.affectedRows == 1){
        isSuccess = true;
      }
      callback(isSuccess);
    });
  }
  c.end();
}



