function checkIfThirdDigitIs7() {
    var inputNumber = document.getElementById('number').value;
    var thirdDigit;
    var isSeven;
    thirdDigit = ((inputNumber % 1000) / 100) | 0;

    if (thirdDigit === 7) {
        isSeven = true;
        document.getElementById('result').innerHTML =
            'The number ' + inputNumber + ' has third value 7 -> ' + isSeven;
        console.log('The number ' + inputNumber + ' has third value 7 -> ' + isSeven);
    }
    else{
        isSeven = false;
        document.getElementById('result').innerHTML =
            'The number ' + inputNumber + ' has third value 7 -> ' + isSeven;
        console.log('The number ' + inputNumber + ' has third value 7 -> ' + isSeven);
    }
}