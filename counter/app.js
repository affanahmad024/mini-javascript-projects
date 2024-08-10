let count = 0;

const values = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

btns.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        const styles = e.currentTarget.classList ;
        if(styles.contains("decrease")){
            count--;
        } else if (styles.contains("increase")) {
            count++;
        } else {
            count = 0;
        }
        if(count>0){
            values.style.color = "green";
        } 
        if (count<0){
            values.style.color = "red";
        }
        if (count == 0){
            values.style.color = "black";
        }
        values.textContent = count;
    })
})