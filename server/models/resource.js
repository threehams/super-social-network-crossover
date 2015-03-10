'use strict';

var Promise = require('bluebird');
var _ = require('lodash');

function Resource() {

}

Resource.prototype.all = function() {
  return Promise.resolve(_.map(_.range(0, 100), function() {
    return {url: 'http://placehold.it/600/600'};
  }));
};

Resource.prototype.find = function(id) {
  return Promise.resolve({id: 1, url: 'http://placehold.it/400/400'});
};

module.exports = Resource;