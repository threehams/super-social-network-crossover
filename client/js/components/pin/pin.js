'use strict';

module.exports = function() {
  return {
    restrict: 'E',
    scope: {
      post: '='
    },
    replace: true,
    template: require('./pin-template.jade'),
    controller: require('./pin-controller'),
    controllerAs: 'vm',
    bindToController: true
  };
};
