// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const button = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

button.addEventListener("click", ()=>{

    // method 1
    // if(links.classList.contains("show-links")){
    //     links.classList.remove("show-links");
    // } else {
    //     links.classList.add("show-links");
    // }

    // method 2
    links.classList.toggle("show-links");
});