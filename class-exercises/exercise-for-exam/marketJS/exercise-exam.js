//Task 1
// Da se ispise programa koja od korisnikot doznava za koj tip na ovosje e zainteresiran
// i mu ja pecati(console log) cenata na toa ovosje
//cenovnik: banana, jabolko, portokal, ananas
// primer print: ovoshjeto banana e 58 den po kg.

let userInput = prompt("Ve molime vnesete tip na ovoshje: ");

if (userInput === "jabolko") {
  let userInputKol = prompt("vnesete kolicina vo KG");
  console.log(`Ovosjeto ${userInput} cini 50 denari po KG ili ${userInputKol * 50}`);
} else if (userInput === "banana") {
  let userInputKol = prompt("vnesete kolicina vo KG");
  console.log(`Ovosjeto ${userInput} cini 60 denari po KG ili ${userInputKol * 60} denari za ${userInputKol}KG`);
} else if (userInput === "portokal") {
  let userInputKol = prompt("vnesete kolicina vo KG");
  console.log(`Ovosjeto ${userInput} cini 30 denari po KG ili ${userInputKol * 30} denari za ${userInputKol}KG`);
} else if (userInput === "ananas") {
  let userInputKol = prompt("vnesete kolicina vo KG");
  console.log(`Ovosjeto ${userInput} cini 90 denari po KG ili ${userInputKol * 90}denari za ${userInputKol}KG`)
} else {
  console.log(`Baraniot proizvod ne e dostapen vo nashiot market`)
}

// korisnikot da vnese i kilogrami pa programata da ispecati (console.log) kolku bi go cinela taa kolicina na ovoshje




