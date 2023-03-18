// define car lot
function Carlot(name) {
  this.name = name;
  this.cars = [];

  // method
  // add car
  this.addCar = function (car) {
    this.cars.push(car);
  }
  // print car
  this.listCars = function () {
    const element = document.getElementById("car-list");
    let htmlToAdd = "";
    const actionBtns = `<button class="delete-btn">Delete</button>
    <button class ="calc-btn">Calculate</button>`;
    for (let car of this.cars) {
      htmlToAdd += `<li id="${car.id}" data-index="${car.id}" style="color:${car.color};">
      ${car.model}, year: ${car.year}, fuel consumption: ${car.fuelConsumption}, ${car.fuel}${actionBtns}</li>`;
    }
    element.innerHTML = htmlToAdd;
  }

  // calculate fuel consumption
  this.calculateFuelConsumption = function (id) {
    const car = this.cars.find(x => x.id === id);
    if (car) {
      return (car.fuelConsumption * car.distance) / 100;
    }

  }
}



// define a car object

function Car(model, year, color, fuel, fuelConsumption, distance) {
  this.id = Date.now();
  this.model = model;
  this.year = year;
  this.color = color;
  this.fuel = fuel;
  this.fuelConsumption = fuelConsumption;
  this.distance = distance;
}

// create / instance a carlot
const myLot = new Carlot("SEDC RENT A CAR");

const addBtn = document.querySelector("#add-btn");
// event listeners
addBtn.addEventListener('click', function (e) {
  e.preventDefault();

  const model = document.getElementById("model").value;
  const year = document.getElementById("year").value;
  const color = document.getElementById("color").value;
  const fuel = document.getElementById("fuel").value;
  const fuelConsumption = document.getElementById("fuel-consumption").value;
  const distance = document.getElementById("distance").value;


  const errorEl = document.querySelector(".error-msg");
  let errors = [];

  let verifyInputs = checkInputs(model, year, fuel, fuelConsumption);
  if (verifyInputs.length > 0) {
    // print errors
    console.log(verifyInputs);
  } else {
    // print the cars
  }
});
function checkInputs(model, year, fuel, fuelConsumption) {
  let errors = [];
  if (model === "") {
    errors.push("Enter a car model");

  } if (year === "") {
    errors.push("Please enter a year of production");
  } if (fuel === "") {
    errors.push("please enter a fuel type");
  } if (fuelConsumption === "") {
    errors.push("please enter fuel consumption");
  }
  return errors;

}

document.addEventListener('click', function (e) {
  if (e.target.classList.contains("delete-btn")) {
    // for homework delete the car from cars
  } else if (e.target.classList.contains("calc-btn")) {
    const carId = parseInt(e.target.parentElement.id);
    console.log(myLot.calculateFuelConsumption(carId));
    displayModal(myLot.calculateFuelConsumption(carId));
  }
  else if (e.target.classList.contains("close-modal")) {
    const modalWindow = document.getElementById("modal");
    modalWindow.classList.remove("active");
  }
});

function displayModal(fuelConsumption) {
  const modalWindow = document.getElementById("modal");
  modalWindow.classList.add("active");
  modalWindow.innerHTML = `<h3>Fuel consumption is: ${fuelConsumption}</h3>
  <button class="close-modal">X</button>`;
}


