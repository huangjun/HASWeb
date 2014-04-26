'use strict';

angular.module('myApp', []).controller('MyList', function($scope) {
  $scope.items = [
    {'name': 'NexusSSSSSSS',
     'snippet': 'Fast just got faster with Nexus S.'},
    {'name': 'Motorola XOOM with Wi-Fi',
     'snippet': 'The Next, Next Generation tablet.'},
    {'name': 'MOTOROLA XOOM',
     'snippet': 'The Next, Next Generation tablet.'}
  ];
});
