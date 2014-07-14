function checkForOddOrEven() {
    var inputNumber = document.getElementById('number').value;

    if (inputNumber % 2 == 0) {
        document.getElementById('result').innerHTML = inputNumber + ' -> Even';
        console.log(inputNumber + ' -> Even');
    }
    else {
        document.getElementById('result').innerHTML = inputNumber + ' -> Odd';
        console.log(inputNumber + ' -> Odd');
    }
}