// books store
function Bookstore(name) {
  this.name = name;
  this.products = [];
  this.shoppingCart = [];
  this.wishList = [];

  // methods

  this.addProduct = function (product) {
    this.products.push(product);
    console.log(product);
  }

  // add to cart
  this.addToCart = function (id) {
    const book = this.products.find(x => x.id === id);
    const position = this.products.indexOf(book);
    this.products[position].qty--;
    this.listProducts();

    console.log(book);
    if (book) {
      this.shoppingCart.push(book);
    }
  }


  // add to wishlist
  this.addToWishlist = function (id) {
    const book = this.products.find(x => x.id === id);

    if (book) {
      this.wishList.push(book);
    }

  }

  // list products
  this.listProducts = function () {
    const element = document.getElementById("books-list");
    let htmlToAdd = '';
    // `<div class="product-actions">
    // <button class="buy-btn btn">Add to cart</button>
    // <button class="wishlist-btn btn">Add to Wishlist<button>
    // </div>`;
    for (let product of this.products) {
      htmlToAdd += `<li id="${product.id}" class="card">
      <div class="card-title">${product.title}</div>
      <div class="card-img"><img src="${product.thumbnail}" alt="book img"></div>
      <div class="card-description">${product.desc}</div>
      <div class="card-price">${product.price}</div>
      <div class="card-quantity">${product.qty}</div>
      <button class="buy-btn btn buy"> buy </button>
      <button class="wishlist-btn btn"> add to wishlist </button>
      </li>`;
    }
    element.innerHTML = htmlToAdd;
  }

  // print cart
  this.printCart = function () {
    const element = document.getElementById("shopping-cart");
    let htmlToAdd = "";
    let index = 0;
    for (let product of this.shoppingCart) {
      console.log(this.shoppingCart);
      htmlToAdd += `<li data-index="${index}" id="${product.id}">${product.title}
      <button class="remove-shopping-item" id="${product.id}">Remove</button></li>`;
      index++;
    }
    element.innerHTML = htmlToAdd;
    //   if (Product.qty === 0) {
    //     const buyBtn = document.querySelector(".buy-btn");
    //     buyBtn.disabled = true;
    //     const wishBtn = document.querySelector(".wishlist-btn");
    //     wishBtn.disabled = true;
    //   }
    // }

    //remove cart 
    this.removeFromCart = function (id) {
      const position = this.products.indexOf(this.shoppingCart[id]);
      this.products[position].qty++;
      this.shoppingCart.splice(id, 1);
      this.listProducts();
    }

    // print wishlish
    this.printWishlist = function () {
      const element = document.getElementById('wishlist');
      let htmlToAdd = '';
      let index = 0;
      for (let product of this.wishList) {
        htmlToAdd += `<li data-index="${index}" id="${product.id}">${product.title}, ${product.price}<button class="remove-wishlist-item"
  id="${product.id}">Remove</button> </li>`;
        index++;
      }
      element.innerHTML = htmlToAdd;
    }
    // remove wishlish

    this.removeFromwishList = function (index) {
      this.wishList.splice(index, 1);
      const btnWish = document.querySelector(".wishlist-btn");
      btnWish.disabled = false;
    }
  }

  function Product(title, author, thumbnail, price, quantity, description) {
    this.id = Date.now();
    this.title = title;
    this.author = author;
    this.thumbnail = thumbnail;
    this.price = price;
    this.qty = quantity;
    this.desc = description;
  }

  // instances
  const myStore = new Bookstore("Daniels Bookstore");

  // event listeners 
  const addBtn = document.getElementById("add-btn");
  addBtn.addEventListener('click', function (e) {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const thumbnail = document.getElementById("thumbnail").value;
    const price = document.getElementById("price").value;
    const quantity = document.getElementById("quantity").value;
    const description = document.getElementById("description").value;

    myStore.addProduct(new Product(title, author, thumbnail, price, quantity, description));
    myStore.listProducts();
  });


  document.addEventListener('click', function (e) {
    e.preventDefault();
    if (e.target.classList.contains("buy-btn")) {
      const id = parseInt(e.target.closest("li").id);
      myStore.addToCart(id);
      myStore.printCart();
    } else if (e.target.classList.contains("wishlist-btn")) {
      const index = parseInt(e.target.closest("li").id);
      myStore.addToWishlist(index);
      myStore.printWishlist();
      const btnWish = document.querySelector(".wishlist-btn");
      btnWish.disabled = true;
    } else if (e.target.classList.contains("remove-shopping-item")) {
      const index = parseInt(e.target.closest("li").getAttribute("data-index"));
      myStore.removeFromCart(index);
      myStore.printCart();
    } else if (e.target.classList.contains('remove-wishlist-item')) {
      const indexx = parseInt(e.target.closest("li").getAttribute("data-index"))
      myStore.removeFromwishList(indexx);
      myStore.printWishlist();
    }
  });

