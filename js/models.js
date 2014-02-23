'use strict';


function Soldier (name) {
    this.name = name;
    this.health = 100;
    this.role = "swordsman";
}

function NameGenerator () {
    this.firstNames = [
        'Bob',
        'Dave',
        'Gary',
        'Graham',
        'Goeff',
        'Paul',
        'Ryan',
        'John',
        'Desmond',
        'Terance',
        'Derrek'
    ];

    this.surnames = [
        'Black',
        'Brown',
        'Smith',
        'Pierre',
        'Miller',
        'Jones',
        'Ince',
        'Tony'
    ]

    this.existingPairs = [];

    this.generateName = function () {
        var firstnameIndex = this.getRandomIndex('firstname');
        var surnameIndex = this.getRandomIndex('surname');
        for(var i in this.existingPairs) {
            if(this.existingPairs[i].firstName == firstnameIndex
                && this.existingPairs[i].surname == surnameIndex) {
                return this.generateName();
            }
        }
        this.existingPairs.push({
            firstName: firstnameIndex,
            surname: surnameIndex
        });

        return this.firstNames[firstnameIndex] + ' ' + this.surnames[surnameIndex];
    };

    this.getRandomIndex = function (type) {
        switch(type) {
            case 'firstname':
                return this.generateRandomNo(this.firstNames.length - 1);
                break;
            case 'surname':
                return this.generateRandomNo(this.surnames.length - 1);
                break;

        }
    };

    this.generateRandomNo = function (max) {
        return Math.floor(Math.random() * (max - 0 + 1)) + 0;
    }

}