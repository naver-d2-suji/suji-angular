'use strict';

var app = require('../../../app');
var request = require('supertest');
var should = require('should');

describe('GET /api/v1.2/stats/daily', function() {
  it('should respond with JSON array', function(done) {
    request(app)
      .get('/api/v1.2/stats/daily')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Array);
        done();
      });
  });
});
