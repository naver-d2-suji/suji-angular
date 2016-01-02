'use strict';
var db = require('./purchase.model.js');
var ERROR = require('../../../../components/error.code.js');
var Module = require('../../../../components/api_module.js');

exports.index = function(req, res) {
  Module.selectTable('PURCHASE', function(results){
    res.send(results);
  });
};

exports.renderAdd = function(req, res) {
  res.render('v1.1/purchase/add', {
    title : 'Add purchase'
  });
};

exports.add = function(req, res) {
  var _name = req.body.name;
  var _quantity = req.body.quantity;
  var _purchase_time = req.body.purchase_time;
  var datas = [_name, _quantity, _purchase_time];

  db.addPurchase(datas, function(isSuccess){
    switch(isSuccess){
      case true:
        res.redirect('/');
        break;
      case ERROR.NO_NAME_IN_MENU:
        res.send('<script>alert("Error! There is no name in MENU");history.back();</script>');
        break;
      case ERROR.ADD_PURCHASE:
        res.send('<script>alert("Error! Add PURCHASE Error");history.back();</script>');
        break;
    }
  });
};

exports.delete = function(req, res){
  var _name = req.body.name;
  var _quantity = req.body.quantity;
  var _purchase_time = req.body.purchase_time;
  var datas = [_name, _quantity, _purchase_time];

  db.deletePurchase(datas, function(isSuccess){
    console.log(isSuccess);
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
