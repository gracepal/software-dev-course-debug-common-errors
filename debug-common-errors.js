/*

Overview
In this activity, you will receive three short JavaScript programs,
each containing a different type of error (syntax, runtime, and logic)
along with a brief explanation of what the program is supposed to do.
Your task is to identify the error, correct it, and verify the fix.

Instructions
Debugging Steps:
  - Identify the error type (syntax, runtime, or logic).
  - Use Debugging Techniques such as reading error messages, using console.log(), or testing in small steps.
  - Propose a Fix that addresses the error.
  - Verify the Solution by running the code again to ensure the program works as intended.

Reflection:
Think about which debugging methods you found most useful and how you might apply them in future projects.
*/

// ************************************************************
// Programs and Solutions
// ************************************************************

// ------------------------------------------------------------
// Program A
// Description:
// This program is intended to display a simple prompt in the console but fails to run.
// ------------------------------------------------------------

console.log('\nProgram A');
console.log('---------');
console.log('Welcome to the bootcamp');

// What’s Wrong?
// Error: SyntaxError: Invalid or unexpected token
// Missing closing quotes and closing parentheses
// Fixed by adding missing tokens

// ------------------------------------------------------------
// Program B
// Description:
// This code attempts to multiply each number in an array by 2 and display the results. However, it crashes at runtime.
// ------------------------------------------------------------

console.log('\nProgram B');
console.log('---------');
let numbers = [2, 4, 8];
for (let i = 0; i < numbers.length; i++) {
  let doubled = numbers[i] * 2;
  console.log(doubled);
}

// What’s Wrong?
// Logic error, because the intention was to double every number, but instead we get NaN for "eight"
// It doesn't actually crash at runtime in my system. Instead it produces output:
// 4
// 8
// NaN
// As per chatgpt, this is because javascript is very forgiving, and for multiplication
//   it first coerces both operands into numbers before multiplying
//   for 'eight' * 2 → NaN, it quietly indicates that the math failed, instead of throwing an exception
// Fixed by changing 'eight' to the number 8

// ------------------------------------------------------------
// Program C (Logic Error)
// Description:
// This snippet of code is supposed to check if a given number is prime (i.e., divisible only by 1 and itself). However, it incorrectly marks some numbers as prime or not prime.
// ------------------------------------------------------------

// Prime numbers are > 1 and have exactly 2 distinct factors, 1 and themselves
console.log('\nProgram C');
console.log('---------');
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false; // divisor found, num is NOT prime
    }
  }
  return true; // divisor NOT found, num IS prime
}

console.log(isPrime(7)); // Expected true but gets false
for (let num = 0; num < 10; num++) {
  console.log(num, isPrime(num));
}

// What’s Wrong?

// This is wrong ❌
// Logic error, because the number we are checking will never get checked in the loop
//   because the range of (let i = 2; i < num; i++) is 2~(num-1) since i < num
// Fix is to update the comparison operator to <= instead of <
//   or update the end operand to (num + 1)

// Correction ✅
// Logic error. Did not read the code logic properly and assumed the simplest conclusion
//   without checking solution with additional inputs.
// The actual logic is, function takes in a number to check if it is prime,
//   and first checks if input is less than 2, then it is not prime (0 and 1 are not prime),
//   then attempts to check every num between 2 and input-1 (because we're looking for divisors),
//   and if ever there is a num in between that evenly divides into input number,
//   then that is not a prime (prime can only be divided by 1 and itself),
//   otherwise it is a prime (ex. with 7, we check divisors 2~6, and if none divides 7 evenly)

// ************************************************************
// Sample Output for Reference
// ************************************************************

// Program A
// ---------
// Welcome to the bootcamp

// Program B
// ---------
// 4
// 8
// 16

// Program C
// ---------
// true
