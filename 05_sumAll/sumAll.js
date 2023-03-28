const sumAll = function() {
  
  if (arguments[0] < 0 || arguments[1] < 0) {
    return "ERROR"
  } 
  
  if (arguments[0] !== parseInt(arguments[0]) || arguments[1] !== parseInt(arguments[1])) {
   return "ERROR"
  }

  if (parseInt(arguments[0]) < parseInt(arguments[1])){
    num1 = parseInt(arguments[0]);
    num2 = parseInt(arguments[1]);
  } else {
    num1 = parseInt(arguments[1]);
    num2 = parseInt(arguments[0]);
  }

  let sum = 0;
    
    for (let i = num1; i <= num2; i++) {
        sum = parseInt(i + sum);
        console.log(sum);
    }
    
    return sum;
    };

// Do not edit below this line
module.exports = sumAll;
