'use strict';

/* App Module for Routingrules*/
angular.module('phonecat', ['phonecatFilters', 'phonecatServices']).
  
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/phones', {templateUrl: 'partials/phone-list.html',   controller: PhoneListCtrl}).
        when('/phones/:phoneId', {templateUrl: 'partials/phone-detail.html', controller: PhoneDetailCtrl}).
        otherwise({redirectTo: '/phones'});
  }]);