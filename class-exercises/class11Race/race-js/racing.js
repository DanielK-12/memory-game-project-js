// get the buttons

const raceStartBtn = document.querySelector('#race-start-btn');
const raceResetBtn = document.querySelector('#race-reset-btn');

// get all the race elements(array)
const raceElements = document.querySelectorAll('.race-el');

raceStartBtn.addEventListener('click', function () {
  raceStartBtn.disabled = true;
  const results = [];
  // shorthand for let i = 0; i < element.length; i++
  for (let item of raceElements) {
    let randomNumber = getRandomNumber();
    item.style.left = `${randomNumber}px`;
    item.id = `item-${randomNumber}`;

    results.push(randomNumber);
  }
  setTimeout(function () {
    const winner = getWinner(results);
    writeScore(winner.innerText);
    raceStartBtn.disabled = false;
  },
    1250);


});

// reset the game 

raceResetBtn.addEventListener('click', function () {
  for (let item of raceElements) {
    item.style.left = 0;
    item.style.backgroundColor = "forestgreen";
  }
  document.querySelector('#scoreboard').innerText = '';
});

// write on the scoreboard
function writeScore(winnerNumber) {
  const scoreBoard = document.querySelector('#scoreboard');
  scoreBoard.innerHTML += `<li><strong>The winner is number : ${winnerNumber}</strong></li>`;
}

// getWinner

function getWinner(arr) {
  let winner = findMax(arr);
  const winnerEl = document.querySelector(`#item-${winner}`);
  winnerEl.style.backgroundColor = "gold";
  return winnerEl;
}

// find max number 
function findMax(arr) {
  let max = arr[0];
  for (let item of arr) {
    if (item > max) {
      max = item;
    }
  }
  return max;
}

function getRandomNumber(maxNum = 750) {
  return Math.floor((Math.random() * maxNum) + 1);
}