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

	// Default values
	$scope.magnitude = [];
	$scope.magnitude.selectedMagnitude = 4;

	$scope.magnitudes = [{id:4},{id:5},{id:6},{id:7},{id:8}];
		

	// 
	$scope.getEarthquakes = function()
	{
		$scope.earthquakes = Earthquake.get({
			format: 'geojson',
			minmagnitude: $scope.magnitude.selectedMagnitude,
			starttime: '2015-03-21',
			limit: 1
		});
	};

	$scope.getEarthquakes();
});