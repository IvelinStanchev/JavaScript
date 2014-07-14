function check() {
    var digit = parseInt(document.getElementById('digit').value);

    switch (digit) {
        case 0:
            document.getElementById('result').innerHTML = 'Zero';
            console.log('Zero');
            break;
        case 1:
            document.getElementById('result').innerHTML = 'One';
            console.log('One');
            break;
        case 2:
            document.getElementById('result').innerHTML = 'Two';
            console.log('Two');
            break;
        case 3:
            document.getElementById('result').innerHTML = 'Three';
            console.log('Three');
            break;
        case 4:
            document.getElementById('result').innerHTML = 'Four';
            console.log('Four');
            break;
        case 5:
            document.getElementById('result').innerHTML = 'Five';
            console.log('Five');
            break;
        case 6:
            document.getElementById('result').innerHTML = 'Six';
            console.log('Six');
            break;
        case 7:
            document.getElementById('result').innerHTML = 'Seven';
            console.log('Seven');
            break;
        case 8:
            document.getElementById('result').innerHTML = 'Eight';
            console.log('Eight');
            break;
        case 9:
            document.getElementById('result').innerHTML = 'Nine';
            console.log('Nine');
            break;
        default:
            document.getElementById('result').innerHTML = 'Not a digit';
            console.log('Not a digit');
            break;
    }
}