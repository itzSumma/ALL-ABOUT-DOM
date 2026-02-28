function outerFunction () {
    function innerFunction () {
        console.log("this is the inner function")
    }
    return innerFunction;
}
const output = outerFunction ();
console.log( "in the outside",output);
 
function counter (owner){
    let count = 0;
    function increment () {
        count++;
        console.log("value  of count",owner, count)
    }
    return increment;
}0
const rjCounter=counter("RJ");
const kdCounter=counter("KD");
rjCounter();
rjCounter();
rjCounter();
kdCounter()
const count1 = counter();
console.log(count1)
count1();
count1();
count1();


function outer() {       // condition 1 — outer function
  var count = 0;         // outer variable

  function inner() {     // condition 1 — inner function
    count++;             // condition 2 — using outer variable
    console.log(count);
  }

  return inner;          // condition 3 — taken outside
}

var counter = outer();
counter(); // 1
counter(); // 2
counter(); // 3
```

---

// ## What Happens in Memory
// ```
// outer() runs
// │
// ├── count = 0 created
// │
// └── inner born
//       │
//       └── inner's bag = { count } ← captured!

// outer() dies...
//       │
//       └── but count NOT deleted
//             because inner's bag holds it

// counter()  → opens bag → count = 1
// counter()  → opens bag → count = 2
// counter()  → opens bag → count = 3
// ```

// ---

// ## Simple Check

// When you see any code — ask 3 questions:
// ```
// Q1. Is there a function inside a function?    yes/no
// Q2. Does inner use outer's variable?          yes/no
// Q3. Is inner returned or taken outside?       yes/no
// ```
// ```
// All 3 yes → Closure ✅
// Any one no → Not a real closure ❌
// One Truth

// Closure is not just nesting functions.
// It is — inner function escaping outside while holding onto outer variables.
// Escape + Remember = Closure.
