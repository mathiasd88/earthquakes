'use strict';

/**
 * @ngdoc overview
 * @name earthquakeApp
 * @description
 * # earthquakeApp
 *
 * Main module of the application.
 */
angular
  .module('earthquakeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
