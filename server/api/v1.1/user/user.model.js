'use strict';
var Client = require('mariasql');
var async = require('async');
var ERROR = require('../../../components/error.code.js');
var Module = require('../../../components/api_module.js');

var c = new Client({
  host: 'localhost',
  user: 'root',
  password: '',
  db: 'suji_dev'
});

exports.checkLogin = function(datas, callback){
  var _email = datas[0];
  var _password = datas[1];

  c.query('SELECT EMAIL, PASSWORD, MANAGER FROM USER WHERE EMAIL=:email AND PASSWORD=:password',
    {email : _email, password : _password}, function(err, row){
      if(err) throw(err);
      callback(row);
      console.log(row);
    });
  c.end();
};

