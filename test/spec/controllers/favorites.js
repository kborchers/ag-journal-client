'use strict';

describe('Controller: FavoritesCtrl', function () {

  // load the controller's module
  beforeEach(module('bedcon2013App'));

  var FavoritesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    scope = {};
    FavoritesCtrl = $controller('FavoritesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
