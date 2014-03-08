'use strict';


angular.module('myApp.models', [])
    .factory('EverythingFactory', ['nameGenerator', function (nameGenerator) {

        return {
            makePerson: function () {
                return new Person(nameGenerator.generateName());
            }
        };



    }]);

function Person (name) {
    this.name = name;
    this.health = 100;

}

