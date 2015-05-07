'use strict';

module.exports = function() {
  return {
    restrict: 'E',
    scope: {
      data: '='
    },
    replace: true,
    template: require('./facebook-post-template.jade'),
    controller: require('./facebook-post-controller'),
    controllerAs: 'vm',
    bindToController: true
  };
};