'use strict';

describe('ComponentController', function() {
  var that = this;

  beforeEach(angular.mock.module('SampleApp'));
  beforeEach(inject(function($rootScope, _$controller_) {
    that.scope = $rootScope;
    that.controller = _$controller_;
    that.controller('ComponentController as vm', {'$scope': that.scope});
  }));

  it('fails', function() {
    expect(that.scope.vm).to.be.false;
  });
});