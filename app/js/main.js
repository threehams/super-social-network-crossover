'use strict';

require('angular');
require('angular-route');
require('angular-animate');
require('angular-bootstrap');
require('angular-messages');
global._ = require('lodash');
global.moment = require('moment');

var app = angular.module('SampleApp', ['ngRoute', 'ngAnimate', 'ngMessages']);

// pages
app.controller('PageController', require('./pages/page/page-controller.js'));

// components (controllers exposed for testing)
app.directive('component', require('./components/component/component'));
app.controller('ComponentController', require('./components/component/component-controller.js'));

// resources
app.factory('ResourceService', require('./services/resource-service'));

// custom validators
app.directive('match', require('./validators/match'));

app.config([
  '$locationProvider',
  '$routeProvider',
  function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider
      .when('/', {
        template: require('./pages/page/page-template.jade'),
        controller: 'PageController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
]);

//angular.module('utils').filter('isDefined', function () {
//  return function (value, msg) {
//    if (value === undefined) {
//      throw new Error('isDefined filter got undefined value ' + msg);
//    }
//    return value;
//  };
//});
