'use strict';

module.exports = function() {
  return {
    restrict: 'E',
    scope: {
      url: '='
    },
    replace: true,
    template: require('./component-template.jade'),
    controller: require('./component-controller'),
    controllerAs: 'vm',
    bindToController: true
  };
};