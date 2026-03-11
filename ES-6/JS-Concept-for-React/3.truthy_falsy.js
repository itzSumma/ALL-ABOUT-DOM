// Falsy value -> false, 0, "", null, undefined, NaN
// Truthy value  -> falsy value gula baad diye baki sob truthy value


let arr = [1,2,3,5,6, 300]

let isThreeHundredExist = arr.find(elem => elem === 300 )
console.log(isThreeHundredExist);


if(isThreeHundredExist){
    console.log("Yes, three hundred exist");
} else{
    console.log("Sorry three hundred not found");
}


if("hello"){
    console.log("If block triggered");
} else{
    
    console.log("Else block triggered");
}