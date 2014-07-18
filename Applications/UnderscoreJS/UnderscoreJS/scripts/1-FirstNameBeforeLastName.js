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

    _.chain(students)
        .filter(function (student) {
            return student.firstName < student.lastName;
        })
        .sortBy('firstName')
        .reverse()
        .sortBy('lastName')
        .reverse()
        .each(function (student) {
            console.log(student);
        });
}());
