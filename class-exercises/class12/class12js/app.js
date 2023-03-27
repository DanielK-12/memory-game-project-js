// JSON
const classRoomAsJson = `{
  "trainer": "Damjan Dugalic",
  "students": [
    "Bojan",
    "Viktor",
    "Bisera",
    "Lora"
  ],
  "academy": "SEDC"
}`;

console.log(classRoomAsJson);

// json to object (literal)
// const classRoomAsLiteral = JSON.parse(classRoomAsJson);
// console.log(classRoomAsLiteral);

const classRoomAsLiteral = {
  trainer: "Damjan Dugalic",
  students: [
    "Bojan",
    "Viktor",
    "Bisera",
    "Lora"
  ],
  academy: "SEDC"
};

console.log(classRoomAsLiteral);
let classRoomAsJson2 = JSON.stringify(classRoomAsLiteral)
console.log(classRoomAsJson2);

// FETCH API
fetch("students.json").then(response => response.json()).then(data => console.log(data));

// CATS API
document.querySelector("#cat-facts-btn").addEventListener('click', function () {
  fetch("https://cat-fact.herokuapp.com/facts").then(response => response.json()).then(data => printCatFacts(data));
});

function printCatFacts(catFacts) {
  const element = document.querySelector("#cat-facts-list");
  let htmlToAdd = '';
  for (let fact of catFacts) {
    htmlToAdd += `<li>${fact.text}</li>`
  }
  element.innerHTML = htmlToAdd;
}

// DOGS API TASK
// document.querySelector("#dog-random-btn").addEventListener('click', function () {
//   fetch("https://dog.ceo/api/breeds/image/random").then(response => response.json()).then(data => printDogFacts(data));
// });

// function printDogFacts(dogFacts) {
//   console.log(dogFacts.message);
//   const element = document.querySelector("#dog-result");
//   element.innerHTML = `<img src="${dogFacts.message}" alt="image of a random dog" width="200"></img>`;
// }

document.querySelector("#dog-random-btn").addEventListener('click', getRandomDog);

function getRandomDog() {
  fetch("https://dog.ceo/api/breeds/image/random").then(response => response.json()).then(data => printDogImage(data.message));
}

function printDogImage(thumbUrl) {
  const element = document.querySelector("#dog-result");
  element.innerHTML = `<img src="${thumbUrl}" alt="image of a random dog" width="200"></img>`
}

// create events from click

document.querySelector("#about-us").addEventListener('click', function (e) {
  e.preventDefault();
  fetch("pagecontent.json").then(response => response.json()).then(data => printContent(data));
});

function printContent(data) {
  console.log(data);
  const element = document.querySelector("#page-content");
  element.innerHTML = "";
  element.innerHTML = `<h3>${data.page}</h3>
  <img src="${data.imageUrl}" alt="${data.page}">
  <p>${data.content}</p>
  <p>${data.content2}</p>
  <span>${data.year}</span>
  `;
}
// let portfolioBtn = document.querySelector("#portfolio");
// portfolioBtn.addEventListener('click', function (e) {
//   e.preventDefault();
//   fetch('portfolio.json').then(response => response.json()).then(files => printPortfolio(files));
// });
document.querySelector("#portfolio").addEventListener('click', function (e) {
  e.preventDefault();
  fetch('portfolio.json').then(response => response.json()).then(files => printPortfolio(files));
});

function printPortfolio(files) {
  console.log(files);
  const element = document.querySelector('#portfolio-page');
  element.innerHTML = "";
  element.innerHTML = `<h3>${files.page}</h3>
  <img src="${files.imgUrl}" alt="${files.page}"><br>
  <p>${files.portfolioDesc}</p><br>
  <p>Born: ${files.birthDate}</p><br>
  <iframe width="469" height="833" src="${files.socialMedia}" title="r nine t scrambler" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
}