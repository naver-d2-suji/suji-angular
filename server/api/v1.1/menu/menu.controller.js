'use strict';
var db = require('./menu.model.js');
var ERROR = require('../../../components/error.code.js');
var Module = require('../../../components/api_module.js');

exports.index = function(req, res) {
  var _category = req.params.category;
  db.selectMenuTable(_category, function(results){
    res.send(results);
  });
};

exports.show = function(req, res) {
  Module.selectTable('MENU', function(results){

    res.send(results);
  });
};

exports.insert = function(req, res) {
  console.log(req.body);
  var _name = req.body.NAME;
  var _price = req.body.PRICE;
  var _cost = req.body.COST;
  if(req.body.TAX_MODE == 'false') {
    var _tax_mode = 0;
  } else {
    var _tax_mode = 1;
  }

  var _barcode = req.body.BARCODE;
  var _category_name = req.body.CATEGORY_NAME;
  var datas = [_name, _price, _cost, _tax_mode, _barcode, _category_name];

  db.insertMenu(datas, function(isSuccess){
    switch(isSuccess){
      case true:
        res.redirect('/');
        break;
      case ERROR.NO_NAME_IN_CATEGORY:
        res.send('<script>alert("Error! There is no Category name");history.back();</script>');
        break;
      case ERROR.DUPLICATE:
        res.send('<script>alert("Error! Duplicate ID");history.back();</script>');
        break;
      case ERROR.INSERT_MENU:
        res.send('<script>alert("Error! Insert Menu Error");history.back();</script>');
        break;
    }
  });
};

exports.delete = function(req, res){
  var _name = req.body.NAME;
  var datas = [_name];

  db.deleteMenu(datas, function(isSuccess){
    switch(isSuccess){
      case true:
        res.redirect('/');
        break;
      case ERROR.NO_NAME_IN_MENU:
        res.send('<script>alert("Error! There is no NAME in MENU");history.back();</script>');
        break;
      case ERROR.DELETE_MENU:
        res.send('<script>alert("Error! Delete MENU Error");history.back();</script>');
        break;
    }
  });
};
