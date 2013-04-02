'use strict';

describe('Controller: AddNoteCtrl', function () {

  // load the controller's module
  beforeEach(module('aerogearJournalApp'));

  var AddNoteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    scope = {};
    AddNoteCtrl = $controller('AddNoteCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
