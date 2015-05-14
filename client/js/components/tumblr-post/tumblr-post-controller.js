'use strict';

module.exports = [function () {
  var vm = this;

  vm.notesCount = function() {
    if (!vm.post) return 0;
    return vm.post.comments.length + vm.post.shares.length + vm.post.favorites.length;
  };
}];
