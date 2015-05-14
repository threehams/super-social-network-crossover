'use strict';

module.exports = function() {
  return {
    restrict: 'E',
    scope: {
      posts: '='
    },
    replace: true,
    template: require('./feed-template.jade'),
    controller: require('./feed-controller'),
    controllerAs: 'vm',
    bindToController: true
  };
};