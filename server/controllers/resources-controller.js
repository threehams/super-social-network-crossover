'use strict';

var Resource = require('../models/resource');

module.exports = {
  index: function *() {
    var resource = new Resource();
    this.body = yield resource.all();
  },
  show: function *() {
    var resource = new Resource();
    this.body = yield resource.find(this);
  },
  create: function *() {
    this.throw(501);
  },
  update: function *() {
    this.throw(501);
  },
  delete: function *() {
    this.throw(501);
  }
};