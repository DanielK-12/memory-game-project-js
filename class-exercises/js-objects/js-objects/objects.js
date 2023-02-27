// literal notation
const hotel = {
  name: "Palace",
  rooms: 40,
  booked: 30,
  spa: false,
  gym: true,
  roomTypes: ["twin", "double", "kiong suite"],
  managerName: "Phill",

  checkAvailability: function () {
    return this.rooms - this.booked;
  },
  getManagerInfo: function () {
    return this.managerName;
  }
};
console.log(hotel.managerName);

delete hotel.managerName;
console.log(hotel.managerName);
// literal notation empty object

var HotelRadika = {};

// add object properties
// hotel.radike.lakeView = true;
// hotel.radika.lakeView = false;

// constructor notation
var hotelPrespav = new Object();

hotelPrespav.name = "Spa park";
hotelPrespav.rooms = 30;
hotelPrespav.booked = 4;

hotelPrespav.checkAvailability = function () {
  return this.rooms - this.booked;
};

// function constructor

function Hotel(Metropol, rooms, booked, gym, spa, lakeView, roomType) {
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;
  this.gym = gym;
  this.spa = spa;
  this.lakeView = lakeView;
  this.roomType = roomType;

  this.checkAvailability = function () {
    return this.rooms = this.booked;
  }
}

// object instances
const hotelGranit = new Hotel("Granit", 130, 78, true, false, true, ['single', 'double']);
const hotelStruga = new Hotel("Struga", 110, 18, false, false, false, ['single', 'double']);
console.log(hotelGranit);
console.log(hotelStruga);

// exercise 1

const student = {
  name: "Daniel Kochovski",
  class: "II",
  rollnum: "12",

  printInfo: function () {
    console.log(`${this.name} ${this.class} ${this.rollnum}`)
  },
  returnInfo: function () {
    return `${this.name} ${this.class} ${this.rollnum}`
  }
};

console.log(student);

// exercise 2
delete student.class;
console.log(student);

// exercise 3
student.printInfo();
student.returnInfo();

function propertyExists(obj, property) {
  return obj[property] !== undefined ? `Postoi` : `Ne postoi`;
  // if (obj[property] !== undefined) {
  //   return `postoi`;
  // }
  // else {
  //   return `ne postoi`;
  // }
}

console.log(propertyExists(student, "surname"));
console.log(propertyExists(student, "name"));

