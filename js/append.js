console.log("file connected")
const mainContent = document.getElementById("main-content");
const placeSection = document.createElement("section");

const h1 = document.createElement("h1");
h1.innerText = "Places I want to visit";
placeSection.appendChild(h1);

const ul = document.createElement("ul");

const li1 = document.createElement("li"); 
li1.innerText = "Sundarbon";
ul.appendChild(li1);
const li2 = document.createElement("li");
li2.innerText = " Shajek-Vally";
ul.appendChild(li2);
placeSection.appendChild(ul);

mainContent.appendChild(placeSection);


//easy section create
const bookSection = document.createElement("section");
bookSection.innerHTML = `
<h1> books I read </h1>
<ul>
<li>Physics </Li>
<li>Chemistry </Li>
<li>Mathematics </Li>
</ul>
`
mainContent.appendChild(bookSection)
