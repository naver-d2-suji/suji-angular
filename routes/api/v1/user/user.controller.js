'use strict';
var db = require('./user.model.js');
var ERROR = require('../../../../components/error.code.js');

exports.index = function(req, res) {
  db.showUserID(function(results){
    res.send(results);
  });
};

exports.join = function(req, res) {
  res.render('v1/user/join', {
    title : 'Join User'
  });
};

exports.create = function(req, res) {
  var _id = req.body.id;
  var _password = req.body.password;
  var _admin_password = req.body.admin_password;
  var datas = [_id, _password, _admin_password];

  if(_password != req.body.password_check) {
    res.send('<script>alert("Error! Should equal to password and password_check");history.back();</script>');
  }

  db.createUser(datas, function(isSuccess){
    switch(isSuccess){
      case true:
        res.redirect('/');
        break;
      case ERROR.DUPLICATE:
        res.send('<script>alert("Error! Duplicate ID");history.back();</script>');
        break;
      case ERROR.INSERT_USER:
        res.send('<script>alert("Error! Insert User Error");history.back();</script>');
        break;
    }
  });
};
