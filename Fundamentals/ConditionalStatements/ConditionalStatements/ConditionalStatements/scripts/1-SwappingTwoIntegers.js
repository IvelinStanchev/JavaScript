function check() {
    var firstNumber = parseInt(document.getElementById('firstNumber').value);
    var secondNumber = parseInt(document.getElementById('secondNumber').value);
    var swap;

    if (firstNumber > secondNumber) {
        swap = firstNumber;
        firstNumber = secondNumber;
        secondNumber = swap;
    }
    document.getElementById('result').innerHTML =
            'First number -> ' + firstNumber + '; Second number -> ' + secondNumber;
    console.log('First number -> ' + firstNumber + '; Second number -> ' + secondNumber);
}