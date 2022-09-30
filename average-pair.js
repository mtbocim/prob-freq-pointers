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

  let leftIndex = 0;
  let rightIndex = numbers.length - 1;

  debugger

  while (numbers[leftIndex] <= targetAvg && numbers[rightIndex] >= targetAvg
    && leftIndex !== rightIndex) {
    let tempAverage = (numbers[leftIndex] + numbers[rightIndex]) / 2;
    if (tempAverage === targetAvg) {
      return true;
    }
    else if (tempAverage > targetAvg) {
      rightIndex--;
    }
    else if (tempAverage < targetAvg) {
      leftIndex++;
    }
  }

  return false;
}
