(function () {

    var Student = (function () {
        function Student(firstName, lastName, age) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
        }

        return Student;
    }());

    //check if running on Node.js
    if (typeof require !== 'undefined') {
        //load underscore if on Node.js
        _ = require('../libs/underscore.js');
    }

    var students = [
        new Student("Pesho", "Peshov", 18),
        new Student("John", "Johnov", 25),
        new Student("Gosho", "Goshev", 16),
        new Student("Ivaylo", "Kenov", 54),
        new Student("Doncho", "Minkov", 21),
        new Student("Nikolay", "Kostov", 28),
        new Student("Maria", "Pesheva", 23),
        new Student("Pesho", "Goshev", 29)
    ];

    _.chain(students)
    .filter(function (student) {
        return student.age >= 18 && student.age <= 24;
    })
    .each(function (student){
        console.log(student.firstName + ' ' + student.lastName);
    })
}());
