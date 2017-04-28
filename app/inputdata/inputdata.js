'use strict';

angular.module('myApp.inputdata', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/inputdata', {
    templateUrl: 'inputdata/inputdata.html',
    controller: 'InputController'
  });
}])

.controller('InputController', [function() {

}]);