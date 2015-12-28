'use strict';
var app = require('../../../../app');
var request = require('supertest');
var should = require('should');

describe('GET /api/v1/category', function() {
  it('should respond with JSON array', function(done) {
    request(app)
      .get('/api/v1/category')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Array);
        done();
      });
  });
});

describe('GET /api/v1/category/add', function() {
  it('should respond with text/html', function(done) {
    request(app)
      .get('/api/v1/category/add')
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

describe('POST /api/v1/category/add', function() {
  it('should respond with redirect on POST', function(done) {
    request(app)
      .post('/api/v1/category/add')
      .send({'name':'test', 'shoppk':'1'})
      .expect(302) //redirect
      .end(function(err, res) {
        if (err) return done(err);
        res.should.exist;
        res.status.should.equal(302);
        done();
      });
  });
});

