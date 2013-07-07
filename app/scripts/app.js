'use strict';

angular.module( 'texas42App', [ 'ui.bootstrap', 'btford.socket-io' ])
    .config( [ '$routeProvider', '$locationProvider', function ( $routeProvider, $locationProvider ) {
        $routeProvider
        .when( '/', {
            // @todo fix this
            templateUrl: 'views/Texas42.html',
            controller: 'Texas42Ctrl'
        })
        .otherwise({
            redirectTo: '/'
        });

        $locationProvider.html5Mode( true );
    }]);
