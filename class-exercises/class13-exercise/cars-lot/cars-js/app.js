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
    element.innerHTML += htmlToAdd;
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

  myLot.addCar(new Car(model, year, color, fuel, fuelConsumption, distance));
  myLot.listCars();
});

