'use strict';

angular.module('earthquakeApp')
.factory('Earthquake', function ($resource) {
	return $resource('http://earthquake.usgs.gov/fdsnws/event/1/query');
});