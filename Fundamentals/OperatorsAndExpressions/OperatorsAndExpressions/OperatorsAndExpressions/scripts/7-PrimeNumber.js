function checkIfIsPrime() {
    var inputNumber = document.getElementById('number').value;
    var inputNumberAsInt = parseInt(inputNumber);

    if ((inputNumberAsInt === 1) || (inputNumberAsInt === 2) ||
            (inputNumberAsInt === 3) || (inputNumberAsInt === 5) ||
            (inputNumberAsInt === 7)) {
        document.getElementById('result').innerHTML = 'Prime -> True';
        console.log('Prime -> True');
    }
    else if ((inputNumberAsInt % 2 !== 0) && (inputNumberAsInt % 3 !== 0) &&
            (inputNumberAsInt % 5 !== 0) && (inputNumberAsInt % 7 !== 0)) {
        document.getElementById('result').innerHTML = 'Prime -> True';
        console.log('Prime -> True');
    }
    else {
        document.getElementById('result').innerHTML = 'Prime -> False';
        console.log('Prime -> False');
    }
}