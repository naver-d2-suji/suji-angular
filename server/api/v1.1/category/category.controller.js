'use strict';
var db = require('./category.model.js');
var ERROR = require('../../../components/error.code.js');
var Module = require('../../../components/api_module.js');

exports.index = function(req, res) {
  db.selectCategoryTable(function(results){
    res.send(results);
  });
};

exports.insert = function(req, res) {
  var _name = req.body.NAME;
  var datas = [_name];

  db.insertCategory(datas, function (isSuccess) {
    switch(isSuccess){
      case true:
        res.redirect('/');
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

exports.delete = function(req, res){
  var _name = req.body.NAME;
  var datas = [_name];

  db.deleteCategory(datas, function(isSuccess){
    switch(isSuccess){
      case true:
        res.redirect('/');
        break;
      case ERROR.NO_NAME_IN_CATEGORY:
        res.send('<script>alert("Error! There is no NAME in CATEGORY");history.back();</script>');
        break;
      case ERROR.DELETE_CATEGORY:
        res.send('<script>alert("Error! Delete Category Error");history.back();</script>');
        break;
    }
  });
};
