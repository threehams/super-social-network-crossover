'use strict';

var PostService = function($window, UUID, Comment) {
  function Post(user, attrs) {
    this.id = UUID.generate();
    this.createdAt = new Date();

    this.type = attrs.type;
    this.fullName = user.fullName;
    this.username = user.username;
    this.userImage = user.userImage;

    this.privacy = attrs.privacy; // public, private
    this.location = attrs.location;

    this.message = attrs.message;
    this.image = attrs.image;
    this.video = attrs.video;

    this.shares = [];
    this.favorites = [];
    this.comments = [];
  }

  Post.prototype.addComment = function(user, attrs) {
    var comment = new Comment(user, attrs);
    this.comments.push(comment);
  };

  Post.prototype.share = function (user) {
    this.shares.push({
      username: user.username,
      userImage: user.userImage
    });
    this.calculateRelatedUsers();
  };

  Post.prototype.favorite = function (user) {
    this.favorites.push({
      username: user.username,
      userImage: user.userImage
    });
    this.calculateRelatedUsers();
  };

  Post.prototype.calculateRelatedUsers = function() {
    this.relatedUsers = _.sortBy(this.shares.concat(this.favorites).slice(0, 10), 'createdAt');
  };

  Post.index = function() {
    return $window.localStorage.posts;
  };

  Post.TYPES = ['google', 'facebook', 'instagram', 'twitter'];

  return Post;
};

PostService.$inject = ['$window', 'UUID', 'Comment'];

module.exports = PostService;