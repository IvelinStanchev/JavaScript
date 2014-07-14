function check() {
    var firstNumber = parseInt(document.getElementById('firstNumber').value);
    var secondNumber = parseInt(document.getElementById('secondNumber').value);
    var thirdNumber = parseInt(document.getElementById('thirdNumber').value);

    if (firstNumber < 0 && secondNumber > 0 && thirdNumber > 0) {
        document.getElementById('result').innerHTML = 'The sign is - (minus)';
        console.log('The sign is - (minus)');
    }
    else if (firstNumber > 0 && secondNumber > 0 && thirdNumber < 0) {
        document.getElementById('result').innerHTML = 'The sign is - (minus)';
        console.log('The sign is - (minus)');
    }
    else if (firstNumber < 0 && secondNumber < 0 && thirdNumber < 0) {
        document.getElementById('result').innerHTML = 'The sign is - (minus)';
        console.log('The sign is - (minus)');
    }
    else if (firstNumber > 0 && secondNumber < 0 && thirdNumber > 0) {
        document.getElementById('result').innerHTML = 'The sign is - (minus)';
        console.log('The sign is - (minus)');
    }
    else if (firstNumber > 0 && secondNumber < 0 && thirdNumber < 0) {
        document.getElementById('result').innerHTML = 'The sign is + (plus)';
        console.log('The sign is + (plus)');
    }
    else if (firstNumber < 0 && secondNumber > 0 && thirdNumber < 0) {
        document.getElementById('result').innerHTML = 'The sign is + (plus)';
        console.log('The sign is + (plus)');
    }
    else if (firstNumber < 0 && secondNumber < 0 && thirdNumber > 0) {
        document.getElementById('result').innerHTML = 'The sign is + (plus)';
        console.log('The sign is + (plus)');
    }
    else if (firstNumber > 0 && secondNumber > 0 && thirdNumber > 0) {
        document.getElementById('result').innerHTML = 'The sign is + (plus)';
        console.log('The sign is + (plus)');
    }
}