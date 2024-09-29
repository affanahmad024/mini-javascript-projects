const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click",()=>{
    const randomNumber = randomNumberGenerator() ;
    document.body.style.backgroundColor = colors[randomNumber];
    color.innerText = colors[randomNumber];
});

function randomNumberGenerator() {
    return Math.floor(Math.random() * colors.length)
}
