function print() {
    var N = parseInt(document.getElementById('number').value);
    var finalPrint = "";

    for (var i = 1; i <= N; i++) {
        if ((i % 7 !== 0) || (i % 3 !== 0)) {
            finalPrint += i + ' ';
        }
        else {
            finalPrint += '* ';
        }
    }
    document.getElementById('result').innerHTML = finalPrint;
    console.log(finalPrint);
}