'use strict';

describe('Controller: Texas42Ctrl', function () {

  // load the controller's module
  beforeEach(module('texas42App'));

  var Texas42Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Texas42Ctrl = $controller('Texas42Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
