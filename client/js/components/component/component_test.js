'use strict';

describe('component', function() {
  var that = this;

  beforeEach(angular.mock.module('SampleApp'));
  beforeEach(inject(function ($rootScope, _$compile_) {
    that.$compile = _$compile_;
    that.scope = $rootScope.$new();

    that.element = angular.element('<component></component>');
    that.element = that.$compile(that.element)(that.scope);
    that.scope.$digest();
    that.isolate = that.element.isolateScope();
  }));

  it('does something', function() {
    expect(that.scope).to.be.false;
  });
});