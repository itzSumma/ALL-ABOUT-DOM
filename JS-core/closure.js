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