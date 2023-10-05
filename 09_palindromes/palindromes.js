const palindromes = function (str) {
    // Remove non-alphanumeric characters and convert to lowercase. Any matches in str are replaced with an "empty"
    // str, essentially removing that value
    const cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')


    return cleanStr === cleanStr.split('').reverse().join('');
};


module.exports = palindromes;
