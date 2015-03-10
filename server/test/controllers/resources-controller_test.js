'use strict';

var Promise = require('bluebird');
Promise.longStackTraces();
var chai = require('chai');
var dirtyChai = require('dirty-chai');
chai.use(dirtyChai);
var expect = chai.expect;
require('co-mocha');
var app = require('../../app');
var request = require('co-supertest');

describe('GET /api/resources', function() {
  before(function() {
    request = request.agent(app.listen());
  });

  it('returns resources', function *() {
    var response = yield request.get('/api/resources').expect(200).end();
    expect(JSON.parse(response.text).length).to.equal(100);
  });
});