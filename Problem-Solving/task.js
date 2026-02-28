/* 
? Qs: 1
একটি function লেখো।
এর ভিতরে var, let, const ব্যবহার করো।
if block এর ভিতরে console.log করে দেখাও কোনটা কাজ করে।
*/
// // Ans:
function variables() {

  var a = "I am var";
  let b = "I am let";
  const c = "I am const";

  if (!false) {

    var x = "This is var";
    let y = "This is let";
    const z = "This is const";

    console.log("Inside the block:", a, b, c, x, y, z);
  }

  console.log("Outside the block:", a, b, c, x); }
  variables()

/* 
? Qs: 2
calculateTotal নামে একটি function বানাও।
price নিবে।
tax না দিলে 5 ধরবে।
tax দিলে সেই tax ব্যবহার করবে।
*/
// Ans:
function calculateTotal(price, tax = 5) {
  // if wont give tax (manually)
  // if (tax === undefined) {
  //   tax = 5;
  // }
  let total = price + (price * tax) / 100;
  return total;
}


console.log(calculateTotal(1000));     
console.log(calculateTotal(1000, 20)); 
/* 
? Qs: 3
নিচের object থেকে একটি sentence বানাও (template string ব্যবহার করে)।

const student = {
  name: "Shipon",
  age: 22,
  skill: "JavaScript"
}
*/
// Ans:
const student = {
  name: "Shipon",
  age: 22,
  skill: "JavaScript"
}
const sentence = `He is ${student.name}. He is ${student.age} years old and He is an expert in ${student.skill}.`;

console.log(sentence);
/* 
? Qs: 4
একটি arrow function লেখো।
৩টি সংখ্যা নিবে।
সবচেয়ে বড় সংখ্যা return করবে।
Math.max ব্যবহার করা যাবে না।
*/
// Ans:
const largestNumber = (x, y, z) => {
   let max = x;
   if (y > max) {
    max = y;
  }
  if (z > max) {
    max = z;
  }
  return max;
};

console.log(largestNumber(10, 25, 15)); 
console.log(largestNumber(50, 20, 30)); 
console.log(largestNumber(5, 5, 5));   
console.log(largestNumber(10, 50, 60)); 

/* 
? Qs: 5
const numbers = [10, 25, 60, 5, 80];

1. সবচেয়ে বড় সংখ্যা বের করো (spread ব্যবহার করে)।
2. নতুন array বানাও এবং 100 যোগ করো।
*/
// Ans:
const numbers = [10, 25, 60, 5, 80];

let maxNumber = numbers[0];
const newArray = [];

for (let i = 0; i < numbers.length; i++) {
  // Update largest number
  if (numbers[i] > maxNumber) {
    maxNumber = numbers[i];
  }

  // Add 100 and push to new array
  newArray.push(numbers[i] + 100);
}

console.log("Largest number is:", maxNumber);       
console.log(" Add 100 in New array :", newArray); 

/* 
? Qs: 6
নিচের object থেকে name, email এবং city আলাদা করে বের করো (destructuring ব্যবহার করে)।

const user = {
  id: 101,
  name: "Rahim",
  email: "rahim@gmail.com",
  address: {
    city: "Dhaka",
    country: "Bangladesh"
  }
}
*/
// Ans:
const user = {
  id: 101,
  name: "Rahim",
  email: "rahim@gmail.com",
  address: {
    city: "Dhaka",
    country: "Bangladesh"
  }
};

// Destructuring
// const { name, email, address: { city } } = user; (short-cut)
const { name, email, address } = user;  
const { city } = address;             
console.log(name);  
console.log(email); 
console.log(city);  
/* 
? Qs: 7
একটি product object বানাও।
1. keys বের করো।
2. values বের করো।
3. একটি property delete করো।
*/
// Ans:
const product = {
  id: 201,
  name: "Laptop",
  price: 55000
};

// 1. keys 
console.log(Object.keys(product));

// 2. values 
console.log(Object.values(product)); 

// 3.delete a property
delete product.price;
console.log(product); 
/* 
? Qs: 8
একটি nested object বানাও।
optional chaining দিয়ে একটি property access করো।
*/
// Ans:
// const user = {
//   name: "Rahim",
//   address: {
//     city: "Dhaka",
//     country: "Bangladesh"
//   }
// };

// // Optional chaining 
// console.log(user.address?.city);     
// console.log(user.address?.country);   
// console.log(user.address?.division);  //undefined 
/* 
? Qs: 9
const company = {
  name: "Tech Corp",
  employees: [
    { name: "Rahim", salary: 20000 },
    { name: "Karim", salary: 30000 },
    { name: "Jamal", salary: 25000 }
  ]
}

1. সব নাম print করো।
2. total salary বের করো।
*/
// Ans:
const company = {
  name: "Tech Corp",
  employees: [
    { name: "Rahim", salary: 20000 },
    { name: "Karim", salary: 30000 },
    { name: "Jamal", salary: 25000 }
  ]
}

// 1. print names
for (let emp of company.employees) {
  console.log(emp.name);
}

// 1. Total Salary
let total = 0;
for (let emp of company.employees) {
  total = total + emp.salary;
}

console.log("Total Salary:", total); 

/* 
? Qs: 10
Object.seal() এবং Object.freeze() এর পার্থক্য লিখো।
ছোট example দাও।
*/
// Ans:
//difference
// seal() → locks the object structure (no add/delete), but existing property values can be changed.

// freeze() → completely locks the object (no add/delete, no value change).


const person = { name: "Rahim", age: 25 };
Object.seal(person);

person.age = 26;      
person.name = "Karim"; 
person.gender = "Male";    
delete person.name;      
console.log(person);
 //freeze
 const person2 = { name: "Rahim", age: 25 };
Object.freeze(person2);

person2.age = 20;      
person2.gender = "Male";   
delete person2.name;  
console.log(person2);