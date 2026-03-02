
// fetch("https://jsonplaceholder.typicode.com/users/1")
//   .then(res => res.json())
//   .then(data => {
//     console.log(data.name)
//     console.log(data.email)
//     console.log(data.phone)
//   })
  
//   //Async/await
//   async function  getUser() {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users/1")
//     const data = await res.json()
//     console.log(data.name)
//     console.log(data.email)
//     console.log(data.phone)
//   }
//   getUser()
   

//   // my practice
//    async function getUser2() {
//     const rest = await fetch("https://jsonplaceholder.typicode.com/users")
//     const data2 = await rest.json()
//     console.log(data2.length) // 
//     data2.forEach(people => {
//   console.log(people.name)
//   console.log(people.email)
// })
//      console.log(data2[0].name)
//      console.log(data2[1].name)
//      console.log(data2[3].name)
    
//    }getUser2()

//Post
// async function createUser() {
//   const rest = await fetch("https://jsonplaceholder.typicode.com/users", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//       name: "Arif",
//       email: "arif@gmail.com"
//     })
//   })

//   const data = await rest.json()
//   console.log(data)
// }

// createUser() 
// My Practice
// async function createUser() {
//     const rest = await fetch("https://jsonplaceholder.typicode.com/users",{
//         method : "POST",
//         headers:{
//             "Content-Type":"application/json"
//         },
//         body:JSON.stringify({
//             name:"Tisha",
//             email:"tisha2@gmail.com"
//         })
//     })
//     const data = await rest.json()
//     console.log(data)
// } 
// createUser()

// async function createUser2() {
//     const rest = await fetch("https://jsonplaceholder.typicode.com/users", {
//         method:"POST",
//         headers:{
//             "content-type": "application/json"
//         },body:JSON.stringify({
//             name: "Tisha",
//             email:"tisha@gmail.com",
//             phone:"01748569875",
//             website: "Tisha-elly.com"
//         })
//     })
//       const data = await rest.json()
//     console.log(data)
// }
// createUser2() 
 //Task-2
//  async function getPosts() {
//  const rest = await fetch("https://jsonplaceholder.typicode.com/posts")
//   const data = await rest.json()
//   console.log(data.length)
//   data.forEach(post =>{
//     console.log(post.title)
//   })
// }
// getPosts()
   //TASK-3
   async function getPosts() {
    const rest = await fetch("https://jsonplaceholder.typicode.com/users/5")
    const data = await rest.json()
    console.log(data.name)
    console.log(data.email)
  console.log(data.phone)
   }
   getPosts()