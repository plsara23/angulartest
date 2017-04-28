'use strict';

angular.module('myApp.monthsview', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/monthsview', {
    templateUrl: 'monthsview/monthsview.html',
    controller: 'MonthsViewController'
  });
}])

.controller('MonthsViewController', [function() {

}]);