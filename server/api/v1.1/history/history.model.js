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


