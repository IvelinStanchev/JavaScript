function findsMinAndMax() {
    var firstNumber = parseInt(document.getElementById('firstNumber').value);
    var secondNumber = parseInt(document.getElementById('secondNumber').value);
    var thirdNumber = parseInt(document.getElementById('thirdNumber').value);
    var fourthNumber = parseInt(document.getElementById('fourthNumber').value);
    var fifthNumber = parseInt(document.getElementById('fifthNumber').value);
    var number = [firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber];
    var min, max;
    min = firstNumber;
    max = firstNumber;

    for (var i = 0; i < 5; i++) {
        if (number[i] < min) {
            min = number[i];
        }
        if (number[i] > max) {
            max = number[i];
        }
    }

    document.getElementById('result').innerHTML = 'Min -> ' + min + '; Max -> ' + max;
    console.log('Min -> ' + min + '; Max -> ' + max);
}