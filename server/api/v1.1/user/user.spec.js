'use strict';
var app = require('../../../app');
var request = require('supertest');
var should = require('should');

/*

describe('GET /api/v1.1/purchase', function() {
  it('should respond with JSON array', function(done) {
    request(app)
      .get('/api/v1.1/purchase')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Array);
        done();
      });
  });
});

describe('GET /api/v1.1/purchase/add', function() {
  it('should respond with text/html', function(done) {
    request(app)
      .get('/api/v1.1/purchase/add')
      .expect(200)
      .expect('Content-Type', "text/html; charset=utf-8")
      .end(function(err, res) {
        if (err) return done(err);
        res.should.exist;
        res.status.should.equal(200);
        done();
      });
  });
});

describe('POST /api/v1.1/purchase/add', function() {
  it('should respond with redirect on POST', function(done) {
    request(app)
      .post('/api/v1.1/purchase/add')
      .send({ 'name' : 'test', 'quantity' : 3, 'purchase_time' : '1998-12-31 23:59:59' })
      .expect(302) //redirect
      .end(function(err, res) {
        if (err) return done(err);
        res.should.exist;
        res.status.should.equal(302);
        done();
      });
  });
});

describe('POST /api/v1.1/purchase/add without PURCHASE_TIME', function() {
  it('should respond with redirect on POST', function(done) {
    request(app)
      .post('/api/v1.1/purchase/add')
      .send({ 'name' : 'test', 'quantity' : 3})
      .expect(302) //redirect
      .end(function(err, res) {
        if (err) return done(err);
        res.should.exist;
        res.status.should.equal(302);
        done();
      });
  });
});
describe('POST /api/v1.1/purchase/delete', function() {
  it('should respond with redirect on POST', function(done) {
    request(app)
      .post('/api/v1.1/purchase/delete')
      .send({ 'name' : 'test', 'quantity' : 3, 'purchase_time' : '1998-12-31 23:59:59' })
      .expect(302) //redirect
      .end(function(err, res) {
        if (err) return done(err);
        res.should.exist;
        res.status.should.equal(302);
        done();
      });
  });
});
*/
