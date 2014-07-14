function calculateTrapezoidsArea() {
    var a = parseFloat(document.getElementById('a').value);
    var b = parseFloat(document.getElementById('b').value);
    var h = parseFloat(document.getElementById('h').value);
    var area;

    area = ((a + b) * h) / 2;
    document.getElementById('result').innerHTML = 'The area is: ' + area;
    console.log('The area is: ' + area);
}