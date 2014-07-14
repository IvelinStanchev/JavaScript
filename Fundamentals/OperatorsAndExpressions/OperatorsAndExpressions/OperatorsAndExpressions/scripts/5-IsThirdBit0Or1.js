function checkForThirdBit() {
    var inputNumber = document.getElementById('number').value;
    var inBinaryFormat = inputNumber
    var bits = 3;
    var mask = 1;
    mask = mask << bits;
    var checks = inputNumber & mask;

    if (checks == 0){
        document.getElementById('result').innerHTML = 'The third bit is 0';
        console.log('The third bit is 0');
    }
    else{
        document.getElementById('result').innerHTML = 'The third bit is 1';
        console.log('The third bit is 1');
    }
}