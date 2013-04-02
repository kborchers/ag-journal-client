'use strict';

describe('Directive: notePageSwipe', function () {
  beforeEach(module('aerogearJournalApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<note-page-swipe></note-page-swipe>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the notePageSwipe directive');
  }));
});
