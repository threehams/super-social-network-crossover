'use strict';

module.exports = function() {
  return {
    restrict: 'E',
    scope: {
      data: '='
    },
    replace: true,
    template: require('./$NAME$-template.jade'),
    controller: require('./$NAME$-controller'),
    controllerAs: 'vm',
    bindToController: true
  };
};