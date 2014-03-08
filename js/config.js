'use strict';

angular.module('myApp.config', [])
    .constant('app_conf',{
        nav: [
            {
                name: 'People',
                route: '/Armory'
            },
            {
                name: 'Town Planning',
                route: '/town-planning'
            },
            {
                name: 'resources',
                route: '/resources'
            }
        ]
    });
