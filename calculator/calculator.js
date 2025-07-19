let calc=JSON.parse(localStorage.getItem('calc')) || ""; 

displayCalc();
function updateCalc(number){   
    calc+=number;
    console.log(calc);

    displayCalc();

    localStorage.setItem('calc',JSON.stringify(calc));
}


function displayCalc(){
document.querySelector('.calculations').innerHTML=calc;
}