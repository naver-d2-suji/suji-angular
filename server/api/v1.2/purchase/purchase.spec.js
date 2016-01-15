'use strict';

var app = require('../../../app');
var request = require('supertest');
var should = require('should');

describe('GET /api/v1.2/purchase', function() {
  it('should respond with JSON array', function(done) {
    request(app)
      .get('/api/v1.2/purchase')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Array);
        done();
      });
  });
});

describe('POST /api/v1.2/purchase/add', function() {
  it('should respond with success', function(done) {
    request(app)
      .post('/api/v1.2/purchase/add')
      .send([
        { 'itemId' : 'Mocha', 'orderedItemCnt' : '3', 'totalPrice' : '100' },
        { 'itemId' : 'Latte', 'orderedItemCnt' : '5', 'totalPrice' : '500' }
        ])
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        res.should.exist;
        res.status.should.equal(200);
        done();
      });
  });
});