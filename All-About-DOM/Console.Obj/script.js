console.log(console);
console.error("This is an error");
console.assert(5 > 65);
console.assert(500 > 65);
console.assert;
console.clear;
obj = { a: 1, b: 2, c: 3 };
console.table(obj);
console.warn("Hey, its dangerous");

// INFO
console.warn("WARNING");
console.error("error is pending");
console.assert("err" != false);
console.assert("err" == false);
// console.table(console);
console.time("12pm");
console.timeEnd("12pm");
console.time("sub");
console.timeEnd("sub");
//Time
//forLop
console.time("forLop");
for (let i = 0; i < 5; i++) {
  console.log(233);
}
console.timeEnd("forLop");
// INTERVIEW Question { compare time of forLop & whileLoop}

//whileLOp
console.time("whileLop");
let i = 0;
while (i < 5) {
  console.log(233);
  i++;
}
console.timeEnd("whileLop");
