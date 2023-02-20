let calcBtn = document.getElementById('calculateAge');
let result = document.getElementById('result');

calcBtn.addEventListener('click', () => {
  let userInput = document.getElementById('year').value;
  result.innerHTML = `<h3>Your age is: ${calculateAge(userInput)}`;
});

function calculateAge(year) {
  let currYear = new Date().getFullYear();
  return currYear - year;
}