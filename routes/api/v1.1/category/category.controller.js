'use strict';
var db = require('./category.model.js');
var ERROR = require('../../../../components/error.code.js');

exports.index = function(req, res) {
  db.showCategory(function(results){
    res.send(results);
  });
};

exports.renderInsert = function(req, res) {
  res.render('v1.1/category/insert', {
    title : 'Insert Category'
  });
};

exports.insert = function(req, res) {
  var _name = req.body.name;
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
