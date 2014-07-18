(function () {

    var Student = (function () {
        function Student(firstName, lastName, age, marks) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.marks = marks;
        }

        return Student;
    }());

    //check if running on Node.js
    if (typeof require !== 'undefined') {
        //load underscore if on Node.js
        _ = require('../libs/underscore.js');
    }

    var students = [
        new Student("Pesho", "Peshov", 18, 3.80),
        new Student("John", "Johnov", 25, 4.80),
        new Student("Gosho", "Goshev", 16, 5.20),
        new Student("Ivaylo", "Kenov", 54, 4.85),
        new Student("Doncho", "Minkov", 21, 5.15),
        new Student("Nikolay", "Kostov", 28, 5.14),
        new Student("Maria", "Pesheva", 23, 3.92),
        new Student("Pesho", "Goshev", 29, 4.28)
    ];

    var studentWithHighestMark =
        _.chain(students)
            .sortBy('marks')
            .reverse()
            .first()
            .value();

    console.log(studentWithHighestMark);
}());