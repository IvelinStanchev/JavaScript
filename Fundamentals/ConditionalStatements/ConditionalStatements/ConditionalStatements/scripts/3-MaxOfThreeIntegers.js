function check() {
    var firstNumber = parseInt(document.getElementById('firstNumber').value);
    var secondNumber = parseInt(document.getElementById('secondNumber').value);
    var thirdNumber = parseInt(document.getElementById('thirdNumber').value);

    if (firstNumber > secondNumber && firstNumber > thirdNumber) {
        document.getElementById('result').innerHTML = 'The biggest integer is: ' + firstNumber;
        console.log('The biggest integer is: ' + firstNumber);
    }
    if (secondNumber > firstNumber && secondNumber > thirdNumber) {
        document.getElementById('result').innerHTML = 'The biggest integer is: ' + secondNumber;
        console.log('The biggest integer is: ' + secondNumber);
    }
    if (thirdNumber > firstNumber && thirdNumber > secondNumber) {
        document.getElementById('result').innerHTML = 'The biggest integer is: ' + thirdNumber;
        console.log('The biggest integer is: ' + thirdNumber);
    }
}