const startBtn = document.querySelector(".main-btn");
const numberInput = document.querySelector(".number-input");
const guessBtn = document.querySelector(".guess-btn");
const progress = document.querySelector("progress");
const guesses = document.querySelector("#guesses");
const content = document.querySelector(".main-header");

const maxNumber = 100;
let trueGuess = Math.floor(Math.random() * maxNumber);

function checkGuess() {
  if (numberInput.value == "") {
    guesses.innerHTML = "Please enter a number";
    return;
  }
  if (numberInput.value > 100) {
    guesses.innerHTML = "Entered invalid number, please enter a number";
    return;
  }

  if (numberInput.value > trueGuess) {
    progress.value += 25;
    guesses.innerHTML = `${numberInput.value} is higer than the number`;
  } else if (progress.value === 100) {
    guessBtn.setAttribute("disabled", "disabled");
    numberInput.setAttribute("disabled", "disabled");
    content.innerHTML = "Game Over!";
  } else if (numberInput.value < trueGuess) {
    progress.value += 25;
    guesses.innerHTML = `${numberInput.value} is lower than the number`;
  } else {
    progress.value = 100;
    guesses.innerHTML = `${numberInput.value} is true number`;
    content.innerHTML = "You Won!";
  }
}

function startGame() {
  if (progress.value == 100) {
    guessBtn.removeAttribute("disabled");
    numberInput.removeAttribute("disabled");
    progress.value = 0;
    guesses.innerHTML = "Not Started!";
    content.innerHTML = "Guessing Game!";
    trueGuess = Math.floor(Math.random() * maxNumber);
  }
}

guessBtn.addEventListener("click", checkGuess);
startBtn.addEventListener("click", startGame);
