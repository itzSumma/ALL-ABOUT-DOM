/*
*Find two numbers that add up to a target.(Input: "listen", "silent")
*ANS
*/
function isAnagram(str1, str2) {
  let s1 = str1.split("").sort().join("");
  let s2 = str2.split("").sort().join("");
  return s1 === s2;
}
console.log(isAnagram("listen", "silent")); 


