/* objects */

let firstName = "Daniel";
let lastName = "Kochovski";
let email = "daniel.kochovski@gmail.com"
birthDate = 1993;
let phoneNumber = "+38978814534"

let student = {
    firstName: "Daniel",
    lastName: "Kochovski",
    email: "daniel.kochovski@gmail.com",
    birthDate: 1993,
    phonenumber: "+38978814534",
    activeStudent: true
};

let student2 = {
    firstName: "Walter",
    lastName: "White",
    email: "walter.white@gmail.com",
    birthDate: 1975,
    phonenumber: "+38975340893",
    activeStudent: false
};

console.log(student.firstName + " " + student.lastName);
console.log(student2.firstName + " " + student2.lastName);

let vozilo = {
    brand: "BMW",
    year: 2006,
    color: "Red",
    fuelType: "Diesel",
    numberOfDoors: 5
}

let patient = {
    activeInsurance: true,
    dateOfBirth: 1997,
    hasAllergires: false,
    name: "Daniel Kochovski"
}

let a = 15;
let b = "Hello;"

console.log(a < b);
console.log(a > b);
console.log(a == b);

/* da se proveri dali studentot polozil dokolku ima osvoeno barem 60 poeni */

let osvoeniPoeni = 61;
let requiredPoints = 60;

console.log("The student has passed the subject?");
console.log(osvoeniPoeni >= requiredPoints);

/* Today is 6/2/2023 and we're learning Javascript. */

let day = 15;
let month = 2;
let year = 2023;

let className = "JavaScript"

/* using + concatenation */

console.log("Today is " + day + "/" + month + "/" + year + " " + className);


/* the other way is - BACKTICKS ` */

let sentence = ` Today is ${day}/${month}/${year} and we're learning ${className} `;
console.log(typeof sentence);
console.log(sentence);

/* class exercise
calculate the area of a rectangle and print(console) it

    example output:
    Area of the rectangle is 5 m2.
    
    tip: print it with both concatenation methods.
*/

let z = prompt();
let x = prompt();

let areaRectangle = (z * x);
console.log("Area of the rectangle is: " + areaRectangle);
console.log(`Area of the rectangle is ${areaRectangle}`)
