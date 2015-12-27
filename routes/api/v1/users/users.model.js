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
  console.log('tst');
};
