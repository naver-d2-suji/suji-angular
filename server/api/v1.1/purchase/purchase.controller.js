'use strict';
var db = require('./purchase.model.js');
var ERROR = require('../../../components/error.code.js');
var Module = require('../../../components/api_module.js');

exports.index = function(req, res) {
  Module.selectTable('PURCHASE', function(results){
    res.send(results);
  });
};

exports.add = function(req, res) {
  var result = false;

  req.body.forEach(function(eachItem){
    var _name = eachItem.itemId;
    var _quantity = eachItem.orderedItemCnt;
    var _total_price = eachItem.totalPrice;
    var _purchase_time = eachItem.purchase_time;
    var datas = [_name, _quantity, _total_price, _purchase_time];


    db.addPurchase(datas, function(isSuccess){
      switch(isSuccess){
        case true:
          result = true;
          break;
        case ERROR.NO_NAME_IN_MENU:
          result = false;
          break;
        case ERROR.ADD_PURCHASE:
          result = false;
          break;
      }
    });
  });

  if(result == true) {
    res.redirect('/');
  } else {
    res.send('<script>alert("Error! Add PURCHASE Error");history.back();</script>');
  }
};

exports.delete = function(req, res){
  var _name = req.body.name;
  var _quantity = req.body.quantity;
  var _purchase_time = req.body.purchase_time;
  var datas = [_name, _quantity, _purchase_time];

  db.deletePurchase(datas, function(isSuccess){
    switch(isSuccess){
      case true:
        res.redirect('/');
        break;
      case ERROR.NO_DATA_IN_PURCHASE:
        res.send('<script>alert("Error! There is no Data in PURCHASE");history.back();</script>');
        break;
      case ERROR.DELETE_PURCHASE:
        res.send('<script>alert("Error! Delete PURCHASE Error");history.back();</script>');
        break;
    }
  });
};
