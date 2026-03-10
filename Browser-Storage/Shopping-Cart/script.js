

//cart function

const handleAddProduct =()=>{
const productElement =document.getElementById("product");
const quantityElement = document.getElementById("quantity");
const product =productElement.value;
const quantity = quantityElement.value;
console.log("add product",product,quantity)

showProduct(product,quantity);

productElement.value="";
quantityElement.value="";
}

const showProduct =(product,quantity)=>{
const li = document.createElement("li");
li.innerHTML = `
${product}: ${quantity}` //set dynamically
const ul = document.getElementById( "products-container");
ul.appendChild(li)

}