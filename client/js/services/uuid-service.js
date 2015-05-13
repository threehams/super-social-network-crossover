'use strict';

var uuid = require('node-uuid');

var UUID = function() {
  this.generate = function() {
    return uuid.v4();
  };
};

//UUID.$inject = [];

module.exports = UUID;