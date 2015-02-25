module.exports = function() {
  return {
    restrict: 'E',
    scope: {
      auth: '='
    },
    template: require('./component-template.jade'),
    controller: require('./component-controller')
  }
};