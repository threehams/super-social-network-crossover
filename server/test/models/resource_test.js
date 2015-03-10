'use strict';

var Promise = require('bluebird');
Promise.longStackTraces();
var chai = require('chai');
var dirtyChai = require('dirty-chai');
chai.use(dirtyChai);
var expect = chai.expect;
require('co-mocha');
var Resource = require('../../models/resource');

describe('GET /api/resources', function() {
  it('returns resources', function *() {
    var resource = new Resource();
    var item = yield resource.find(1);
    expect(item).to.exist();
  });
});