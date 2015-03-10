'use strict';

module.exports = function() {
  return {
    restrict: 'E',
    scope: {
      data: '='
    },
    replace: true,
    template: require('./component-template.jade'),
    controller: require('./component-controller'),
    controllerAs: 'vm',
    bindToController: true
  };
};