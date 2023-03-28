const removeFromArray = function() {
  let array = Array.from(arguments[0]);
  let num = arguments.length;
  let newArray = array;
 // console.log(array)
 // console.log(num);
  if (arguments.length <= 1) {
    return array;
  } else{
    for (i = num; i > 1; i--) {
     newArray = newArray.filter(poop => poop != arguments[i-1])
     return newArray;
    }
    /*console.log(newArray)*/
  }
}
/*console.log(removeFromArray([1,2,3,4], 4));*/

// Do not edit below this line
module.exports = removeFromArray;
