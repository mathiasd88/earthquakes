'use strict';

angular.module('earthquakeApp')
.factory('EarthquakeDetail', function ($resource, url) {
	return $resource(url);
});