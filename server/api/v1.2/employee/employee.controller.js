'use strict';

var db = require('./employee.model.js');
var ERROR = require('../../module/error.code.js');

exports.index = function(req, res) {
  db.selectEmployeeTable(function(results) {
    res.send(results);
  });
};

exports.insert = function(req, res) {
  var _id = req.body.id;
  var _name = req.body.name;
  var _title = req.body.title;
  var _employer = req.body.employer;
  var datas = [_id, _name, _title, _employer];

  db.insertEmployee(datas, function(isSuccess) {
    switch (isSuccess) {
      case true:
        res.status(200).send({
          status: 'success'
        });
        break;
      case ERROR.NO_USERNAME_IN_USER:
        res.status(500).send({
          status: 'error',
          message: 'Error! No Employer\'s name'
        });
        break;
      case ERROR.DUPLICATE:
        res.status(500).send({
          status: 'error',
          message: 'Error! Duplicate Employee ID'
        });
        break;
      case ERROR.INSERT_EMPLOYEE:
        res.status(500).send({
          status: 'error',
          message: 'Error! Insert Employee Error'
        });
        break;
    }
  });
};

exports.delete = function(req, res) {
  var _id = req.body.ID;
  var datas = [_id];

  db.deleteEmployee(datas, function(isSuccess) {
    switch (isSuccess) {
      case true:
        res.status(200).send({
          status: 'success'
        });
        break;
      case ERROR.NO_ID_IN_EMPLOYEE:
        res.status(500).send({
          status: 'error',
          message: 'Error! There is no ID'
        });
        break;
      case ERROR.DELETE_EMPLOYEE:
        res.status(500).send({
          status: 'error',
          message: 'Error! Delete EMPLOYEE Error'
        });
        break;
    }
  });
};

exports.update = function(req, res){
  var _id = req.body.ID;
  var _name = req.body.NAME;
  var _title = req.body.TITLE;
  var _employer = req.body.EMPLOYER;
  var datas = [_id, _name, _title, _employer];

  db.updateEmployee(datas, function(isSuccess) {
    switch (isSuccess) {
      case true:
        res.status(200).send({
          status: 'success'
        });
        break;
      case ERROR.NO_USERNAME_IN_USER:
        res.status(500).send({
          status: 'error',
          message: 'Error! No Employer\'s name'
        });
        break;
      case ERROR.NO_ID_IN_EMPLOYEE:
        res.status(500).send({
          status: 'error',
          message: 'Error! No Employee ID'
        });
        break;
      case ERROR.UPDATE_EMPLOYEE:
        res.status(500).send({
          status: 'error',
          message: 'Error! Update Employee'
        });
        break;
    }
  });
};