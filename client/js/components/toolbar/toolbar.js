'use strict';

module.exports = function() {
  return {
    restrict: 'E',
    scope: {
      data: '='
    },
    replace: true,
    template: require('./toolbar-template.jade'),
    controller: require('./toolbar-controller'),
    controllerAs: 'vm',
    bindToController: true
  };
};