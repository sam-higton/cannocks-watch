'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
    .controller('rootCtrl', ['$scope','$location','app_conf',
        function($scope,$location,app_conf) {
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


           //pull nav from config
           $scope.nav = app_conf.nav;

           //set nav active link
            $scope.setActiveNav = function (route) {
                for(var i in $scope.nav) {
                    if($scope.nav[i].route == route) {
                        $scope.nav[i].isActive = true;
                    } else {
                        $scope.nav[i].isActive = false;
                    }
                }
            };

           //set up events
           //$locationChangeStart fires on route change
           $scope.$on("$locationChangeStart",function (next, current) {
              $scope.setActiveNav($location.$$path);
           });


    }])
    .controller('people', ['$scope', function($scope) {

    }])
    .controller('townPlanning', ['$scope',function($scope) {

    }])
    .controller('resources', ['$scope',function($scope) {

    }]);