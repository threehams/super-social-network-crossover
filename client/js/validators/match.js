'use strict';

module.exports = function() {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, element, attrs, ngModel) {
      function isEqualToOther(value) {
        var otherField = scope.$eval(attrs.match);
        return value === (otherField.$modelValue || otherField.$viewValue);
      }

      ngModel.$validators.match = function(modelValue) {
        return isEqualToOther(modelValue);
      };
    }
  };
};