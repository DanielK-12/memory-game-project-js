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
// constructor notation
var hotelPrespav = new Object();

hotelPrespav.name = "Spa park";
hotelPrespav.rooms = 30;
hotelPrespav.booked = 4;

hotelPrespav.checkAvailability = function () {
  return this.rooms - this.booked;
};
