'use strict';

var UserService = function(UUID) {
  function User(attrs) {
    this.id = UUID.generate();
    this.username = attrs.username;
    this.fullName = attrs.fullName;
    this.userImage = attrs.userImage;
    this.createdAt = new Date();
  }

  return User;
};

UserService.$inject = ['UUID'];

module.exports = UserService;