'use strict';

/**
 * @ngdoc function
 * @name earthquakeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the earthquakeApp
 */
angular.module('earthquakeApp')
.controller('EarthquakesCtrl', function ($scope, $filter, Earthquake) {

	// Default values
	$scope.today = new Date();

	$scope.earthquakesParams = [];
	$scope.earthquakesParams.minMagnitude = 0;

	$scope.magnitudes = [{id:0},{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8}];

	// 
	$scope.getEarthquakes = function()
	{
		var today = $filter('date')(Date.now(), 'yyyy-MM-dd');

		$scope.earthquakes = Earthquake.get({
			format: 'geojson',
			minmagnitude: $scope.earthquakesParams.minMagnitude,
			starttime: today,
			limit: 10
		});
	};

	$scope.getEarthquakes();
});