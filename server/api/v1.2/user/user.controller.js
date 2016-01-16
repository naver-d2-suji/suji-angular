'use strict';
var db = require('./user.model.js');
var ERROR = require('../module/error.code.js');
var Crypto = require('../module/crypto.js');


exports.login = function(req, res) {
  var _username = req.body.username;
  var _password = Crypto.do_ciper(req.body.password);
  var datas = [_username, _password];

  db.checkLogin(datas, function(isSuccess){
    if(isSuccess){
      var response = { success : true};
    } else {
      var response = { message : 'Username or password is incorrect'};
    }
    res.send(response);
  });
};

exports.register = function(req, res) {
  var _username = req.body.username;
  var _password = Crypto.do_ciper(req.body.password);
  var _storeName = req.body.storeName;
  var _storeAddress = req.body.storeAddress;
  var datas = [_username, _password, _storeName, _storeAddress];

  db.registerUser(datas, function(isSuccess){
    switch(isSuccess){
      case true:
        res.redirect('/');
        break;
      case ERROR.DUPLICATE_USER:
        res.send('<script>alert("Error! There is already username");history.back();</script>');
        break;
      case ERROR.INSERT_USER:
        res.send('<script>alert("Error! Insert USER Error");history.back();</script>');
        break;
    }
  });
};

exports.store = function(req, res) {
  var _username = req.params._username;

  db.selectUserTable(_username, function(results){
    res.send(results);
  });
};

exports.insert = function(req, res){
  var _categoryName = req.body.NAME;
  var _username = req.body.username;
  var datas = [_username, _categoryName];
  console.log(datas);

  db.changeCategories(datas, function(isSuccess){
    switch(isSuccess){
      case true:
        res.status(200).send({status:'success'});
        break;
      case ERROR.INSERT_CATEGORY_INTO_USER:
        res.status(500).send({status:'error', message : 'Error! Insert CategoryName into USER Table'});
        break;
      case ERROR.UPDATE_CATEGORIES_IN_USER:
        res.status(500).send({status:'error', message : 'Error! Update Categories in USER Table'});
        break;
    }
  });
};
