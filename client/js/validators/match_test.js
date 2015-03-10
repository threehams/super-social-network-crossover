'use strict';

describe('directive: match', function() {
  var that = this;

  beforeEach(angular.mock.module('SampleApp'));
  beforeEach(inject(function ($rootScope, $compile) {
    that.scope = $rootScope;

    that.element = angular.element(
      '<form name="form">' +
        '<input ng-model="model.password" name="password" type="password" />' +
        '<input ng-model="model.confirm" name="confirm" type="password" match="form.password" />' +
      '</form>'
    );
    that.element = $compile(that.element)(that.scope);
  }));

  it('passes validation if fields match', function() {
    that.scope.model = { password: 'password', confirm: 'password' };
    that.scope.$digest();
    expect(that.scope.form.$valid).to.be.true;
  });

  it('fails validation if fields do not match', function() {
    that.scope.model = { password: 'password', confirm: 'pork' };
    that.scope.$digest();
    expect(that.scope.form.$valid).to.be.false;
    expect(that.scope.form.confirm.$error.match).to.be.true;
  });
});