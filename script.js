"use strict";
console.log("JS Started");

// Buttons, playerSelection

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const resultsDiv = document.querySelector("#results");
const scoreDiv = document.querySelector("#score");
const finalDiv = document.querySelector("#final");

let playerSelection;
let playerScore = 0;
let computerScore = 0;


rockButton.addEventListener("click", () => {
  playerSelection = "Rock";
  game();
});

paperButton.addEventListener("click", () => {
  playerSelection = "Paper";
  game();
});

scissorsButton.addEventListener("click", () => {
  playerSelection = "Scissors";
  game();
});

// Get random choice of R/P/S (computerSelection)

function getcomputerSelectionChoice() {
  let randomNumber = Math.random() * 2;
  randomNumber = Math.round(randomNumber);

  if (randomNumber === 0) {
    return "Rock";
  } else if (randomNumber === 1) {
    return "Scissors";
  } else if (randomNumber === 2) {
    return "Paper";
  }
}

// Calculate who won, display results

function playRound(computerSelection, playerSelection) {
  if (computerSelection === "Rock" && playerSelection === "Scissors" ||
  computerSelection === "Scissors" && playerSelection === "Paper" ||
  computerSelection === "Paper" && playerSelection === "Rock") {
    ++ computerScore;
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else if (computerSelection === playerSelection) {
    return `You Draw! ${computerSelection} is the same as ${playerSelection}`;
  } else {
    ++ playerScore;
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  }
}

// Display game messages

function game() {
  let computerSelection = getcomputerSelectionChoice();
  const br = document.createElement("br");

  resultsDiv.textContent = `Computer chose: ${computerSelection} --- You chose: ${playerSelection}`;

  setTimeout(() => {
    resultsDiv.textContent = playRound(computerSelection, playerSelection);
    scoreDiv.textContent = `You: ${playerScore} --- Computer: ${computerScore}`;

    if (playerScore === 5) {
      finalDiv.textContent += `YOU WIN!`
    } else if (computerScore === 5) {
      finalDiv.textContent += `YOU LOSE!`
    }
  }, 3000);
}