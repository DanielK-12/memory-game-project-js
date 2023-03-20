// define my store
function Store(name) {
  this.name = name; // name of the store
  this.products = []; // array of products
  this.shoppingCartProducts = []; //array of products that go in the shopping cart

  //methods
  this.addProduct = function (product) {
    this.products.push(product);
  }

  //list the available products(in stock)
  this.listProducts = function () {
    const element = document.querySelector('#products');
    let htmlToAdd = '';
    let index = 0;
    for (let item of this.products) {
      htmlToAdd += `<li data-index='${index}'>
      <h4>Name: ${item.name}</h4>
      <div><img src='${item.imageUrl}'width='200' alt='${item.name}'></div>
      <div id='quantity'>Quantity: ${item.quantity}</div>
      <div>Description: ${item.desc}</div>
      <div>Compare: <input type='checkbox' class='compare-chk'></div>
      <div><button class='add-to-cart-btn'>Add to cart </button></div>
      </li>`;
      index++;
    }
    element.innerHTML = htmlToAdd;
  }

  this.addToCart = function (product) {
    this.shoppingCartProducts.push(product);
    this.listProductsInShoppingCart();
    const element = document.querySelector('#shopping-cart');
    let htmlToAdd = '';
    for (let item of this.shoppingCartProducts) {
      htmlToAdd += `<li>${item.name} - ${item.price} mkd</li>`;
    }
    element.innerHTML = htmlToAdd;
  }
  //list the products in the shopping cart
  this.listProductsInShoppingCart = function () {

  }
  //compare the products
  this.compareProducts = function (product1, product2) {
    const element = document.querySelector('#compare');
    element.innerHTML = `<table border='2'>
    <tr>
      <th>${product1.name}</th>
      <th>${product2.name}</th>
    </tr>
    <tr>
      <td>${product1.desc}</td>
      <td>${product2.desc}</td>
    </tr>
    <tr>
      <td class='${product1.price < product2.price ? 'cheaper-product' : ''}'>${product1.price}</td>
      <td class='${product2.price < product1.price ? 'cheaper-product' : ''}'>${product2.price}</td>
    </tr>
    </table>`;
  }

  // get product by provided index number
  this.getProductByIndex = function (index) {
    let product = this.products[index];
    if (product) {
      return product;
    } else {
      return false;
    }
  }
}

// define my products
function Product(name, price, imageUrl, desc, quantity) {
  this.name = name;
  this.price = price;
  this.imageUrl = imageUrl;
  this.desc = desc;
  this.quantity = quantity;
}

const phoneSamsung = new Product('Samsung s23', 60000, 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s23-ultra-5g.jpg', 'Released 2023, February 17', 5);
const phoneIphone = new Product('Iphone 14pro-max', 75000, 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-pro-max-.jpg', 'Released 2023, September 16', 3);
const phoneMotorola = new Product('Motorola Moto G73', 40000, 'https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-g73.jpg', 'Released 2023, January 24', 9);
const phoneHuawei = new Product('Huawei P30 lite', 43000, 'https://fdn2.gsmarena.com/vv/bigpic/huawei-p30-lite-.jpg', 'Released 2019, April 25', 7);

const myStore = new Store('SEDC Store');
myStore.addProduct(phoneSamsung);
myStore.addProduct(phoneIphone);
myStore.addProduct(phoneMotorola);
myStore.addProduct(phoneHuawei);

myStore.listProducts(); //calls the method to print the objects to the screen


document.addEventListener('click', function (e) {
  if (e.target.classList.contains('add-to-cart-btn')) {
    const productIndex = parseInt(e.target.closest('li').getAttribute('data-index'));
    console.log(e.target.closest('li').getAttribute('data-index'));
    const product = myStore.getProductByIndex(productIndex);
    if (product) {
      myStore.addToCart(product);
      console.log(myStore.shoppingCartProducts);
    }
  }
});

//lets compare some products 
let productsToCompare = [];
document.addEventListener('click', function (e) {
  if (e.target.classList.contains('compare-chk')) {
    e.target.disabled = true;
    const productIndex = parseInt(e.target.closest('li').getAttribute('data-index'));
    const product = myStore.getProductByIndex(productIndex);

    productsToCompare.push(product);
    if (productsToCompare.length === 2) {
      myStore.compareProducts(productsToCompare[0], productsToCompare[1]);
      productsToCompare = [];
      uncheckCompareInputs();
    }
  }
});
// reset all inputs
function uncheckCompareInputs() {
  const inputs = document.querySelectorAll('.compare-chk');
  for (let item of inputs) {
    item.checked = false;
    item.disabled = false;
  }
}