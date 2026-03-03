/* =========================================
        🚀 DAY 6 — LOOP ONLY (INTERVIEW MODE)
        (No map/filter/reduce/sort/Set)
========================================= */

/* 
? Problem 1
একটা array আছে। manually largest number বের করো।

const numbers = [12, 45, 2, 89, 32];
Expected Output: 89
*/
//* Ans:
// const numbers = [12, 45, 2, 89, 32];
// let largest = numbers[0];
// for (let num of numbers){
//   if (num>largest){
//     largest = num;
//   }
// }
// console.log(largest)
/* 
? Problem 2
একটা string আছে। manually character frequency count করো।

const str = "programming";
Expected Output:
{
  p:1,
  r:2,
  o:1,
  g:2,
  a:1,
  m:2,
  i:1,
  n:1
}
*/
//* Ans:
// const str = "programming";
// let frequency={};
// for(let i =0; i<str.length; i++){
//   let letter = str[i]; //current value
// if(frequency[letter] !== undefined){
//   frequency[letter]= +1;
// }
// else{
//   frequency[letter]=1
// }
// }
// console.log(frequency);
/* 
? Problem 3
একটা array আছে। duplicate remove করো (Set ছাড়া)।

const numbers = [1, 2, 2, 3, 4, 4, 5, 1];
Expected Output: [1, 2, 3, 4, 5]
*/
//* Ans:
// const numbers = [1, 2, 2, 3, 4, 4, 5, 1];

// let filterArray = [];
// for(let i=0; i<numbers.length;i++){
//   if(!filterArray.includes(numbers[i])){
// filterArray.push(numbers[i]);
//   }
// }
// console.log(filterArray)
/* 
? Problem 4
একটা array আছে। manually second largest number বের করো।

const numbers = [10, 5, 8, 20, 15];
Expected Output: 15
*/
//* Ans:
// const numbers = [10, 5, 8, 20, 15];
// let largest = -Infinity;
// let secondLargest = -Infinity;
// for(let num of numbers){
//   if(num>largest){
//     secondLargest=largest;
//     largest=num;
//   } else if (num>secondLargest && num<largest){
//     secondLargest = num
//   }

// }
// console.log(secondLargest)
/* 
? Problem 5
একটা array আছে। palindrome number গুলো বের করো।

const numbers = [121, 345, 444, 98, 101];
Expected Output: [121, 444, 101]
*/
//* Ans:
// const numbers = [121, 345, 444, 98, 101];
// let palindrome = [];
// for (let num of numbers){
//   let str = num.toString();
//   let reversed = str.split("").reverse().join("");
//   if(str===reversed){
//     palindrome.push(num);
  
//   }
// }
// console.log(palindrome)
/* 
? Problem 6
Nested object থেকে সব value print করো (recursion ছাড়া)।

const user = {
  name: "Rahim",
  address: {
    city: "Dhaka",
    country: "Bangladesh"
  },
  age: 25
};

Expected Output:
Rahim
Dhaka
Bangladesh
25
*/
//* Ans:
const user = {
  name: "Rahim",
  address: {
    city: "Dhaka",
    country: "Bangladesh"
  },
  age: 25
};
const values = [];
for (let key in user) {
  let value = user[key];
  if (typeof value === "object") {
    // nested object value
    for (let innerKey in value) {
      values.push(value[innerKey]);
    }
  } else {
    // normal value
    values.push(value);
  }
}

console.log(values);
/* 
? Problem 7
একটা array আছে। manually reverse করো (reverse() ছাড়া)।

const numbers = [1, 2, 3, 4, 5];
Expected Output: [5, 4, 3, 2, 1]
*/
//* Ans:
// const numbers = [1, 2, 3, 4, 5];
// let reversed = [];

// for (let num of numbers) {
//   reversed.unshift(num); 
// }

// console.log(reversed);
/* 
? Problem 8
একটা string আছে। longest word বের করো।

const sentence = "I love learning JavaScript deeply";
Expected Output: "JavaScript"
*/
//* Ans:
const sentence = "I love learning JavaScript deeply";

let words = sentence.split(" "); 
let longest = words[0];         
for (let word of words) {
  if (word.length > longest.length) {
    longest = word;             
  }
}

console.log(longest);
/* 
? Problem 9
একটা array আছে। manually ascending order এ sort করো (bubble sort বা যেকোনো logic)।

const numbers = [5, 2, 9, 1, 7];
Expected Output: [1, 2, 5, 7, 9]
*/
//* Ans:
const numbers = [5, 2, 9, 1, 7];

for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers.length; j++) {
    if (numbers[i] < numbers[j]) {
      // swap numbers
      let temp = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = temp;
    }
  }
}

console.log(numbers);
/* 
? Problem 10
একটা object array আছে। mark অনুযায়ী manually descending sort করো (sort() ছাড়া)।

const students = [
  { name: "Ali", mark: 45 },
  { name: "Babu", mark: 75 },
  { name: "Chotu", mark: 85 }
];

Expected Output:
[
  { name: "Chotu", mark: 85 },
  { name: "Babu", mark: 75 },
  { name: "Ali", mark: 45 }
]
*/
//* Ans:
const students = [
  { name: "Ali", mark: 45 },
  { name: "Babu", mark: 75 },
  { name: "Chotu", mark: 85 }
];
for (let i = 0; i < students.length; i++) {
  for (let j = 0; j < students.length - 1 - i; j++) {
       if (students[j].mark < students[j + 1].mark) {
      // Swap objects
      let temp = students[j];
      students[j] = students[j + 1];
      students[j + 1] = temp;
    }
  }
}

console.log(students);