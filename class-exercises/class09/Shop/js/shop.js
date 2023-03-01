const articles = ["pc", 1000, "mouse", 80, "keyboard", 90, "headphones", 150, "mic", 50]

// create the following functions

// add an article to the existing articles array



function addArticle(articleName, articlePrice) {
  articles.push(articleName, articlePrice);
}

addArticle("mousepad", 10);
addArticle("USB token", 20);
console.log(articles);

// print articles - print the articles in console
function printArticles() {
  for (i = 0; i < articles.length; i++) {
    console.log(articles[i], articles[i += 1]);
  }
}

printArticles();

// get price (name) - returns the price of an article and console logs it
function getPrice(articleName) {
  for (let i = 0; i < articles.length; i++) {
    if (articleName === articles[i]) {
      console.log(`The price of ${articleName} is ${articles[i += 1]}`);
    }
  }
}

getPrice("mic");
getPrice("klavir");

// edit the price (name, price) - edits the price of the article
function editPrice(articleName, newPrice) {
  for (i = 0; i < articles.length; i++) {
    if (articles[i] === articleName) {
      articles[i += 1] = newPrice;
      console.log(`The new price for ${articleName} is ${newPrice}`);
    }
  }
}

editPrice("mic", 7);

// delete article (name) - removes an article and it's price from an array

articles.splice(4, 2);
console.log(articles);

function deleteArticle(articleName) {
  for (let i = 0; i < articles.length; i++) {
    if (articles[i] === articleName) {
      articles.splice(i, 2);
      console.log(`The ${articleName} was removed from the articles list`)
      console.log(articles);
    }
  }
}

deleteArticle("headphones");
deleteArticle("USB token");
