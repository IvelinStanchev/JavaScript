function check() {
    var first = parseInt(document.getElementById('first').value);
    var second = parseInt(document.getElementById('second').value);
    var third = parseInt(document.getElementById('third').value);
    var fourth = parseInt(document.getElementById('fourth').value);
    var fifth = parseInt(document.getElementById('fifth').value);
    var allNumbers = [first, second, third, fourth, fifth];
    var theGreatestNumber;

    theGreatestNumber = first;

    for (var i = 1; i < 5; i++) {
        if (allNumbers[i] > theGreatestNumber) {
            theGreatestNumber = allNumbers[i];
        }
    }
    document.getElementById('result').innerHTML = 'The greatest number is: ' + theGreatestNumber;
    console.log('The greatest number is: ' + theGreatestNumber);
}