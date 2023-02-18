//ACCESS USING UNIQUE ID
let myHeader = document.getElementById("myTitle");
console.log(myHeader); //returns a single unique element (the first one it finds and ends the operation).
console.log(myHeader.innerHTML);

//ACCESS USING CLASS NAME

let paragraphs = document.getElementsByClassName("myParagraph");//Returns an array of elements
console.log(paragraphs);
console.log(paragraphs[1].innerHTML);

//ACCESS USING TAG NAME
let texts = document.getElementsByTagName("text");
console.log(texts);

// ACCES USING THE QUERY SELECTOR / ALL
console.log("Query selectonrs: ");
let paragraph = document.querySelector(".myParagraph");
console.log(paragraph);
let paragrafi = document.querySelectorAll("p");
console.log(paragrafi);

// SIBLING ELEMENTS
// sibling elements are elements that have the SAME PARENT ELEMENT
console.log("sibling elements: ");
console.log(paragraph.nextElementSibling);
console.log(paragraph.previousElementSibling);

// PARENT ELEMENT
console.log(paragraph.parentElement);

// finding child elements
let myDiv = document.getElementById("main");
let myDivChildren = myDiv.children; // selects all of the child elements
console.log(myDivChildren);
let myDivFirstChild = myDiv.firstElementChild; //access the first child element
let myDivLastChild = myDiv.lastElementChild; //access the last child element
console.log(myDivFirstChild);
console.log(myDivLastChild);

//GETTING TEXT
let mainDiv = document.querySelector(".myDiv");
console.log(mainDiv);
let textSpaces = mainDiv.textContent; // gets the text with the  spaces included
let textNoSpaces = mainDiv.innerText; // gets the text without the spaces
let textHtml = mainDiv.innerHTML; // gets the HTML RAW CODE

console.log(textSpaces);
console.log(textNoSpaces);
console.log(textHtml);

// EDITING TEXT

let pageTitle = document.getElementById("myTitle");
pageTitle.innerText = "NEW TITLE";

// pageTitle.innerText = pageTitle.innerText + "WAS ADDED";
pageTitle.innerText += " WAS ADDED"

// ADDING HTML CODE
mainDiv.innerHTML += `<p class="new">paragraph has been added through the POWER of js</p>`

//mainDiv.innerHTML = ""; // all the html code has been removed through JS