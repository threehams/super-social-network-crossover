'use strict';

var CommentService = function($window, UUID) {
  function Comment(user, attrs) {
    this.id = UUID.generate();
    this.username = user.username;
    this.fullName = user.fullName;
    this.userImage = user.userImage;
    this.message = attrs.message;
    this.image = attrs.image;
    this.video = attrs.video;
    this.createdAt = new Date();
    this.shares = [];
    this.favorites = [];
  }

  Comment.index = function() {
    return $window.localStorage.posts;
  };

  return Comment;
};

CommentService.$inject = ['$window', 'UUID'];

module.exports = CommentService;