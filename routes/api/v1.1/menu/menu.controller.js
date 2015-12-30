'use strict';
var db = require('./menu.model.js');
var ERROR = require('../../../../components/error.code.js');

exports.index = function(req, res) {
  db.showMenu(function(results){
    res.send(results);
  });
};

exports.renderInsert = function(req, res) {
  res.render('v1.1/menu/insert', {
    title : 'Insert Menu'
  });
};

exports.insert = function(req, res) {
  var _name = req.body.name;
  var _price = req.body.price;
  var _cost = req.body.cost;
  var _tax_mode = req.body.tax_mode;
  var _barcode = req.body.barcode;
  var _category_name = req.body.category_name;
  var datas = [_name, _price, _cost, _tax_mode, _barcode, _category_name];

  db.insertMenu(datas, function(isSuccess){
    switch(isSuccess){
      case true:
        res.redirect('/');
        break;
      case ERROR.NO_CATEGORY_NAME:
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
