let container=document.querySelector(".container");
function getRandomColor(){
    var red=Math.random()*255;
    var green=Math.random()*255;
    var blue=Math.random()*255;
    const color=`rgb(${red},${green},${blue})`
    return color;
}

function getGrid(n){
    container.innerHTML="";
    const cubeSize=Math.floor(Math.min(container.clientWidth, container.clientHeight) / n);
    for(let i=1;i<=(n*n);i++){
        const cube = document.createElement('div');
        cube.className = 'grid-cell';
        cube.style.width = `${cubeSize}px`;
        cube.style.height = `${cubeSize}px`;
        cube.addEventListener("mouseover", () => {
    cube.style.backgroundColor = getRandomColor();
  });
        container.appendChild(cube);
    }
}
function reset(){
    let n=parseInt(prompt("Enter the number of rows in the grid"));
    if(n>0 && n<100){
        getGrid(n)
    }
    else{
        alert("Enter a valid number")
    }
}
getGrid(16)
document.querySelector(".grid").addEventListener("click",()=>getGrid(16))
document.querySelector(".reset").addEventListener("click",reset);