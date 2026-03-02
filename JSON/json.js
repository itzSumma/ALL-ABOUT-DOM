// const person = {
//   name: 'shipon roy',
//   age: 23,
//   dish: 'cofy',
//   money: 24000,
//   price: [234, 45, 56, 78, 78],
//   isRich: false,
// };

// // Js Object With Notation
// // json.stringify --> JSON Convert
// // JSON.parse ---> Convert Objects

// const personJson = JSON.stringify(person);
// const personJsonObject = JSON.parse(personJson);

// console.log(personJson, typeof personJson);
// console.log(personJsonObject);

// // 28-3 Load Json Data using Fetch Function

// const dataLoad = () => {
//   fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(res => res.json())
//     .then(data => console.log(data));
// };

const loadPosts = () => {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  fetch(url)
    .then(res => res.json())
    .then(data =>{
// console.log(data);
displayPost(data);
    });
};
// loadPosts()


// const displayPost = posts => {
// //step-1 get the container
// const postContainer = document.getElementById("post-container");
// postContainer.innerHTML= "";
// // console.log(postContainer)
//         posts.forEach ((post)=>{
//         // console.log(post.title)
// //step-2 create HTML element
// const li = document.createElement("li");
// li.innerText= post.title;
// // console.log(li);
// //step-3 add li to the container
// postContainer.appendChild(li);

//     });
// };
// document.getElementById("btn").addEventListener("click", loadPosts)

const displayPost = (post)=>{

    //get the container and empty the container
   const postContainer = document.getElementById("post-container");
   postContainer.innerHTML="";
    post.forEach(post =>{
// console.log(post)
//create a element
const postCard = document.createElement("div");
postCard.innerHTML=`
<div>

 <div  class="post-card ">
    <h2 class="title">${post.title}</h2>      
    <p class="body">${post.body}</p>         
    </div>
  </div>
`

//add to the container
postContainer.appendChild(postCard)
    })
}
loadPosts()