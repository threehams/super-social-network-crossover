'use strict';

describe('facebook-post', function() {
  var that = this;

  beforeEach(angular.mock.module('SocialCrossover'));
  beforeEach(inject(function ($rootScope, _$compile_) {
    that.$compile = _$compile_;
    that.scope = $rootScope.$new();

    that.element = angular.element('<facebook-post></facebook-post>');
    that.element = that.$compile(that.element)(that.scope);
    that.scope.$digest();
    that.isolate = that.element.isolateScope();
  }));

  it('creates an isolate scope', function() {
    expect(that.isolate).to.exist;
  });
});