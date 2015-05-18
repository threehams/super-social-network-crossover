'use strict';

require('angular');
require('angular-route');
require('angular-animate');
require('angular-messages');
global._ = require('lodash');
global.moment = require('moment');

var app = angular.module('SocialCrossover', ['ngRoute', 'ngAnimate', 'ngMessages']);

// pages
app.controller('PageController', require('./pages/page/page-controller.js'));

// components (controllers exposed for testing)
app.directive('tweet', require('./components/tweet/tweet'));
app.controller('TweetController', require('./components/tweet/tweet-controller.js'));
app.directive('facebookPost', require('./components/facebook-post/facebook-post'));
app.controller('FacebookPostController', require('./components/facebook-post/facebook-post-controller.js'));
app.directive('googlePost', require('./components/google-post/google-post'));
app.controller('GooglePostController', require('./components/google-post/google-post-controller.js'));
app.directive('instagram', require('./components/instagram/instagram'));
app.controller('InstagramController', require('./components/instagram/instagram-controller.js'));
app.directive('tumblrPost', require('./components/tumblr-post/tumblr-post'));
app.controller('TumblrPostController', require('./components/tumblr-post/tumblr-post-controller.js'));
app.directive('pin', require('./components/pin/pin'));
app.controller('PinController', require('./components/pin/pin-controller.js'));

app.directive('toolbar', require('./components/toolbar/toolbar'));
app.controller('ToolbarController', require('./components/toolbar/toolbar-controller.js'));
app.directive('feed', require('./components/feed/feed'));
app.controller('FeedController', require('./components/feed/feed-controller.js'));

// resources
//app.factory('ResourceService', require('./services/resource-service'));
app.service('UUID', require('./services/uuid-service'));
app.factory('Post', require('./services/post-service'));
app.factory('Comment', require('./services/comment-service'));
app.factory('User', require('./services/user-service'));

// custom validators
app.directive('match', require('./validators/match'));

app.config([
  '$locationProvider',
  '$routeProvider',
  function ($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        template: require('./pages/page/page-template.jade'),
        controller: 'PageController',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
]);

// Uncomment for debugging
//angular.module('utils').filter('isDefined', function () {
//  return function (value, msg) {
//    if (value === undefined) {
//      throw new Error('isDefined filter got undefined value ' + msg);
//    }
//    return value;
//  };
//});
