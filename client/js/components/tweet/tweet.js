'use strict';

module.exports = function() {
  return {
    restrict: 'E',
    scope: {
      post: '='
    },
    replace: true,
    template: require('./tweet-template.jade'),
    controller: require('./tweet-controller'),
    controllerAs: 'vm',
    bindToController: true
  };
};