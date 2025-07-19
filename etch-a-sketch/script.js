let container=document.querySelector(".container");
console.log(container);
 document.querySelector("body").innerHTML+=`<button class="grid">Get Grid</button>
    <button class="reset">reset</button>`;
// var n=64;
function getGrid(n){
    for(let i=1;i<=(n*n);i++){
        let html=`<div class="grid-cell"></div>`
        document.querySelector(".container").innerHTML+=html;
        // container.innerHtml+=html;
    }
    // document.querySelector(".container").innerHtml+=html;
}
function reset(){
    let html=``;
    container.innerHTML+=html;
    let n=parseInt(prompt("Enter the number of rows in the grid"));
    getGrid(n)
}
document.querySelector(".grid").addEventListener("click",()=>getGrid(16))
document.querySelector(".reset").addEventListener("click",reset)
// getGrid(64);
// getGrid(64)