'use strict';

app.factory('Earthquake', ['$resource', function ($resource) {
	return $resource('//earthquake.usgs.gov/fdsnws/event/1/query');
}]);