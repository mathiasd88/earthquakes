'use strict';

describe('Controller: EarthquakedetailCtrl', function () {

  // load the controller's module
  beforeEach(module('earthquakeApp'));

  var EarthquakedetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EarthquakedetailCtrl = $controller('EarthquakedetailCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
