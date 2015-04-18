'use strict';

describe('PageController', function() {
  var that = this;

  beforeEach(angular.mock.module('SampleApp'));
  beforeEach(inject(function($rootScope, _$controller_) {
    that.scope = $rootScope;
    that.controller = _$controller_;
    that.controller('PageController as vm', {'$scope': that.scope});
  }));

  it('creates a scope', function() {
    expect(that.scope.vm).to.exist;
  });
});