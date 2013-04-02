'use strict';

describe('Controller: ScheduleCtrl', function () {

  // load the controller's module
  beforeEach(module('bedcon2013App'));

  var ScheduleCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    scope = {};
    ScheduleCtrl = $controller('ScheduleCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
