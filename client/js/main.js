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

// resources
app.factory('ResourceService', require('./services/resource-service'));

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
