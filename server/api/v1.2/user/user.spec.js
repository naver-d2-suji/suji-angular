'use strict';

var app = require('../../../app');
var request = require('supertest');
var should = require('should');

describe('POST /api/v1.2/user/register', function() {
  it('should respond success', function(done) {
    request(app)
      .post('/api/v1.2/user/register')
      .send({ 'username' : '1234', 'password' : '1234', 'storeName' : '112ksjfhsdkfjs', 'storeAddress' : 'sadhasdashdaskjdhdskja'})
      .expect(302)
      .end(function(err, res) {
        if (err) return done(err);
        res.status.should.equal(302);
        done();
      });
  });
});

describe('POST /api/v1.2/user/login', function() {
   it('should respond with JSON array', function(done) {
    request(app)
      .post('/api/v1.2/user/login')
      .send({ 'username' : '1234', 'password' : '1234'})
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        console.log(res.body);
        res.body.should.have.property('success');
        done();
      });
  });
});


describe('GET /api/v1.2/user/store/1234', function() {
  it('should respond with JSON array', function(done) {
    request(app)
      .get('/api/v1.2/user/store/1234')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.have.property('STORE_ADDRESS');
        done();
      });
  });
});

describe('POST /api/v1.2/user/insert/categories', function() {
   it('should respond success ', function(done) {
    request(app)
      .post('/api/v1.2/user/insert/categories')
      .send({ 'NAME' : 'Cake', 'username' : 'test'})
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.have.property('status');
        done();
      });
  });
});

describe('POST /api/v1.2/user/insert/categories', function() {
   it('should respond success ', function(done) {
    request(app)
      .post('/api/v1.2/user/insert/categories')
      .send({ 'NAME' : 'Coffee', 'username' : 'test'})
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.have.property('status');
        done();
      });
  });
});
