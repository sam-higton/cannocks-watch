'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.config',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/people', {templateUrl: 'partials/people.html', controller: 'people'});
  $routeProvider.when('/town-planning', {templateUrl: 'partials/town-planning.html', controller: 'townPlanning'});
  $routeProvider.when('/resources', {templateUrl: 'partials/resources.html', controller: 'resources'});
  $routeProvider.otherwise({redirectTo: '/people'});
}]);

