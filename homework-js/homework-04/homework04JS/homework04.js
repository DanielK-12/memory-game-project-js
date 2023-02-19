/* Create a recipe page from inputs
-Ask for the the name of the recipe
-Ask the user how many ingredients do we need for the recipe
-Ask the user for the name of every ingredient
-Print the name of the recipe in the HTML as Header
-Print all ingredients as an unordrered list in HTML
Extra: Use a table */

const submit = document.getElementById("btn");
const form = document.getElementById("form");


submit.addEventListener('click', () => {
  const recipe = document.getElementById("name");
  const number = document.getElementById("number");
  const newTitle = document.getElementById("title");
  newTitle.innerText = "";
  document.getElementById("myList").innerText = "";
  newTitle.innerText += `Recipe name: ${recipe.value}`

  for (i = 0; i < number.value; i++) {
    // console.log(`<input type='text' id='ingredient-${i}' name='ingredient-${i}' />`);
    form.innerHTML += `<input type='text' id='ingredient-${i}' name='ingredient-${i}' /><br /><br />`
  }

  form.innerHTML += `<button id='print'>Print</button>`
  const printButton = document.getElementById("print");


  printButton.addEventListener('click', (event) => {
    let ingredientsFormat = '';

    for (i = 0; i < number.value; i++) {
      const ingredient = document.getElementById(`ingredient-${i}`);
      ingredientsFormat += `<li>${ingredient.value}</li>`
    }

    document.getElementById("myList").innerHTML += `${ingredientsFormat}`;

    form.innerHTML = '';
  })
});
