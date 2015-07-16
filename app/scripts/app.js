'use strict';

/**
 * @ngdoc overview
 * @name earthquakeApp
 * @description
 * # earthquakeApp
 *
 * Main module of the application.
 */

var app = angular.module('earthquakeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMap'
]);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/earthquakes', {
      templateUrl: 'views/earthquakes/index.html'
    })
    .when('/earthquakes/:earthquakeId', {
      templateUrl: 'views/earthquakes/show.html'
    })
    .otherwise({
      redirectTo: '/earthquakes'
    });
});
