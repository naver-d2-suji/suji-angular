'use strict';
var db = require('./users.model.js');

var ERROR_DUPLICATE = 100;
var ERROR_INSERT_USER = 101;

exports.join = function(req, res) {
  res.render('users/join', {
    title : 'Join User'
  });
};

exports.create = function(req, res) {
  console.log(req.body);
  var _id = req.body.id;
  var _password = req.body.password;
  var _admin_password = req.body.admin_password;
  var datas = [_id, _password, _admin_password];

  if(_password != req.body.password_check) {
    res.send('<script>alert("Error! Should equal to password and password_check");history.back();</script>');
  }

  db.createUser(datas, function(isSuccess){
    console.log(isSuccess);
    switch(isSuccess){
      case true:
        res.redirect('/');
            break;
      case ERROR_DUPLICATE:
        res.send('<script>alert("Error! Duplicate ID");history.back();</script>');
            break;
      case ERROR_INSERT_USER:
        res.send('<script>alert("Error! Insert User Error");history.back();</script>');
        break;
    }
  });
};
