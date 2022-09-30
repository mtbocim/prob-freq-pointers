"use script";
// add whatever parameters you deem necessary & write doc comment

// canConstructWord('aa', 'abc');
//   // false -- can't build "aa" with only 1 "a"

// canConstructWord('abc', 'dcba');
//   // true -- can build "abc" with letters "abcd"

// canConstructWord('aabb', 'bcabad');
// true -- can build "aabbcc" with those letters

//count the number of the letters in the "word"
//we don't care if letters has extras
//order doesn't matter
//only lowercase letters (case insensitive)



/**Accept two strings, "word" and "letters", return boolean true **only**
 * if the "word" can be constructed using the given "letters". This function is
 * case insensitive.
 */
function canConstructWord(word, letters) {
    //freq count of word
    //freq count of letters
    const wordLetterCount = letterFreqCount(word);
    const letterCount = letterFreqCount(letters);

    //compare 1st counter to 2nd
    for (key in wordLetterCount) {
        if (letterCount[key] === undefined) {
            return false;
        }
        if (letterCount[key] < wordLetterCount[key]) {
            return false;
        }
    }
    return true;

}

/**Accepts a string (case insensitive), returns an object with single letters as keys,
 * and their counts.
 */
function letterFreqCount(str) {
    //return object with count of letters
    let obj = {};
    for (let char of str) {
        char = char.toLowerCase();
        if (obj[char] === undefined) {
            obj[char] = 1;
        } else {
            obj[char]++;
        }
    }

    return obj; //better names might be: letterCount, freqCount....
}
