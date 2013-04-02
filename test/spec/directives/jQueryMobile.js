'use strict';

describe('Directive: jQueryMobile', function () {
  beforeEach(module('bedcon2013App'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<j-query-mobile></j-query-mobile>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the jQueryMobile directive');
  }));
});
