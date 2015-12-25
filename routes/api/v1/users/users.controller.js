'use strict'
var Client = require('mariasql');

var c = new Client({
  host: 'localhost',
  user: 'root',
  password: ''
});

exports.index = function(req, res) {
  c.query('SHOW DATABASES', function(err, rows) {
    if (err)
      throw err;
    res.send(rows);
  });
  c.end();
};

