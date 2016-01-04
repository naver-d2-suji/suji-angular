'use strict';
var db = require('./user.model.js');
var ERROR = require('../../../components/error.code.js');
var Module = require('../../../components/api_module.js');

exports.login = function(req, res) {
  var _email = req.body.email;
  var _password = req.body.password;
  var datas = [_email, _password];

  db.checkLogin(datas, function(results){
    res.send(results);
  });
};

