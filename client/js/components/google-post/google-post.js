'use strict';

module.exports = function() {
  return {
    restrict: 'E',
    scope: {
      post: '='
    },
    replace: true,
    template: require('./google-post-template.jade'),
    controller: require('./google-post-controller'),
    controllerAs: 'vm',
    bindToController: true
  };
};