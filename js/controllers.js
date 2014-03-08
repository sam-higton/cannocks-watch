'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
    .controller('rootCtrl', ['$scope','$location','EverythingFactory','app_conf',
        function($scope,$location,EverythingFactory, app_conf) {
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

            $scope.currentTime = {
                gameTime: 0,
                hour: 0,
                day: 0,
                month: 0,
                year: 0
            };

            console.log(personFactory.makePerson());
            console.log(personFactory.makePerson());

            $scope.updateTime = function () {
                $scope.currentTime.gameTime += app_conf.time.hoursPerTick;
                $scope.currentTime.hour += app_conf.time.hoursPerTick;
                if($scope.currentTime.hour >= 24) {
                    $scope.currentTime.hour = 0;
                    $scope.currentTime.day += 1;

                }

                if($scope.currentTime.day >= 30) {
                    $scope.currentTime.day = 0;
                    $scope.currentTime.month += 1;
                }

                if($scope.currentTime.month >= 11) {
                    $scope.currentTime.month = 0;
                    $scope.currentTime.year += 1;
                }
            };


            $scope.noSuffix = function (no) {
                if(no >= 20) {
                    no = (no + "")[1];
                }
                if (no == "1") {
                    return 'st';
                } else if (no == "2") {
                    return 'nd';
                } else if (no == "3") {
                    return 'rd';
                } else {
                    return 'th';
                }
            };

            $scope.renderTime = function (timeObject) {
                var timeString = '';
                timeString += timeObject.hour + ':00';
                timeString += " on the " + (timeObject.day + 1)
                    + $scope.noSuffix(timeObject.day + 1) + ' day of ';
                timeString += app_conf.time.monthNames[timeObject.month];
                timeString += ', year ' + timeObject.year;
                return timeString;
            };

            $scope.clock = function () {
                $scope.updateTime();
                $scope.$emit('tick',{currentTime: $scope.currentTime});
                $scope.$apply();
            };
            setInterval($scope.clock, app_conf.time.tickRate);

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