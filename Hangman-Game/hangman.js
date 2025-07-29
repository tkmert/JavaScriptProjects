const words = ["JAVASCRIPT", "DEVELOPER", "PROGRAM", "FUNCTION", "VARIABLE"];
let selectedWord = "";
let displayedWord = [];
let attemptsLeft = 5;

const wordDiv = document.getElementById("word");
const attemptsSpan = document.getElementById("attempts");
const lettersDiv = document.getElementById("letters");
const messageDiv = document.getElementById("message");

function startGame() {
  selectedWord = words[Math.floor(Math.random() * words.length)];
  displayedWord = Array(selectedWord.length).fill("_");
  attemptsLeft = 5;
  attemptsSpan.textContent = attemptsLeft;
  messageDiv.textContent = "";
  wordDiv.textContent = displayedWord.join(" ");
  createLetterButtons();
}

function createLetterButtons() {
  lettersDiv.innerHTML = "";
  for(let i = 65; i <= 90; i++) { // ASCII A-Z
    const btn = document.createElement("button");
    btn.textContent = String.fromCharCode(i);
    btn.addEventListener("click", letterClick);
    lettersDiv.appendChild(btn);
  }
}

function letterClick(e) {
  const letter = e.target.textContent;
  e.target.disabled = true;

  if(selectedWord.includes(letter)) {
    for(let i = 0; i < selectedWord.length; i++) {
      if(selectedWord[i] === letter) {
        displayedWord[i] = letter;
      }
    }
    wordDiv.textContent = displayedWord.join(" ");
    checkWin();
  } else {
    attemptsLeft--;
    attemptsSpan.textContent = attemptsLeft;
    if(attemptsLeft === 0) {
      messageDiv.textContent = `Game Over! The word was: ${selectedWord}`;
      disableAllButtons();
    }
  }
}

function checkWin() {
  if(!displayedWord.includes("_")) {
    messageDiv.textContent = "Congratulations! You won!";
    disableAllButtons();
  }
}

function disableAllButtons() {
  const buttons = lettersDiv.querySelectorAll("button");
  buttons.forEach(btn => btn.disabled = true);
}

startGame();
