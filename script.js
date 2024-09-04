let humanScore = 0;
let computerScore = 0;

//Logic for the computer

function getComputerChoice() {
  let choice = Math.ceil(Math.random() * 3);
  if (choice === 1) {
    return "rock";
  } else if (choice === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Logic for the Human

function getHumanChoice() {
  let human = prompt("Rock Paper Scissors?");

  return human;
}

function playRound(humanChoice, computerChoice) {
  // your code here!
  humanChoice = humanChoice.toLowerCase();
  console.log(computerChoice);
  console.log(humanChoice);

  if (humanChoice == computerChoice) {
    humanScore++;
    console.log("Its a tie");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    humanScore++;
    console.log("You win");
  } else {
    computerScore++;
    console.log("you lose");
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
