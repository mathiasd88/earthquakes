'use strict';

app.factory('Earthquake', ['$resource', function ($resource) {
	return $resource('http://earthquake.usgs.gov/fdsnws/event/1/query');
}]);