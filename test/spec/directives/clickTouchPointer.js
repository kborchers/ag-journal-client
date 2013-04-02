'use strict';

describe('Directive: clickTouchPointer', function () {
  beforeEach(module('aerogearJournalApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<click-touch-pointer></click-touch-pointer>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the clickTouchPointer directive');
  }));
});
