"use strict";
// add whatever parameters you deem necessary & write docstring
/** Accepts a sorted array of numbers and a number targetAvg.
 * Function returns a boolean if a pair of numbers exist whose average is
 * the given targetAvg
 */

// averagePair([1, 2, 3], 2.5);         // true
// averagePair([3, 3, 6, 12, 19], 8);   // false
// averagePair([1, 2, 3], 2);           // true
// averagePair([], 0);                  // false

//observation: since the arr is sorted, if first entry> avg, fails fast
// and also if last entry < avg, fails fast

//we should use two pointers

function averagePair(numbers, targetAvg) {
  if (numbers.length === 0) {
    return false;
  }

  let left = 0;
  let right = numbers.length - 1;

  //debugger

  while (numbers[left] <= targetAvg && numbers[right] >= targetAvg && left !== right) {
    let tempAvg = (numbers[left] + numbers[right]) / 2;
    if (tempAvg === targetAvg) {
      return true;
    }
    else if (tempAvg > targetAvg) {
      right--;
    }
    else if (tempAvg < targetAvg) {
      left++;
    }
  }

  return false;
}
