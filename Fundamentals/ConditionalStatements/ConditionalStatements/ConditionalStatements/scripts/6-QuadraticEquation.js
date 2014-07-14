function calculateTheRoots() {
    var a = parseInt(document.getElementById('a').value);
    var b = parseInt(document.getElementById('b').value);
    var c = parseInt(document.getElementById('c').value);
    var discriminant;
    var x1, x1;

    discriminant = (b * b) - (4 * a * c);
    console.log(Math.sqrt(discriminant));
    if (discriminant < 0) {
        document.getElementById('result').innerHTML = 'No real roots';
        console.log('No real roots');
    }
    else if (discriminant === 0) {
        x1 = x2 = (b * (-1)) / (2 * a);
        document.getElementById('result').innerHTML = 'x1 = x2 = ' + x1;
        console.log('x1 = x2 = ' + x1);
    }
    else {
        x1 = ((b * (-1)) + Math.sqrt(discriminant)) / (2 * a);
        x2 = ((b * (-1)) - Math.sqrt(discriminant)) / (2 * a);
        document.getElementById('result').innerHTML = 'x1 = ' + x1 + '; x2 = ' + x2;
        console.log('x1 = ' + x1 + '; x2 = ' + x2);
    }
}