'use strict';

describe('Directive: domino', function () {
  beforeEach(module('texas42App'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<domino></domino>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the domino directive');
  }));
});
