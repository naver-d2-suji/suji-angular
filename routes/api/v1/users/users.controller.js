'use strict'
var Client = require('mariasql');

var c = new Client({
  host: '127.0.0.1',
  user: 'root',
  password: 'tintree'
});

exports.index = function(req, res) {
  c.query('SHOW DATABASES', function(err, rows) {
    if (err)
      throw err;
    res.send(rows);
  });
  c.end();
};

