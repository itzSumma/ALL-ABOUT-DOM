/*
 * Find the factorial of a number.
 */

function factorial(num) {
  let result = 1;

  for (let i = 1; i <= num; i++) {
    result *= i;
  }

  return result;
}

console.log(factorial(5));

/*
 * Check whether a number is prime or not.
 */

function isPrime(num) {
  if (num <= 1) {
    return "Not Prime";
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return "Not Prime";
    }
  }

  return "Prime";
}

console.log(isPrime(7));

/*
 * Print numbers from 1 to 20.
 */

function fizzBuzz() {
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz();