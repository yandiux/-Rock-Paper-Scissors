// Logic for the computer
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
  let human = prompt("Rock, Paper, or Scissors?");
  return human.toLowerCase(); // Ensure lowercase for consistency
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  const rockButton = document.getElementById("rock");
  const paperButton = document.getElementById("paper");
  const scissorsButton = document.getElementById("scissors");
  const resultDisplay = document.querySelector(".result");

  rockButton.addEventListener("click", function () {
    playRound("rock", getComputerChoice());
  });

  paperButton.addEventListener("click", function () {
    playRound("rock", getComputerChoice());
  });

  scissorsButton.addEventListener("click", function () {
    playRound("rock", getComputerChoice());
    git;
  });

  function playRound(humanChoice, computerChoice) {
    console.log(`Computer: ${computerChoice}, Human: ${humanChoice}`);

    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "rock")
    ) {
      humanScore++;
      console.log("You win this round!");
    } else {
      computerScore++;
      console.log("You lose this round!");
    }
  }

  // Play 5 rounds

  // Declare the winner
  if (humanScore > computerScore) {
    console.log(
      `You win the game! Final score: Human ${humanScore} - Computer ${computerScore}`
    );
  } else if (computerScore > humanScore) {
    console.log(
      `You lose the game! Final score: Computer ${computerScore} - Human ${humanScore}`
    );
  } else {
    console.log("The game is a tie!");
  }
}

// Start the game

playGame();
