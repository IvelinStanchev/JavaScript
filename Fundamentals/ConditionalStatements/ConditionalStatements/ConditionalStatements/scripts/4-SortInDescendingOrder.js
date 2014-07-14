function check() {
    var firstNumber = parseInt(document.getElementById('firstNumber').value);
    var secondNumber = parseInt(document.getElementById('secondNumber').value);
    var thirdNumber = parseInt(document.getElementById('thirdNumber').value);
    var biggestNumber;
    var middleNumber;
    var lowestNumber;

    biggestNumber = firstNumber;
    middleNumber = firstNumber;
    lowestNumber = firstNumber;

    if (secondNumber > biggestNumber) {
        biggestNumber = secondNumber;
    }
    if (thirdNumber > biggestNumber) {
        biggestNumber = thirdNumber;
    }

    if (secondNumber < lowestNumber) {
        lowestNumber = secondNumber;
    }
    if (thirdNumber < lowestNumber) {
        lowestNumber = thirdNumber;
    }

    if (secondNumber > firstNumber && secondNumber < thirdNumber) {
        middleNumber = secondNumber;
    }
    if (secondNumber > thirdNumber && secondNumber < firstNumber) {
        middleNumber = secondNumber;
    }
    if (thirdNumber > firstNumber && thirdNumber < secondNumber) {
        middleNumber = thirdNumber;
    }
    if (thirdNumber > secondNumber && thirdNumber < firstNumber) {
        middleNumber = thirdNumber;
    }
    document.getElementById('result').innerHTML = biggestNumber + ', ' + middleNumber + ', ' + lowestNumber;
    console.log(biggestNumber + ', ' + middleNumber + ', ' + lowestNumber);
}