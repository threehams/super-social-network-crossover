'use strict';

module.exports = function() {
  return {
    restrict: 'E',
    scope: {
      post: '='
    },
    replace: true,
    template: require('./tumblr-post-template.jade'),
    controller: require('./tumblr-post-controller'),
    controllerAs: 'vm',
    bindToController: true
  };
};
