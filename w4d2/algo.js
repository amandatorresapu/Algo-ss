/* 
  Given a string,
  return a new string with the duplicates excluded
  Bonus: Keep only the last instance of each character.
  function that loops through array
  loop that hits every letter
  function process that excludeds duplicate(if statement)
  result {}
*/

const str1 = "abcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

const str6 = "abc123!!!ab";
const expected6 = "c123!ab"; //"abc123!"

Answer: function stringDedupe(str) {
  let result = "";
  let known_chars = [];
  for (let x = 0; x < str.length; x++) {
    if (!known_chars.includes(str[x])) {
      known_chars.push(str[x]);
      result += str[x];
    }
  }
  return result;
}
/**
 * De-dupes the given string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str A string that may contain duplicates.
 * @returns {string} The given string with any duplicate characters removed.
 */
function stringDedupe(str) {}

// --------------------------------------------------------------------------------------------

/* 
  Given a string containing space separated words
  Reverse each word in the string.
  If you need to, use .split to start, then try to do it without.
*/

const str3 = "hello";
const expected3 = "olleh";

const str4 = "hello world";
const expected4 = "olleh dlrow";

const str5 = "abc def ghi";
const expected5 = "cba fed ihg";

/**
 * Reverses the letters in each words in the given space separated
 * string of words. Does NOT reverse the order of the words themselves.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str Contains space separated words.
 * @returns {string} The given string with each word's letters reversed.
 */
function reverseWords(str) {}
