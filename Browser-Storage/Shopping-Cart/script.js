

//cart function

const handleAddProduct =()=>{
const productElement =document.getElementById("product");
const quantityElement = document.getElementById("quantity");
const product =productElement.value;
const quantity = quantityElement.value;
// console.log("add product",product,quantity)

showProduct(product,quantity);

addPoductToCart(product,quantity)

productElement.value="";
quantityElement.value="";
}

//empty cart
const getCart = ()=>{
    const cart = {};
    return cart;
}
const addPoductToCart =(product,quantity)=>{
    const cart = getCart();
    cart[product] = quantity;
    console.log("cart", cart)
}

const showProduct =(product,quantity)=>{
const li = document.createElement("li");
li.innerHTML = `
${product}: ${quantity}` //set dynamically
const ul = document.getElementById( "products-container");
ul.appendChild(li)

}

/**
 * 1.To save object/array in the LS 
 * 2.Convert the object to JSON  string by using JSON.stringify
 * 3.localStorage.setItem()
 */