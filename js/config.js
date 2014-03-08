'use strict';

angular.module('myApp.config', [])
    .constant('app_conf',{
        nav: [
            {
                name: 'People',
                route: '/people'
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
