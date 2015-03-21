'use strict';

angular.module('earthquakeApp')
.factory('Earthquake', function ($resource) {
	return $resource('http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson');
});