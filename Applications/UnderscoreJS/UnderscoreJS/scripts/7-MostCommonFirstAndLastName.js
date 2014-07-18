(function () {

    var Student = (function () {
        function Student(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }

        return Student;
    }());

    //check if running on Node.js
    if (typeof require !== 'undefined') {
        //load underscore if on Node.js
        _ = require('../libs/underscore.js');
    }

    var students = [
        new Student("Pesho", "Peshov"),
        new Student("John", "Johnov"),
        new Student("Gosho", "Goshev"),
        new Student("Ivaylo", "Kenov"),
        new Student("Doncho", "Minkov"),
        new Student("Nikolay", "Kostov"),
        new Student("Maria", "Pesheva"),
        new Student("Pesho", "Goshev")
    ];

    var mostCommonFirstName =
        _.chain(students)
            .groupBy('firstName')
            .max(function (groupOfSameNames) {
                return groupOfSameNames.length;
            })
            .value()[0].firstName;

    var mostCommonLastName =
        _.chain(students)
            .groupBy('lastName')
            .max(function (groupOfSameNames) {
                return groupOfSameNames.length;
            })
            .value()[0].lastName;

    console.log('Most common first name: ' + mostCommonFirstName);
    console.log('Most common last name: ' + mostCommonLastName);
}());