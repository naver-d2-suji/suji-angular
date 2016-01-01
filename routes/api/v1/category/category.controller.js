'use strict';
var db = require('./category.model.js');
var ERROR = require('../../../../components/error.code.js');

exports.index = function(req, res) {
  db.showCategories(function(results){
    res.send(results);
  });
};

exports.addForm = function(req, res) {
  res.render('v1/category/addForm', {
    title : 'Add Category'
  });
};

exports.addCategory = function(req, res) {
  console.log(req.body);
  var _name = req.body.name;
  var _shoppk = req.body.shoppk;
  var datas = [_name, _shoppk];

  db.insertCategory(datas, function (isSuccess) {
    switch(isSuccess){
      case true:
        res.redirect('/');
        break;
      case ERROR.NO_SHOP:
        res.send('<script>alert("Error! You Have no SHOP");history.back();</script>');
        break;
      case ERROR.DUPLICATE:
        res.send('<script>alert("Error! Duplicate NAME");history.back();</script>');
        break;
      case ERROR.INSERT_CATEGORY:
        res.send('<script>alert("Error! Insert Category Error");history.back();</script>');
        break;
    }
  });
};
