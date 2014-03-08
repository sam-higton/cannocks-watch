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
        ],
        time: {
            hoursPerTick: 2,
            tickRate: 5000,
            monthNames: [
                'Morning Star',
                'Sun\'s Dawn',
                'First Seed',
                'Rain\'s End',
                'Second Seed',
                'Mid Year',
                'Sun\'s Height',
                'Last Seed',
                'Heartfire',
                'Frostfall',
                'Sun\'s Dusk',
                'Evening Star'
            ]
        }

    });
