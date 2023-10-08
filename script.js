"use strict";
console.log("JS Started");

// Get random choice of R/P/S

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
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else if (computerSelection === playerSelection) {
    return `You Draw! ${computerSelection} is the same as ${playerSelection}`;
  } else {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  }
}

// Get user input, display game messages

function game() {
  console.log("Welcome to Rock Paper Scissors! You are playing 5 rounds against the computerSelection!")

  for (let i = 1; i <= 5; i++) {
    console.log(`Round ${i}`);
    let computerSelection = getcomputerSelectionChoice();

    let playerInput = prompt("Rock, Paper or Scissors?");
    let playerSelection = playerInput[0].toUpperCase() + playerInput.slice(1).toLowerCase();

    console.log(`Computer chose: ${computerSelection}; You chose: ${playerSelection}`);

    console.log(playRound(computerSelection, playerSelection));
  }
}

// Play

game();