const loadTodo =()=>{
    const url = "https://jsonplaceholder.typicode.com/todos?_limit=80";
   fetch(url) 
   .then(res => res.json())
   .then(data => displayTodo(data))
}
const displayTodo =(todos)=>{
    //get the container
    const todoContainer = document.getElementById("todo-container")
    todoContainer.innerHTML = "";
    todos.forEach(todo=>{
console.log(todo);
const todoCard = document.createElement("div");
todoCard.innerHTML =`
<div class="todo-card">
<p>
  ${todo.completed 
    ? `<i class="fa-solid fa-square-check"></i> Complete` 
    : `<i class="fa-regular fa-square-check"></i> Not Complete`
  }
</p>
<h4>${todo.title}</h4>
</div>
`;
todoContainer.append(todoCard);
    })
}
loadTodo()