'use strict';

xdescribe('ResourceService', function() {
  var that = this;

  beforeEach(angular.mock.module('SocialCrossover'));
  beforeEach(inject(function (_ResourceService_) {
    that.ResourceService = _ResourceService_;
  }));

  it('returns a service', function() {
    expect(that.ResourceService).to.exist;
  });
});