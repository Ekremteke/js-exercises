/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
let pQ = document.querySelectorAll("p");
let p = document.getElementsByTagName("p");
console.log(p);
console.log(pQ);

let div = document.getElementsByTagName("div");
console.log(div);

let jumbotron = document.getElementById("jumbotron-text");
console.log(jumbotron);

let pInPrimary = document.querySelector(".primary-content p");
console.log(pInPrimary);

// let x = pInPrimary.querySelectorAll("p");

// console.log(x);

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
let myElement = document.querySelector("#alertBtn");

console.log(myElement);

myElement.addEventListener("click", alertThanks);

function alertThanks() {
  alert("Thanks for visiting Bikes for Refugees!");
}

// myElement.style.backgroundColor = "red";

/*
Task 3
======
Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
let changeColour = document.querySelector("#bgrChangeBtn");
console.log(changeColour);
let body1 = document.querySelector("body");
console.log(body1);
changeColour.addEventListener("click", changeBacground);
function changeBacground() {
  body1.style.backgroundColor = "red";
}
/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
let addSomeTextBtn = document.querySelector("#addTextBtn");

let underBtn = document.querySelector(".buttons");

addSomeTextBtn.addEventListener("click", addTextFunction);

let para = document.createElement("p");

function addTextFunction() {
  underBtn.appendChild(para);
  para.innerText = "Read more below.";
}

/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
