'use strict';
var Client = require('mariasql');

var c = new Client({
  host: 'localhost',
  user: 'root',
  password: ''
});

exports.showList = function(callback){
  c.query('SHOW DATABASES', function(err, rows) {
    if (err)
      throw err;
    callback(rows);
  });
  c.end();
};

exports.createUser = function(datas, callback){
  var _id = datas[0];
  var _password = datas[1];
  var _admin_password = datas[2];

  c.query('INSERT INTO USER(id, password, admin_password) VALUES(:id, :password, :admin_password)',
    { id : _id, password : _password, admin_password : _admin_password }, function(err, row){
      var success;
      if(err) throw err;
      console.log(row);
      if(row.affectedRows == 1){
        success = true;
      }
      callback(success);
    });

  c.end();
};
