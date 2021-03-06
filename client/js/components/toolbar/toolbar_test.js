'use strict';

describe('toolbar', function() {
  var that = this;

  beforeEach(angular.mock.module('SocialCrossover'));
  beforeEach(inject(function ($rootScope, _$compile_) {
    that.$compile = _$compile_;
    that.scope = $rootScope.$new();

    that.element = angular.element('<toolbar></toolbar>');
    that.element = that.$compile(that.element)(that.scope);
    that.scope.$digest();
    that.isolate = that.element.isolateScope();
  }));

  it('creates an isolate scope', function() {
    expect(that.isolate).to.exist;
  });
});