'use strict';

module.exports = [function () {
  var vm = this;

  vm.search = function() {
    if (vm.searchForm.$invalid) return;

    console.log('searchin for', vm.searchText);
  };
}];
