function checkIfWithinCircle() {
    var x = document.getElementById('x').value;
    var y = document.getElementById('y').value;
    var radius = 5;
    
    if (x * x + y * y < radius * radius) {
        document.getElementById('result').innerHTML = 'The point is in the circle';
        console.log('The point is in the circle');
    }
    else if (x * x + y * y === radius * radius) {
        document.getElementById('result').innerHTML = 'The point lies on the circle';
        console.log('The point lies on the circle');
    }
    else {
        document.getElementById('result').innerHTML = 'The point is not in the circle';
        console.log('The point is not in the circle');
    }
}
