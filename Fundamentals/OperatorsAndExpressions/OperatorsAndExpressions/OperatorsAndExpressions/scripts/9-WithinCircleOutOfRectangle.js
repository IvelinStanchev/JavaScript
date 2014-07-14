function checkIfWithinCircleAndOutOfRectangle() {
    var x = document.getElementById('x').value;
    var y = document.getElementById('y').value;
    var radius = 3;
    var centerX = 1;
    var centerY = 1;

    if ((((x - centerX) * (x - centerX)) + ((y - centerY) * (y - centerY)) <= (radius * radius)) ||
        ((x >= -1 && x <= 5) && (y <= 1 && y >= -1))) {
        document.getElementById('result').innerHTML =
            'The point {' + x + ', ' + y + '} ' + 'is within the circle and rectangle';
        console.log('The point {' + x + ', ' + y + '} ' + 'is within the circle and rectangle');
    }
    else {
        document.getElementById('result').innerHTML =
            'The point {' + x + ', ' + y + '} ' + 'is out of the circle and rectangle';
        console.log('The point {' + x + ', ' + y + '} ' + 'is out of the circle and rectangle');
    }
}