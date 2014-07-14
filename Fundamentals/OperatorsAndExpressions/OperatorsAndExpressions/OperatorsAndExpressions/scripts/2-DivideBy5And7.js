function checkIfCanDivide() {
    var inputNumber = document.getElementById('number').value;
    var canBeDivided;

    if ((inputNumber % 5 == 0) && (inputNumber % 7 == 0)) {
        canBeDivided = true;
        document.getElementById('result').innerHTML =
            'The number ' + inputNumber + ' can be divided by 5 and 7 at the same time -> ' + canBeDivided;
        console.log('The number ' + inputNumber + ' can be divided by 5 and 7 at the same time -> ' + canBeDivided);
    }
    else {
        canBeDivided = false;
        document.getElementById('result').innerHTML =
            'The number ' + inputNumber + ' can be divided by 5 and 7 at the same time -> ' + canBeDivided;
        console.log('The number ' + inputNumber + ' can be divided by 5 and 7 at the same time -> ' + canBeDivided);
    }
}