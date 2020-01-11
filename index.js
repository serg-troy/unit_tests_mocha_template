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

function isIntegerArray(arr){
  return arr ? arr.every(x => Number.isInteger(x)) : false;
}

function permuteAPalindrome (input){
  let obj = {}, strike = 0;
  input.split('').forEach(x => obj.hasOwnProperty(x) ? obj[x]++ : obj[x] = 1);
  for (let key in obj) {
    if (obj[key] % 2) strike++;
  }
  return strike <= 1;
}

function validPasscode(pass){
  return /^(\d{4}|\d{6})$/.test(pass);
}

function removeDuplicates(arr) {
  return arr.filter((x, i) => i === arr.indexOf(x));
}

function mostValChar(str){
  let max = 0, result = [], dif;
  for (let x of str){
    dif = str.lastIndexOf(x) - str.indexOf(x);
    if (max < dif) max = dif;
  }
  for (let x of str){
    dif = str.lastIndexOf(x) - str.indexOf(x);
    if (dif === max) result.push(x);
  }
  return result.sort()[0];
}

module.exports = {sum, mult, isAdult, isPalindrome, sortArrayUp, oddOrEven,
  isIntegerArray, permuteAPalindrome, validPasscode, removeDuplicates, mostValChar};