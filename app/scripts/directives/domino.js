'use strict';

angular.module('texas42App')
    .directive('domino', function () {
        return {
            templateUrl: 'directives/domino.html',
            restrict: 'E',
            replace: true,
            scope: {
                "high": "&",
                "low": "&"
            },
            link: function postLink(scope, element, attrs) {
                var dotPosition = function (num) {
                    var ret = [];
                    
                    if (num % 2 === 1) {
                        ret.push(6);
                    }
                    
                    if (num >= 2) {
                        ret.push(1);
                        ret.push(4);
                    }
                    
                    if (num >= 4) {
                        ret.push(0);
                        ret.push(5);
                    }
                    
                    if (num === 6) {
                        ret.push(2);
                        ret.push(3);
                    }
                    
                    return ret;
                };
                
                scope.dotHigh = dotPosition(scope.high());
                scope.dotLow = dotPosition(scope.low());
            }
        };
    });
