'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
    .controller('rootCtrl', ['$scope','app_conf', function($scope,app_conf) {
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


       console.log(app_conf);


    }])
    .controller('GuardsOffice', ['$scope', function($scope) {

    }])
    .controller('Barracks', ['$scope',function($scope) {

    }])
    .controller('Armory', ['$scope',function($scope) {

    }])
    .controller('Tavern', ['$scope',function($scope) {

    }])
    .controller('TownHall', ['$scope',function($scope) {

    }]);