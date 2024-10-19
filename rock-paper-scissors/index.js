// Rock beats scissors, scissors beat paper, and paper beats rock.

// plan

// create a function human choice
// create a function for computers choice

function getComputerChoice() {
  let randomNumber = Math.random();
  if (randomNumber < 1 / 3) {
    return "rock";
  } else if (randomNumber < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}
// console.log(getComputerChoice());

function getHumanChoice() {
  let humanChoice = prompt(
    "Enter your choice(rock, paper, scissors):"
  ).toLowerCase();

  while (
    humanChoice !== "rock" &&
    humanChoice !== "paper" &&
    humanChoice !== "scissors"
  ) {
    humanChoice = prompt(
      "Not a valid choice. Input a valid choice (rock, paper or scissors"
    ).toLowerCase();
  }
  return humanChoice;
}

// console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(computerChoice, humanChoice) {
  humanChoice = humanChoice.toLowerCase();
  if (humanChoice === computerChoice) {
    return "itss a tieee 🙃";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    return `You wiiin 👍 ${humanChoice} beats ${computerChoice}`;
    humanScore += 1;
  } else {
    return `You lose 🤡 ${computerChoice} beats ${humanChoice}`;
    computerScore += 1;
  }
}

let computerSelection = getComputerChoice();
let humanSelection = getHumanChoice();

console.log(playRound(computerSelection, humanSelection));
