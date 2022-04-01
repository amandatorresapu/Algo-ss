/*
  Sum To One Digit
  Implement a function sumToOne(num)​ that,
  given a number, sums that number’s digits
  repeatedly until the sum is only one digit. Return
  that final one digit result.
  Tips:
    to access digits from a number, need to convert it .toString() to access each digit via index
    parseInt(arg) returns arg parsed as an integer, or NaN if it couldn't be converted to an int
    isNaN(arg) used to check if something is NaN
*/

const num1 = 5;
const expected1 = 5;

const num2 = 10;
const expected2 = 1;

const num3 = 25;
const expected3 = 7;

//What if we had decimals?
// What would happen if we had 789?

//BASE CASES: if empty return 0, if it's a signle digit number return that number

// create a function that takes in a number
// 1. check base cases
// 3. last_digit = get last digit using modulus operator (125 % 10 == 5)
// 4. everything_but_last = get everything but the last digit (Math.floor(125 / 10) == 12)
// 5. call sumToOneDigit on result from divison
// 6. create output variable & set it to last digit + recursive call of result from step 4
// 7. check if output is two digits
    // if 2 digits or more, return recursive call of function
// 8. return our output number

// sumToOneDigit(125)
// 5 + sumToOneDigit(12)
// 5 + 2 + sumToOneDigit(1)
// 5 + 2 + 1


/**
 * Sums the given number's digits until the number becomes one digit.
 * @param {number} num The number to sum to one digit.
 * @returns {number} One digit.
 */
function sumToOneDigit(num) {
  if (num==0){
    return 0
  }
  if (num.length==1){
    return num
  }
  last_digit= num % 10
  print(last_digit)
}



// ---------------------------------------------------------------------------------------



/* 
  Recursively find the lowest common multiple between two numbers
  "A common multiple is a number that is a multiple of two or more integers. 
  The common multiples of 3 and 4 are 0, 12, 24, .... 
  The least common multiple (LCM) of two numbers is the smallest
  number (not zero) that is a multiple of both."
  
  Try writing two columns of multiples as a starting point:
  starting with 15 and 25 and keep writing their multiples until you find the
  lowest common one then turn this in to a step by step instruction
  15 25
  30 50
  45 75
  60 
  75
  75 is the first common
*/

const num1A = 1;
const num1B = 1;
const expected1 = 1;

const num2A = 5;
const num2B = 10;
const expected2 = 10;

const num3A = 10;
const num3B = 5;
const expected3 = 10;

const num4A = 6;
const num4B = 8;
const expected4 = 24;

const num5A = 15;
const num5B = 25;
const expected5 = 75;

/**
 * Add params if needed for recursion
 * Finds the lowest common multiple of the two given ints.
 * @param {number} a
 * @param {number} b
 * @returns {number} The lowest common multiple of the given ints.
 */
function lowestCommonMultiple(a, b, temp_a = a, temp_b = b) {}

//Questions to ask? 
    // Could we be given negatives?
    // Will they be whole number?


// BASE CASES
    // Are they they same number?
    // Is one of them 0? the lowest common multiple is 0
    // Is one of them 1? then the lowest common multiple is the larger one


// Create a function that takes in two numbers
// Check base cases

// if 2nd number is bigger than first number:
    // Check if smaller number goes into bigger number evenly
        // if yes: return bigger number
        // if no: create a third number that is 2nd number + temp_b
            // return recursive call w/ same a, b, temp_a values. Temp_b will be set to our third number


// if 1st number is bigger than 2nd number:
    // Check if smaller number goes into bigger number evenly
        // if yes: return bigger number
        // if no: create a third number that is 1st number + temp_a
            // return recursive call w/ same a, b, temp_b values. Temp_a will be set to our third number
*/

const num1A = 1;
const num1B = 1;
const expected1 = 1;

const num2A = 5;
const num2B = 10;
const expected2 = 10;

const num3A = 10;
const num3B = 5;
const expected3 = 10;

const num4A = 6;
const num4B = 8;
const expected4 = 24;

const num5A = 15;
const num5B = 25;
const expected5 = 75;

/**
 * Add params if needed for recursion
 * Finds the lowest common multiple of the two given ints.
 * @param {number} a
 * @param {number} b
 * @returns {number} The lowest common multiple of the given ints.
 */
function lowestCommonMultiple(a, b, temp_a = a, temp_b = b) {}

//Questions to ask? 
    // Could we be given negatives?
    // Will they be whole number?


// BASE CASES
    // Are they they same number?
    // Is one of them 0? the lowest common multiple is 0
    // Is one of them 1? then the lowest common multiple is the larger one


// Create a function that takes in two numbers
// Check base cases

// if 2nd number is bigger than first number:
    // Check if smaller number goes into bigger number evenly
        // if yes: return bigger number
        // if no: create a third number that is 2nd number + temp_b
            // return recursive call w/ same a, b, temp_a values. Temp_b will be set to our third number


// if 1st number is bigger than 2nd number:
    // Check if smaller number goes into bigger number evenly
        // if yes: return bigger number
        // if no: create a third number that is 1st number + temp_a
            // return recursive call w/ same a, b, temp_b values. Temp_a will be set to our third number