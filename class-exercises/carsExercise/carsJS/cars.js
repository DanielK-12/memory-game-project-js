// exercise 4
//Model, color, year, fuel, fuelConsumption,


const car = {
  model: "mercedes-benz",
  color: "silver",
  year: 1957,
  fuel: "petrol",
  fuelConsumption: 15,

  calcFuelConsumption: function (distance) {
    return (this.fuelConsumption * distance) / 100;
  },
  returnInfo: function () {
    return `This car ${this.model} color ${this.color} is from ${this.year}`
  }
}
let input = prompt()
console.log(car.returnInfo());
console.log(`For the distance of 500km you will need  ${car.calcFuelConsumption(500)}L of ${car.fuel}.`);

// function constructor
function Bike(model, color, year, fuel, fuelConsumption) {
  this.model = model;
  this.color = color;
  this.year = year;
  this.fuel = fuel;
  this.fuelConsumption = fuelConsumption;

  // method for fuel consumption
  this.calcFuelConsumption = function (distance) {
    return (this.fuelConsumption * distance) / 10;
  }
  // method to prin the bike info
  this.printInfo = function () {
    return `The bike ${this.model} is from ${this.year} and has a color ${this.color}`;
  }
};

let bmw = new Bike('RnineT', 'silver', 2019, 'petrol', 8);
let suzuki = new Bike('GSR750', 'black', 2016, 'petrol', 6);

console.log(bmw);
console.log(suzuki);
console.log(bmw.printInfo());
console.log(suzuki.printInfo());
