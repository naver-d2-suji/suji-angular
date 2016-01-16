'use strict';

var db = require('./category.model.js');
var ERROR = require('../module/error.code.js');

exports.index = function(req, res) {
  db.selectCategoryTable(function(results){
    res.send(results);
  });
};

exports.list = function(req, res) {
  var _username = req.params._username;

  db.selectUserCategories(_username, function(results){
    // results : { "CATEGORIES": "Cupcake,Cupcake,Cupcake,Cupcake11" }
    var categoryList = results.CATEGORIES.split(',');
    var uniqueArray = categoryList.filter(function(elem, pos) {
      return categoryList.indexOf(elem) == pos;
    });
    res.send(uniqueArray);
  });
};

exports.insert = function(req, res) {
  var _name = req.body.NAME;
  var datas = [_name];

  db.insertCategory(datas, function (isSuccess) {
    switch(isSuccess){
      case true:
        res.status(200).send({status:'success'});
        break;
      case ERROR.DUPLICATE:
        res.status(500).send({status:'error', message : 'Error! Duplicate Category Name'});
        break;
      case ERROR.INSERT_CATEGORY:
        res.status(500).send({status:'error', message : 'Error! Insert Category Error'});
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
        res.status(200).send({status:'success'});
        break;
      case ERROR.NO_NAME_IN_CATEGORY:
        res.status(500).send({status:'error', message : 'Error! There is no NAME'});
        break;
      case ERROR.DELETE_CATEGORY:
        res.status(500).send({status:'error', message : 'Error! Delete Category Error'});
        break;
    }
  });
};
