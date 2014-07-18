(function () {

    var Book = (function () {
        function Book(author) {
            this.author = author;
        }

        return Book;
    }());

    //check if running on Node.js
    if (typeof require !== 'undefined') {
        //load underscore if on Node.js
        _ = require('../libs/underscore.js');
    }

    var books = [
        new Book("Pesho"),
        new Book("Gosho"),
        new Book("Ivaylo"),
        new Book("Doncho"),
        new Book("Nikolay"),
        new Book("Pesho"),
        new Book("Pesho"),
        new Book("Gosho"),
    ];

    var authorWithHighestNumberOfBooks =
            _.chain(books)
                .groupBy('author')
                .max(function (groupOfSameAuthors) {
                    return groupOfSameAuthors.length;
                })
                .value()[0].author;

    console.log(authorWithHighestNumberOfBooks);
}());