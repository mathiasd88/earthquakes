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
      .when('/earthquakes', {
        templateUrl: 'views/earthquakes/index.html',
        controller: 'EarthquakesCtrl'
      })
      .when('/earthquakes/:earthquakeId', {
        templateUrl: 'views/earthquakes/show.html',
        controller: 'EarthquakedetailCtrl'
      })
      .otherwise({
        redirectTo: '/earthquakes'
      });
  });
