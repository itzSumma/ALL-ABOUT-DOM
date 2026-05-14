/*
 *You are building an ecommerce application.You have an array of product objects.
* Each product contains:name,category,price
 * Your task is to group the products based on their category. 
 */

/*
 * Input: const products = [
  *{ name: "iPhone 15", category: "Mobile", price: 1200 },
  *{ name: "Samsung S24", category: "Mobile", price: 1100 },
  *{ name: "MacBook Pro", category: "Laptop", price: 2500 },
  *{ name: "Dell XPS", category: "Laptop", price: 2000 },
 * { name: "AirPods", category: "Accessories", price: 250 },
];
*Output:{
  Mobile: [
  *  { name: "iPhone 15", category: "Mobile", price: 1200 },
   *{ name: "Samsung S24", category: "Mobile", price: 1100 }
  ],

  Laptop: [
   * { name: "MacBook Pro", category: "Laptop", price: 2500 },
    *{ name: "Dell XPS", category: "Laptop", price: 2000 }
  ],

  Accessories: [
    *{ name: "AirPods", category: "Accessories", price: 250 }
  ]
}
 */
 //*ANS:

 const products = [
  { name: "iPhone 15", category: "Mobile", price: 1200 },
  { name: "Samsung S24", category: "Mobile", price: 1100 },
  { name: "MacBook Pro", category: "Laptop", price: 2500 },
  { name: "Dell XPS", category: "Laptop", price: 2000 },
  { name: "AirPods", category: "Accessories", price: 250 },
];

const groupedProducts = products.reduce((accumulator, product) => {
  const category = product.category;
  if (!accumulator[category]) {
     accumulator[category] = [];
  }
  accumulator[category].push(product);

  return accumulator;
}, {}); 

// console.log(groupedProducts);


/*
 * You are given an array of student objects. Each student has a name and a score. Your task is to group these students into three grades based on their scores:
*Grade A: Score 90 or above.
*Grade B: Score 80 to 89.
*Grade C: Score below 80.
 */
Input :const students = [
  { name: "Rahim", score: 95 },
  { name: "Karim", score: 82 },
  { name: "Sara", score: 75 },
  { name: "John", score: 91 },
  { name: "Tina", score: 88 }
];
//**ANS*/
const students = [
  { name: "Rahim", score: 95 },
  { name: "Karim", score: 82 },
  { name: "Sara", score: 75 },
  { name: "John", score: 91 },
  { name: "Tina", score: 88 }
];

const gradedStudents = students.reduce((acc, student) => {
  let grade;
  if (student.score >= 90) {
    grade = "GradeA";
  } else if (student.score >= 80) {
    grade = "GradeB";
  } else {
    grade = "GradeC";
  }
  if (!acc[grade]) {
    acc[grade] = []; 
  }
  acc[grade].push(student);
  return acc;
}, {});

// console.log(gradedStudents);