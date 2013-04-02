'use strict';

describe('Filter: newline', function () {

  // load the filter's module
  beforeEach(module('aerogearJournalApp'));

  // initialize a new instance of the filter before each test
  var newline;
  beforeEach(inject(function ($filter) {
    newline = $filter('newline');
  }));

  it('should return the input prefixed with "newline filter:"', function () {
    var text = 'angularjs';
    expect(newline(text)).toBe('newline filter: ' + text);
  });

});
