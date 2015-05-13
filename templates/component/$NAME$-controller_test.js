'use strict';

describe('$NAME_UPPERCASE$Controller', function() {
  var that = this;

  beforeEach(angular.mock.module('$APPNAME$'));
  beforeEach(inject(function($rootScope, _$controller_) {
    that.scope = $rootScope;
    that.controller = _$controller_;
    that.controller('$NAME_UPPERCASE$Controller as vm', {'$scope': that.scope});
  }));

  it('creates a scope', function() {
    expect(that.scope.vm).to.exist;
  });
});