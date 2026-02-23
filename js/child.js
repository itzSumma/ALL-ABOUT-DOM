const newChild = document.createElement("li");
newChild.innerText = "now you can creat a new element";

// find the parent 
const playerList = document.getElementById("player-list")

//append child
playerList.appendChild(newChild)