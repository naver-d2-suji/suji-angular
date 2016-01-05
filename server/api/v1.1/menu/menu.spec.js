'use strict';
var app = require('../../../app');
var request = require('supertest');
var should = require('should');

/*
describe('GET /api/v1.1/menu', function() {
  it('should respond with JSON array', function(done) {
    request(app)
      .get('/api/v1.1/menu')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Array);
        done();
      });
  });
});

describe('GET /api/v1.1/menu/insert', function() {
  it('should respond with text/html', function(done) {
    request(app)
      .get('/api/v1.1/menu/insert')
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

describe('POST /api/v1.1/menu/insert', function() {
  it('should respond with redirect on POST', function(done) {
    request(app)
      .post('/api/v1.1/menu/insert')
      .send({ 'name' : '_name', 'price' : '_price', 'cost' : '_cost', 'tax_mode' : '_tax_mode', 'barcode' : '_barcode', 'category_name' : 'test' })
      .expect(302) //redirect
      .end(function(err, res) {
        if (err) return done(err);
        res.should.exist;
        res.status.should.equal(302);
        done();
      });
  });
});

describe('POST /api/v1.1/menu/delete', function() {
  it('should respond with redirect on POST', function(done) {
    request(app)
      .post('/api/v1.1/menu/delete')
      .send({ 'name' : '_name' })
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
