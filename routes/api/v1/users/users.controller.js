'use strict';
var db = require('./users.model.js');

exports.index = function(req, res) {
  res.render('index', {
    title : 'Join User'
  });
};

exports.create = function(req, res) {
  console.log(req.body);
  var _id = req.body.id;
  var _password = req.body.password;
  var _admin_password = req.body.admin_password;
  var datas = [_id, _password, _admin_password];

  db.createUser(datas, function(isSuccess){
    if(isSuccess){
      res.redirect('/');
    }
    else {
      res.render('error', {
        message : 'Error Create User'
      });
    }
  });
};
