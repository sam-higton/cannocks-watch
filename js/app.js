'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/guards-office', {templateUrl: 'partials/guards-office.html', controller: 'GuardsOffice'});
  $routeProvider.when('/barracks', {templateUrl: 'partials/barracks.html', controller: 'Barracks'});
  $routeProvider.when('/armory', {templateUrl: 'partials/armory.html', controller: 'Armory'});
  $routeProvider.when('/tavern', {templateUrl: 'partials/tavern.html', controller: 'Tavern'});
  $routeProvider.when('/town-hall', {templateUrl: 'partials/town-hall.html', controller: 'TownHall'});
  $routeProvider.otherwise({redirectTo: '/guards-office'});
}]);

function RootCtrl ($scope) {

    //init
    $scope.notifications = [];

    $scope.soldiers = [];
    $scope.townsfolk = [];

    $scope.resources = {
        "iron" : 100,
        "wood" : 100,
        "stone": 100,
        "gold" : 100
    };

    //set up generators
    $scope.nameGenerator = new NameGenerator();

    //setup soldiers
    for(var i = 0; i < 20; i++) {
        $scope.soldiers.push(new Soldier($scope.nameGenerator.generateName()));
    }


    $scope.rootMessage = "I R FROM ROOT";

    console.log($scope.soldiers);
}

