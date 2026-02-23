const sections = document.getElementsByTagName("section");
// const sections = document.querySelectorAll("section")
console.log(sections);
for (const section of sections){
    console.log(section);
    section.style.backgroundColor = "bisque";
    section.style.border = "3px solid green";
    section.style.padding = "50px"
    section.style.marginBottom = "50px"
    section.style.borderRadius = "10px"
}

//dynamic class
for(const section of sections){
    // section.classList.add("section-card")
}