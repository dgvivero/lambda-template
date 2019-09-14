'use strict';
const assert = require('assert');
const supertest = require('supertest');
const Entity = require('../app/entity/entityModel') 
const req = supertest('http://localhost:3000');

describe('Tests for Entity', function() {
  let res;
  before( async function(){
    await Entity.sync({force:true});
  });
  
  it('POST data',async function() {
     const anEntity = {
                       name: 'anString', 
                       active: true,
                       createAt: new Date(),
                       updateAt: new Date()
                      }
        res = await req.post('/entity').send(anEntity);
        assert.equal(res.status, 201)
    });

  it('GET data', async function() {
    res = await req.get('/entity');
    assert.equal(res.status,200);
  });
  });
