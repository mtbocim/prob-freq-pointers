"use strict";

// add whatever parameters you deem necessary & write docstring

/** Function accepts two numbers and return a boolean true if
 * the two numbers have the same frequency of digits.
 *
 * sameFrequency(123, 321);   // true
 *
 * sameFrequency(34, 14);     // false
 */
function sameFrequency(num1, num2) {
  if(num1.toString().length !== num2.toString().length){
    return false;
  }
debugger
  let num1Freq = getDigitFrequency(num1);
  let num2Freq = getDigitFrequency(num2);

  for(let i in num1Freq){
    if(num1Freq[i] !== num2Freq[i]){
      return false;
    }
  }

  return true;
}

/** Function accepts a number and outputs a frequency object
 * with digits as keys and number of occurrences as values.
 */
function getDigitFrequency(num){
  let outputObj = {};
  for(let i of num.toString()){
    if(outputObj[i]===undefined){
      outputObj[i] = 1;
    }
    else{
      outputObj[i]++;
    }
  }
  return outputObj;
}
