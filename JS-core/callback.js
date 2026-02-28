// document.getElementById("#btn").addEventListener("click", function(event){

// })
function settleLife (name, isBCS,married , patri){
if (isBCS){
married(patri);
}
}
function bolokobul (patri){
    console.log("Kobul",patri);
}
settleLife("Tomal", true, bolokobul, "nari");
bolokobul("porimoni");
   ///Build logic
  function make(x) {
  return function(y) {
    return x + y;  // 5+3
  }
}
var add5 = make(5);
console.log(add5(3)); //y

function greet(name) {
  console.log("Hello " + name);
}

function processUserInput(callback) {
  let name = "Tisha";
  callback(name);
}

processUserInput(greet);