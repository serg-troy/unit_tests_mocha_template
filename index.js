module.exports = {sum, mult, isAdult, isPalindrome};


function sum(a, b){
    return a + b;
}
function mult(a, b){
    return a * b;
}

function isAdult(age){
    return age < 0 ? null : age > 17;
}

function isPalindrome(str){
    return str.split('').reverse().join('') === str;
}






// // func sortArrayUp ( [2, 3, 4, 0, 1]) ---> [0, 1, 2, 3, 4]
// // function isOddNumber,
// // function isEvenNumber
// // все аккуратно оформите и опубликуйте в github у себя
// // docs https://nodejs.org/api/assert.html (edited)