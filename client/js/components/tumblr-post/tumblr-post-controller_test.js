'use strict';

describe('TumblrPostController', function() {
  var that = this;

  beforeEach(angular.mock.module('SocialCrossover'));
  beforeEach(inject(function($rootScope, _$controller_) {
    that.scope = $rootScope;

    that.controller = _$controller_;
    that.controller('TumblrPostController as vm', {'$scope': that.scope});
  }));

  it('creates a scope', function() {
    expect(that.scope.vm).to.exist;
  });

  describe('translateAction', function() {
    it('returns the translated share action', function() {
      that.scope.vm.post = {username: 'haimark'};
      var string = that.scope.vm.translateAction('share');
      expect(string).to.equal('reblogged this from haimark');
    });

    it('returns any other action', function() {
      var string = that.scope.vm.translateAction('post');
      expect(string).to.equal(that.scope.vm.actions.post);
    });
  });
});
