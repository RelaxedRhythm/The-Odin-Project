//add features toggel read
//search 
//edit book info
//from valiation
//dark mode ==>themes
//add cover image
//recommendation



let miniLib = []; // array to store 
// let bookWrapper = document.querySelector(".book-wrapper");
const overlay = document.querySelector(".overlay");
//constructor
function books(title, author, pages, isRead) {
    if (!new.target) {
        throw Error("you must use the new operator to call the constructor");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
};

//to add books dynamically
let container = document.querySelector(".container");
function addBook(title, author, pages, readStatus,index) {
    let card = document.createElement("div");
    card.className = "card";
    card.innerHTML= `<h2>${title}</h2>
            <p>Author:${author}</p>
            <p>${pages} pages</p>
            <p class="read-status">Read-Status: ${readStatus === "true" ? "All Read" : "Continue Reading"}</p>
             <button class="toggle-read">Read Status</button>
            <button class="delete-btn">Delete</button>
        </div>`

    // Toggle read status
    card.querySelector(".toggle-read").addEventListener("click", () => {
        miniLib[index].isRead = miniLib[index].isRead === "true" ? "false" : "true";
        updateStorage();
        renderBooks();
    });

    //delete btn
    card.querySelector(".delete-btn").addEventListener("click", () => {
        miniLib.splice(index,1);
        updateStorage();
        renderBooks();
    });

    container.appendChild(card);

};

let form = document.querySelector(".add-form")

//add btn
document.querySelector(".add-btn").addEventListener("click", () => {
    
    const isVisible = form.style.display === "block";
    form.style.display = isVisible ? "none" : "block";
    overlay.style.display = isVisible ? "none" : "block";
});

document.querySelector(".close-btn").addEventListener("click",()=>{
    
    form.style.display="none";
    overlay.style.display="none";
    
})

//form data saving
form.addEventListener("submit", (e) => {
    e.preventDefault(); //to prevent auto reload
    let name = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let isRead = document.querySelector("#isRead").value;

    //functions
    let book = new books(name, author, pages, isRead);
    miniLib.push(book);
    updateStorage();
    renderBooks();

    //reseting form
    form.reset();
    const isVisible = form.style.display === "block";
    form.style.display = isVisible ? "none" : "block";
    overlay.style.display = isVisible ? "none" : "block";
})

function updateStorage(){
    localStorage.setItem("library",JSON.stringify(miniLib));
};

function renderBooks(){
    container.innerHTML="";
    miniLib.forEach((book,index) => {
        addBook(book.title, book.author, book.pages, book.isRead, index);

    });
};

//load from storage
window.onload= function () {
    let data =localStorage.getItem("library");
    if(data){
        miniLib=JSON.parse(data);
        renderBooks();
    }
};