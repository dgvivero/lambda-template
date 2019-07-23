'use strict';
const assert = require('assert');
const supertest = require('supertest'); 
const req = supertest('http://localhost:3000');

describe('Tests app', function() {
  let res;
  it('verifies get', async function() {
    res = await req.get('/entity');
    assert.equal(res.status,200);
  });
  // it('verifies post', function(done) {
  //   request.post('/').expect(200).end(function(err, result) {
  //       test.string(result.body.Output).contains('Hello');
  //       test.value(result).hasHeader('content-type', 'application/json; charset=utf-8');
  //       done(err);
  //   });
  // });
});
