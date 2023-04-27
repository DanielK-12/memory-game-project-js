const cards = document.querySelectorAll(".card");
const player1score = document.getElementById("1");
const player2score = document.getElementById("2");
const player1 = document.getElementsByClassName("player1")[0];
const player2 = document.getElementsByClassName("player2")[0];
const infoMsg = document.getElementById('info-msg');
const TURN_DURATION = 30;
let interval = undefined;

let matched = 0;
let cardOne, cardTwo;
let disableDeck = false;
let activePlayer = 1;
let players = {
  1: { name: 'player1', score: 0 },
  2: { name: 'player2', score: 0 }
};
// functions
function flipCard({ target }) {
  if (!interval) {
    interval = setInterval(countdown, 1000);
  }
  if (cardOne !== target && !disableDeck) {
    target.classList.add("flip");
    if (!cardOne) {
      return cardOne = target;
    }
    cardTwo = target;
    disableDeck = true;
    let cardOneImg = cardOne.querySelector(".back-view img").src,
      cardTwoImg = cardTwo.querySelector(".back-view img").src;
    matchCards(cardOneImg, cardTwoImg);
  }
}

function matchCards(img1, img2) {
  if (img1 === img2) {
    matched++;
    players[activePlayer].score++;
    printScore();

    if (matched == 8) {
      infoMsg.innerText = players[1].score > players[2].score ? "Player 1 won! Click on any card to start new game!" : "Player 2 won! Click on any card to start new game!";
      resetScore();
      printScore();
      clearInterval(interval);
      interval = undefined;
      setTimeout(() => {
        shuffleCard();
      }, 1000);
    }
    cardOne.removeEventListener("click", flipCard);
    cardTwo.removeEventListener("click", flipCard);
    cardOne = cardTwo = "";
    return disableDeck = false;
  }
  setTimeout(() => {
    cardOne.classList.add("shake");
    cardTwo.classList.add("shake");
  }, 400);

  setTimeout(() => {
    cardOne.classList.remove("shake", "flip");
    cardTwo.classList.remove("shake", "flip");
    cardOne = cardTwo = "";
    disableDeck = false;
  }, 1200);
  resetCountdown();
}

function changeActivePlayer() {
  activePlayer = activePlayer === 1 ? 2 : 1;
  if (activePlayer === 1) {
    player1.classList.add("active");
    player2.classList.remove("active");
    countdown();
  } else {
    player2.classList.add("active");
    player1.classList.remove("active");
    countdown();
  }
};

function shuffleCard() {
  matched = 0;
  disableDeck = false;
  cardOne = cardTwo = "";
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
  arr.sort(() => Math.random() > 0.5 ? 1 : -1);
  cards.forEach((card, i) => {
    card.classList.remove("flip");
    let imgTag = card.querySelector(".back-view img");
    imgTag.src = `img/img-${arr[i]}.png`;
    card.addEventListener("click", flipCard);
  });
}

function printScore() {
  player1score.innerText = players[1].score;
  player2score.innerText = players[2].score;
};

shuffleCard();

cards.forEach(card => {
  card.addEventListener("click", flipCard);
});

function resetScore() {
  players[1].score = 0;
  players[2].score = 0;
}

let timeLeft = TURN_DURATION;

function countdown() {
  timeLeft--;
  infoMsg.innerHTML = timeLeft + ' seconds remaining';

  if (timeLeft < 1) {
    resetCountdown()
  }

}

function resetCountdown() {
  timeLeft = TURN_DURATION;
  changeActivePlayer();
}

