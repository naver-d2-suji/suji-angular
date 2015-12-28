'use strict';
var app = require('../../../../app');
var request = require('supertest');
var should = require('should');

//describe('GET /api/v1/users', function() {
//  it('should respond with JSON array', function(done) {
//    request(app)
//      .get('/api/v1/users')
//      .expect(200)
//      .expect('Content-Type', /json/)
//      .end(function(err, res) {
//        if (err) return done(err);
//        res.body.should.be.instanceof(Array);
//        done();
//      });
//  });
//});

describe('GET /api/v1/user/join', function() {
  it('should respond with text/html', function(done) {
    request(app)
      .get('/api/v1/user/join')
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

describe('POST /api/v1/user/join', function() {
  it('should respond with redirect on POST', function(done) {
    request(app)
      .post('/api/v1/user/join')
      .send({'id':'test', 'password':'testPassword', 'password_check':'testPassword', 'admin_password':'adminPassword'})
      .expect(302) //redirect
      .end(function(err, res) {
        if (err) return done(err);
        res.should.exist;
        res.status.should.equal(302);
        done();
      });
  });
});
