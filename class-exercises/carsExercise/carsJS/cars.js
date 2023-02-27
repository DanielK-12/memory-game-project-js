// exercise 4
//Model, color, year, fuel, fuelConsumption,


const car = {
  name: "mercedes-benz",
  color: "silver",
  year: 1957,
  fuel: "petrol",
  fuelConsumption: 15,

  calcFuelConsumption: function (distance) {
    return (this.fuelConsumption * distance) / 100;
  },
  returnInfo: function () {
    return `This car ${this.name} color ${this.color} is from ${this.year}`
  }
}

console.log(car.returnInfo());
console.log(`For the distance of 500km you will need  ${car.calcFuelConsumption(500)}L of ${car.fuel}.`);