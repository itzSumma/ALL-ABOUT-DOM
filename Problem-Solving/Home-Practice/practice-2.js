// loop ব্যবহার করে string টি reverse করো।
// original string
const text = "javascript";
// empty string for reversed text
let reversed = "";
// loop from last character
for (let i = text.length - 1; i >= 0; i--) {

  // add characters one by one
  reversed = reversed + text[i];

}
console.log(reversed);