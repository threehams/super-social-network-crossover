'use strict';

var EventService = function(UUID) {
  function Event(post, user, action, comment) {
    this.id = UUID.generate();
    this.post = post;
    this.user = user;
    this.action = action;
    this.comment = comment;
  }

  return Event;
};

EventService.$inject = ['UUID'];

module.exports = EventService;
