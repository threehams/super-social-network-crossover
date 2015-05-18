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
    this.tags = attrs.tags; // Tumblr only so far
    this.source = attrs.source; // External source - youtube, etc

    this.message = attrs.message;
    this.image = attrs.image;
    this.video = attrs.video;

    this.albumTitle = attrs.albumTitle;
    this.albumImage = attrs.albumImage;

    this.shares = [];
    this.favorites = [];
    this.comments = [];
    this.relatedUsers = [];
  }

  Post.prototype.addComment = function(user, attrs) {
    var comment = new Comment(user, attrs);
    this.comments.push(comment);
  };

  Post.prototype.share = function (user) {
    this.shares.push(user);
    this._calculateRelatedUsers();
  };

  Post.prototype.favorite = function (user) {
    this.favorites.push(user);
    this._calculateRelatedUsers();
  };

  Post.prototype._calculateRelatedUsers = function() {
    this.relatedUsers = _.sortBy(_.unique(this.shares.concat(this.favorites)).slice(0, 10), 'createdAt');
  };

  Post.index = function() {
    return $window.localStorage.posts;
  };

  Post.TYPES = ['google', 'facebook', 'instagram', 'twitter', 'tumblr', 'pinterest'];

  return Post;
};

PostService.$inject = ['$window', 'UUID', 'Comment'];

module.exports = PostService;
