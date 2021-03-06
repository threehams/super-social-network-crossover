'use strict';

module.exports = function() {
  return {
    restrict: 'E',
    scope: {
      post: '='
    },
    replace: true,
    template: require('./instagram-template.jade'),
    controller: require('./instagram-controller'),
    controllerAs: 'vm',
    bindToController: true
  };
};