// Smartphone store

function Smartphoneshop(name) {
  this.name = name;
  this.products = [];
  this.shoppingCart = [];
  this.wishList = [];

  // methods

  this.addProduct = function (product) {
    this.products.push(product);
  }

  // add to cart
  this.addToCart = function (id) {
    const phone = this.products.find(x => x.id === id);
    const position = this.products.indexOf(phone);
    this.products[position].qty--;
    this.listProducts();

    if (phone) {
      this.shoppingCart.push(phone);

    }
  }

  // add to wishlsit
  this.addToWishlist = function (id) {
    const phone = this.products.find(x => x.id === id);
    if (phone) {
      this.wishList.push(phone);
    }
  }

  // list products

  this.listProducts = function () {
    const element = document.getElementById("phones-list");
    let htmlToAdd = '';
    const actionBtns = `<div class="product-actions">
    <button class="buy-btn btn">Add to Cart</button>
    <button class="wishlist-btn btn">Add to Wishlist</button>
  </div>`;
    for (let product of this.products) {
      htmlToAdd += ` <li id="${product.id}" class="product">
      <div class="product-title">${product.name}</div>
      <div class="product-img"><img src="${product.imageURL}"
          alt="phone img"></div>
      <div class="product-desc">${product.desc}</div>
      <div class="product-price">${product.price}</div>
      <div class="product-quantity">${product.qty}</div>
      ${actionBtns}
    </li>`;
    }
    element.innerHTML = htmlToAdd;
  }

  // print cart
  this.printCart = function () {
    const element = document.getElementById('shopping-cart');
    let htmlToAdd = "";
    let index = 0;
    for (let product of this.shoppingCart) {
      htmlToAdd += `<li data-index="${index}" id="product-${product.id}">${product.name}<a href="#" class="remove-shopping-item" id="${product.id}">Remove</a> </li>`;
      index++;
    }
    element.innerHTML = htmlToAdd;
  }

  // remove from cart
  this.removeFromCart = function (id) {
    const position = this.products.indexOf(this.shoppingCart[id]);
    this.products[position].qty++;
    this.shoppingCart.splice(id, 1);
    this.listProducts();


    // print wishlist
    this.printWishlist = function () {
      const element = document.getElementById('wishlist');
      let htmlToAdd = '';
      let index = 0;
      for (let product of this.wishList) {
        htmlToAdd += `<li data-index="${index}" id="${product.id}">${product.name}, ${product.price}<a href="#" class="remove-wishlist-item"
      id="${product.id}">Remove</a> </li>`;
        index++;
      }
      element.innerHTML = htmlToAdd;
    }
  }
}


function Product(name, brand, imageURL, price, quantity, description) {
  this.id = Date.now();
  this.name = name;
  this.brand = brand;
  this.imageURL = imageURL;
  this.price = price;
  this.qty = quantity;
  this.desc = description;
}

// instances 
const myStore = new Smartphoneshop("Latest Mobile Phones");


// event listeners
const addBtn = document.getElementById("add-btn");
addBtn.addEventListener('click', function (e) {
  e.preventDefault();
  const name = document.getElementById("title").value;
  const brand = document.getElementById('manufacturer').value;
  const imageURL = document.getElementById('cover').value;
  const price = document.getElementById('price').value;
  const quantity = document.getElementById('quantity').value;
  const description = document.getElementById("description").value

  myStore.addProduct(new Product(name, brand, imageURL, price, quantity, description));
  myStore.listProducts();
});

document.addEventListener('click', function (e) {
  if (e.target.classList.contains('buy-btn')) {
    const id = parseInt(e.target.closest('li').id);
    myStore.addToCart(id);
    myStore.printCart();
  } else if (e.target.classList.contains('wishlist-btn')) {
    const id = parseInt(e.target.closest('li').id);
    myStore.addToWishlist(id);
    myStore.printWishlist();
  } else if (e.target.classList.contains("remove-shopping-item")) {
    const index = parseInt(e.target.closest("li").getAttribute("data-index"));
    myStore.removeFromCart(index);
    myStore.printCart();
  } else if (e.target.classList.contains('remove-wishlist-item')) {
    myStore.removeFromwishList(index);
    myStore.printWishlist();
  }
});
