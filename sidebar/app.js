const toggleBtn = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");

toggleBtn.addEventListener("click",()=>{

    // method 1
    // if(sidebar.classList.contains("show-sidebar")){
    //     sidebar.classList.remove("show-sidebar");
    // } else {
    //     sidebar.classList.add("show-sidebar");
    // }

    // method 2
    sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click",()=>{
    sidebar.classList.remove("show-sidebar");
});