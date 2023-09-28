const palindromes = function (str) {
    let splitArr = str.split('');
    let reverseArr = splitArr.reverse();

    if (splitArr === reverseArr) {
        return true;
    }
    else {
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
