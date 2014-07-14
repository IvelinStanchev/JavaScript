function check() {
    var number = parseInt(document.getElementById('number').value);
    var firstDigit, secondDigit, thirdDigit;
    firstDigit = ((number % 100) % 10) | 0;
    secondDigit = ((number % 100) / 10) | 0;
    thirdDigit = (number / 100) | 0;
    var finalWord = '';
    var array = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

    if (number < 20) {
        switch (number) {
            case 0:
                finalWord = 'Zero'
                break;
            case 1:
                finalWord = 'One';
                break;
            case 2:
                finalWord = 'Two';
                break;
            case 3:
                finalWord = 'Three';
                break;
            case 4:
                finalWord = 'Four';
                break;
            case 5:
                finalWord = 'Five';
                break;
            case 6:
                finalWord = 'Six';
                break;
            case 7:
                finalWord = 'Seven';
                break;
            case 8:
                finalWord = 'Eight';
                break;
            case 9:
                finalWord = 'Nine';
                break;
            case 10:
                finalWord = 'Ten';
                break;
            case 11:
                finalWord = 'Eleven';
                break;
            case 12:
                finalWord = 'Twelve';
                break;
            case 13:
                finalWord = 'Thirteen';
                break;
            case 14:
                finalWord = 'Fourteen';
                break;
            case 15:
                finalWord = 'Fifteen';
                break;
            case 16:
                finalWord = 'Sixteen';
                break;
            case 17:
                finalWord = 'Seventeen';
                break;
            case 18:
                finalWord = 'Eighteen';
                break;
            case 19:
                finalWord = 'Nineteen';
                break;
        }
    }
    else if (number >= 20 && number < 100) {
        switch (secondDigit) {
            case 2:
                if (firstDigit === 0) {
                    finalWord += 'Twenty';
                }
                else {
                    finalWord += 'Twenty ' + array[firstDigit - 1];
                }
                break;
            case 3:
                if (firstDigit === 0) {
                    finalWord += 'Thirty';
                }
                else {
                    finalWord += 'Thirty ' + array[firstDigit - 1];
                }
                break;
            case 4:
                if (firstDigit === 0) {
                    finalWord += 'Fourty';
                }
                else {
                    finalWord += 'Fourty ' + array[firstDigit - 1];
                }
                break;
            case 5:
                if (firstDigit === 0) {
                    finalWord += 'Fifty';
                }
                else {
                    finalWord += 'Fifty ' + array[firstDigit - 1];
                }
                break;
            case 6:
                if (firstDigit === 0) {
                    finalWord += 'Sixty';
                }
                else {
                    finalWord += 'Sixty ' + array[firstDigit - 1];
                }
                break;
            case 7:
                if (firstDigit === 0) {
                    finalWord += 'Seventy';
                }
                else {
                    finalWord += 'Seventy ' + array[firstDigit - 1];
                }
                break;
            case 8:
                if (firstDigit === 0) {
                    finalWord += 'Eighty';
                }
                else {
                    finalWord += 'Eighty ' + array[firstDigit - 1];
                }
                break;
            case 9:
                if (firstDigit === 0) {
                    finalWord += 'Ninety';
                }
                else {
                    finalWord += 'Ninety ' + array[firstDigit - 1];
                }
                break;
        }
    }
    else {
        switch (thirdDigit) {
            case 1:
                finalWord = 'One hundred ';
                break;
            case 2:
                finalWord = 'Two hundred ';
                break;
            case 3:
                finalWord = 'Three hundred ';
                break;
            case 4:
                finalWord = 'Four hundred ';
                break;
            case 5:
                finalWord = 'Five hundred ';
                break;
            case 6:
                finalWord = 'Six hundred ';
                break;
            case 7:
                finalWord = 'Seven hundred ';
                break;
            case 8:
                finalWord = 'Eight hundred ';
                break;
            case 9:
                finalWord = 'Nine hundred ';
                break;
        }
        switch (secondDigit) {
            case 0:
                //The number is between hundred and 10
                if (firstDigit !== 0) {
                    finalWord += 'and ';
                }

                switch (firstDigit) {
                    case 1:
                        finalWord += 'one';
                        break;
                    case 2:
                        finalWord += 'two';
                        break;
                    case 3:
                        finalWord += 'three';
                        break;
                    case 4:
                        finalWord += 'four';
                        break;
                    case 5:
                        finalWord += 'five';
                        break;
                    case 6:
                        finalWord += 'six';
                        break;
                    case 7:
                        finalWord += 'seven';
                        break;
                    case 8:
                        finalWord += 'eight';
                        break;
                    case 9:
                        finalWord += 'nine';
                        break;
                }
                break;
            case 1:
                //The number is between hundred and ten and 20
                finalWord += 'and ';

                switch (firstDigit) {
                    case 0:
                        finalWord += 'ten';
                        break;
                    case 1:
                        finalWord += 'eleven';
                        break;
                    case 2:
                        finalWord += 'twelve';
                        break;
                    case 3:
                        finalWord += 'thirteen';
                        break;
                    case 4:
                        finalWord += 'fourteen';
                        break;
                    case 5:
                        finalWord += 'fifteen';
                        break;
                    case 6:
                        finalWord += 'sixteen';
                        break;
                    case 7:
                        finalWord += 'seventeen';
                        break;
                    case 8:
                        finalWord += 'eighteen';
                        break;
                    case 9:
                        finalWord += 'nineteen';
                        break;
                }
                break;
            case 2:
                finalWord += 'twenty';
                if (firstDigit !== 0) {
                    finalWord += ' ' + array[firstDigit - 1];
                }
                break;
            case 3:
                finalWord += 'thirty';
                if (firstDigit !== 0) {
                    finalWord += ' ' + array[firstDigit - 1];
                }
                break;
            case 4:
                finalWord += 'fourty';
                if (firstDigit !== 0) {
                    finalWord += ' ' + array[firstDigit - 1];
                }
                break;
            case 5:
                finalWord += 'fifty';
                if (firstDigit !== 0) {
                    finalWord += ' ' + array[firstDigit - 1];
                }
                break;
            case 6:
                finalWord += 'sixty';
                if (firstDigit !== 0) {
                    finalWord += ' ' + array[firstDigit - 1];
                }
                break;
            case 7:
                finalWord += 'seventy';
                if (firstDigit !== 0) {
                    finalWord += ' ' + array[firstDigit - 1];
                }
                break;
            case 8:
                finalWord += 'eighty';
                if (firstDigit !== 0) {
                    finalWord += ' ' + array[firstDigit - 1];
                }
                break;
            case 9:
                finalWord += 'ninety';
                if (firstDigit !== 0) {
                    finalWord += ' ' + array[firstDigit - 1];
                }
                break;
            default:
        }
    }

    document.getElementById('result').innerHTML = finalWord;
    console.log(finalWord);
}