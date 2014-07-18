(function () {

    var Animal = (function () {
        function Animal(species, numberOfLegs) {
            this.species = species;
            this.numberOfLegs = numberOfLegs;
        }

        return Animal;
    }());

    //check if running on Node.js
    if (typeof require !== 'undefined') {
        //load underscore if on Node.js
        _ = require('../libs/underscore.js');
    }

    var animals = [
        new Animal('African Bush Elephant', 4),
        new Animal('African Bush Elephant', 2),
        new Animal('African Bush Elephant', 6),
        new Animal('Greater Flamingo', 2),
        new Animal('Bear', 4),
        new Animal('Bear', 2),
        new Animal('River Hippopotamus', 4),
        new Animal('Centipede', 100),
    ];

    var totalNumberOfLegs = 0;

    _.chain(animals)
        .each(function (animal) {
            totalNumberOfLegs += animal.numberOfLegs;
        });

    console.log(totalNumberOfLegs);
}());