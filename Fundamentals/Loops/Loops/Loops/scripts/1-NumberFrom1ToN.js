function print() {
    var N = parseInt(document.getElementById('number').value);
    var finalPrint = "";

    for (var i = 1; i <= N; i++) {
        finalPrint += i + ' ';
    }
    document.getElementById('result').innerHTML = finalPrint;
    console.log(finalPrint);
}