module.exports = {sum, mult, isAdult, isPalindrome, sortArrayUp, oddOrEven, isIntegerArray};


function sum(a, b){
    return a + b;
}
function mult(a, b){
    return a * b;
}

function isAdult(age){
    return age < 0 ? 'Check the age!' : age > 17;
}

function isPalindrome(str){
    return str.split('').reverse().join('').toLowerCase() === str.toLowerCase();
}

function sortArrayUp(arr){
    return arr.sort((a, b) => a - b);
}

function oddOrEven(n){
    return n % 2 ? 'odd' : 'even';
}

function isIntegerArray(arr) {
    return !!arr ? arr.every(x => Number.isInteger(x)) : false;
}