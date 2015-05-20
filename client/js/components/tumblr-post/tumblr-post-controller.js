'use strict';

module.exports = [function () {
  var vm = this;

  vm.actions = {
    post: 'posted this',
    favorite: 'liked this',
    share: 'reblogged this',
    comment: 'liked this'
  };

  vm.translateAction = function(action) {
    if (action === 'share') {
      return vm.actions[action] + ' from ' + vm.post.username;
    }
    return vm.actions[action];
  };
}];
