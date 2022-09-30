"use strict";
// add whatever parameters you deem necessary & write docstring
//start with 2 arrays (maybe different lengths)
//ouput an object combining into {arr1: arr2} pairs
//prioritize keys from arr1
//fill with null if less values
//ignore extra values

/**Accepts two arrays, "keys" and "values", combines them into a single object the
 * with the number of keys = the length of "keys"
 */

function twoArrayObject(keys, values) {
    //counter that ends at the length of keys
    //if values index === undefined, value will be null
    let keyValuePairs = {};
    for (let i = 0; i < keys.length; i++) {
        let tempValue = values[i];
        if (tempValue === undefined) {
            tempValue = null;
        }
        keyValuePairs[keys[i]] = tempValue;
    }
    return keyValuePairs;
}
