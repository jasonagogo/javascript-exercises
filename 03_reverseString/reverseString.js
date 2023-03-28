const reverseString = function(word) {
let string = word;
let n = parseInt(string.length);
let newString ='';

for (i = n - 1; i >= 0; i--) {
    newString += string.charAt(i);
}
return newString;
};


// Do not edit below this line
module.exports = reverseString;
