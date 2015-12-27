'use strict';
var db = require('./users.model.js');

exports.index = function(req, res) {
  db.showList(function(results){
    res.send(results);
  });
};
