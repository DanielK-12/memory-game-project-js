// Smartphone store

function Smartphoneshop(name) {
  this.name = name;
  this.products = [];
  this.shoppingCart = [];
  this.wishList = [];

  // methods
}

function Product(name, brand, imageURL, price, quantity, description) {
  this.id = Date.now();
  this.name = name;
  this.imageURL = imageURL;
  this.price = price;
  this.qty = quantity;
  this.desc = description;
}

// instances 
const myStore = new Smartphoneshop("Latest Mobile Phones");

