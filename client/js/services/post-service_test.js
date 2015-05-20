'use strict';

describe('Post', function() {
  var Post, that = this;

  beforeEach(angular.mock.module('SocialCrossover'));
  beforeEach(inject(function (_Post_) {
    Post = _Post_;
  }));

  beforeEach(function() {
    that.user = {
      username: 'testname',
      fullName: 'Test Namerson',
      userImage: 'http://test.com/image.jpg'
    };
    that.post = new Post(that.user, {});
  });

  it('creates a post', function() {
    expect(that.post.fullName).to.equal(that.user.fullName);
    expect(that.post.username).to.equal(that.user.username);
    expect(that.post.userImage).to.equal(that.user.userImage);
  });

  describe('addComment', function() {
    it('updates the list of comments', function() {
      that.post.addComment(that.user, {message: 'a message!'});
      expect(that.post.comments[0].username).to.equal(that.post.username);
    });
  });

  describe('share', function() {
    it('updates the list of shares', function() {
      that.post.share(that.user);
      expect(that.post.shares).to.eql([that.user]);
    });

    it('updates the list of related users', function() {
      that.post.share(that.user);
      expect(that.post.relatedUsers).to.eql([that.user]);
    });
  });

  describe('favorites', function() {
    it('updates the list of favorites', function() {
      that.post.favorite(that.user);
      expect(that.post.favorites).to.eql([that.user]);
    });

    it('updates the list of related users', function() {
      that.post.favorite(that.user);
      expect(that.post.relatedUsers).to.eql([that.user]);
    });

    //it('adds a share event with a comment', function () {
    //  that.post.favorite(that.user, {message: 'oh hai'});
    //  var event = that.post.timeline[0];
    //  expect(event.user).to.eql(that.user);
    //});
    //
    //it('adds a share event without a comment', function () {
    //
    //});
  });

  //describe('timeline', function() {
  //
  //  it('adds an event with a comment', function () {
  //
  //  });
  //});
});
