'use strict';

// Declare app level module which depends on filters, and services

var app = angular.module('myApp', [
  'ngRoute'
])
app.config(function ($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'partials/home',
      controller: 'HomeCtrl'
    }).
    when('/tenday', {
      templateUrl: 'partials/tenday',
      controller: 'TendayCtrl'
    }).
    when('/webcams', {
      templateUrl: 'partials/webcams',
      controller: 'WebcamsCtrl'
    }).
    when('/conditions', {
      templateUrl: 'partials/conditions',
      controller: 'ConditionsCtrl'
    }).
    otherwise({
      redirectTo: '/'
    });

});
