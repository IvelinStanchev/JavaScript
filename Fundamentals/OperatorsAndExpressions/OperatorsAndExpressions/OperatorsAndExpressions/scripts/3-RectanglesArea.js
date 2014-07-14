function calculateArea() {
    var width = parseFloat(document.getElementById('width').value);
    var height = parseFloat(document.getElementById('height').value);
    var area;
    
    area = width * height;
    document.getElementById('result').innerHTML = 'The area is: ' + area; 
    console.log('The area is: ' + area);
}