'use strict';

describe('ResourceService', function() {
  var that = this;

  beforeEach(angular.mock.module('SampleApp'));
  beforeEach(inject(function (_ResourceService_) {
    that.ResourceService = _ResourceService_;
  }));

  it('fails', function() {
    expect(true).to.be.false;
  });
});