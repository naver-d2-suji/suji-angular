/**
 * Created by bw on 15. 12. 27.
 */

'use strict';

var app = require('../../../../app');
var request = require('supertest');
var should = require('should');

describe('GET /api/v1/product', function() {
  it('should respond with text/html', function(done) {
    request(app)
      .get('/api/v1/product')
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
