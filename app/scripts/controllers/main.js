'use strict';

/**
 * @ngdoc function
 * @name earthquakeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the earthquakeApp
 */
angular.module('earthquakeApp')
.controller('MainCtrl', function ($scope, Earthquake) {
	$scope.earthquakes = Earthquake.get();
});
