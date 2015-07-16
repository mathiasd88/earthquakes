'use strict';

/**
 * @ngdoc function
 * @name earthquakeApp.controller:EarthquakedetailCtrl
 * @description
 * # EarthquakedetailCtrl
 * Controller of the earthquakeApp
 */
angular.module('earthquakeApp')
.controller('EarthquakedetailCtrl', function ($scope, $routeParams, Earthquake) {

	$scope.getEarthquakeDetail = function()
	{
		$scope.earthquake = Earthquake.get({
			format: 'geojson',
			eventid: $routeParams.earthquakeId,
		});
	};

	$scope.getEarthquakeDetail();
});
