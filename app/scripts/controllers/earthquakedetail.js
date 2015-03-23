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

		var updated = $scope.earthquake['properties'];

		//http://earthquake.usgs.gov/archive/product/geoserve/ak11534459/us/1427080846678/geoserve.json

		// earthquake.properties.products.geoserve[0].contents['geoserve.json'].url
		console.log(updated);
	};

	$scope.getEarthquakeDetail();
});
