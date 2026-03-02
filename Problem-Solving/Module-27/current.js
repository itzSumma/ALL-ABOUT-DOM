//  Problem 1
// একটা array থেকে সব odd number বের করো।
// const numbers = [11, 22, 33, 44, 55, 66];
// Expected Output: [11, 33, 55]
//
//* Ans:
const numbers = [11, 22, 33, 44, 55, 66];
const oddNumber = numbers.filter((num) => num % 2 === 1);
console.log(oddNumber);

/* 
? Problem 2
সব student এর average mark বের করো। 
const students = [
  { name: "Ali", mark: 60 },
  { name: "Babu", mark: 80 },
  { name: "Chotu", mark: 70 }
];
Expected Output: 70
*/
//* Ans:
// const students = [
//   { name: "Ali", mark: 60 },
//   { name: "Babu", mark: 80 },
//   { name: "Chotu", mark: 70 },
// ];
// const total = students.reduce((sum, num) => sum + num.mark, 0);
// // const length =students.map(num=>num.length);
// console.log(total / students.length);
// console.log(total);

/* 
? Problem 3
একটা string reverse করো। 
const str = "JavaScript";
Expected Output: "tpircSavaJ"
*/
//* Ans:
const str = "JavaScript";
const rev = str.split("").reverse().join("");
// console.log(`"${rev}"`)
console.log(rev);
/* 
? Problem 4
Duplicate remove করো। 
const nums = [1, 2, 2, 3, 4, 4, 5];
Expected Output: [1, 2, 3, 4, 5]
*/
//* Ans:
// const nums = [1, 2, 2, 3, 4, 4, 5];
// const newArray =[];
// for(const num of nums){
//     // console.log(nums);
//     if(!newArray.includes(num)){
//         newArray.push(num)
//     }
// }
// console.log(newArray);
/* 
? Problem 5
সব product এর total price বের করো (price * quantity)। 
const products = [
  { name: "Pen", price: 10, quantity: 5 },
  { name: "Book", price: 50, quantity: 2 }
];
Expected Output: 150
*/
//* Ans:
const products = [
  { name: "Pen", price: 10, quantity: 5 },
  { name: "Book", price: 50, quantity: 2 }
];

const total = products.reduce((sum, product) => {
  return sum + (product.price * product.quantity);
}, 0);

console.log(total); 
/* 
? Problem 6
Longest word বের করো। 
const words = ["apple", "banana", "watermelon", "mango"];
Expected Output: "watermelon"
*/
//* Ans:
// const words = ["apple", "banana", "watermelon", "mango"];

// let longestWord = "";

// for (const word of words) {
//   if (word.length > longestWord.length) {
//     longestWord = word;
//   }
// }

// console.log(longestWord);  
const words = ["apple", "banana", "watermelon", "mango"];

//new array
const lengths = words.map(word => word.length);

// max length 
const maxLength = Math.max(...lengths);

// max length with index খু
const longestWord = words[lengths.indexOf(maxLength)];

console.log(longestWord); // "watermelon"
/* 
? Problem 7
একটা array আছে — সব নাম uppercase করো। 
const names = ["rahim", "karim", "jabbar"];
Expected Output: ["RAHIM", "KARIM", "JABBAR"]
*/
//* Ans:
const names = ["rahim", "karim", "jabbar"];

const upperNames = names.map(name => name.toUpperCase());

console.log(upperNames); 
/* 
? Problem 8
একটা array থেকে প্রথম negative number বের করো। 
const nums = [5, 10, -3, 8, -1];
Expected Output: -3
*/
//* Ans:
const nums = [5, 10, -3, 8, -1];
const fistNegative = nums.find((num) => num < 0);
console.log(fistNegative);
/* 
? Problem 9
Object array থেকে শুধু email গুলো বের করো। 
const users = [
  { name: "Ali", email: "ali@gmail.com" },
  { name: "Babu", email: "babu@gmail.com" }
];
Expected Output: ["ali@gmail.com", "babu@gmail.com"]
*/
//* Ans:
const users = [
  { name: "Ali", email: "ali@gmail.com" },
  { name: "Babu", email: "babu@gmail.com" },
];
const newArray = users.map((user) => user.email);
console.log(newArray);
/* 
? Problem 10
একটা number palindrome কিনা check করো। 
Example:
121 → true
123 → false
*/
// * Ans:    New method
const isPalindrome = (num) => {
  const str = num.toString();
  const reverse = str.split("").reverse().join("");
  return str === reverse;
};
console.log(isPalindrome(121));
console.log(isPalindrome(128));
console.log(isPalindrome(123));
