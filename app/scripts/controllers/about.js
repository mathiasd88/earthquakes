'use strict';

/**
 * @ngdoc function
 * @name earthquakeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the earthquakeApp
 */
angular.module('earthquakeApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
