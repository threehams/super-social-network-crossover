'use strict';

var PostService = function($window, UUID, Comment, Event) {
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
    this.timeline = [new Event(this, user, 'post')];
  }

  Post.prototype.addComment = function(user, commentAttrs) {
    var comment = new Comment(user, commentAttrs);
    this.comments.push(comment);
    this._addTimelineEvent(user, 'comment', comment);
  };

  Post.prototype.share = function (user, commentAttrs) {
    var comment;
    if (commentAttrs) comment = new Comment(user, commentAttrs);
    this.shares.push(user);
    this._addRelatedUser(user);
    this._addTimelineEvent(user, 'share', comment);
  };

  Post.prototype.favorite = function (user, commentAttrs) {
    var comment;
    if (commentAttrs) comment = new Comment(user, commentAttrs);
    this.favorites.push(user);
    this._addRelatedUser(user);
    this._addTimelineEvent(user, 'favorite', comment);
  };

  Post.prototype._addRelatedUser = function(user) {
    if (!_.includes(this.relatedUsers, user)) this.relatedUsers.unshift(user);
  };

  Post.prototype._addTimelineEvent = function(user, action, comment) {
    this.timeline.unshift(new Event(this, user, action, comment));
  };

  Post.index = function() {
    return $window.localStorage.posts;
  };

  Post.TYPES = ['google', 'facebook', 'instagram', 'twitter', 'tumblr', 'pinterest'];

  return Post;
};

PostService.$inject = ['$window', 'UUID', 'Comment', 'Event'];

module.exports = PostService;
