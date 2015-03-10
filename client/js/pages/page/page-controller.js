'use strict';

module.exports = ['ResourceService', function (ResourceService) {
  var vm = this;

  ResourceService.index().then(function(data) {
    vm.resources = data;
  });
}];
