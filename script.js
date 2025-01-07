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

  rockButton.addEventListener("click", function () {
    playRound("rock", getComputerChoice());
  });

  paperButton.addEventListener("click", function () {
    playRound("paper", getComputerChoice());
  });

  scissorsButton.addEventListener("click", function () {
    playRound("scissors", getComputerChoice());
  });

  function playRound(humanChoice, computerChoice) {
    const messageElement = document.getElementById("message");

    if (humanChoice === computerChoice) {
      messageElement.innerText = "It's a tie!";
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "rock")
    ) {
      humanScore++;
      document.getElementById(
        "human-score"
      ).innerText = `Human Score: ${humanScore}`;
      messageElement.innerText = "You win this round!";
    } else {
      computerScore++;
      document.getElementById(
        "computer-score"
      ).innerText = `Computer Score: ${computerScore}`;
      messageElement.innerText = "You lose this round!";
    }

    if (humanScore === 5 || computerScore === 5) {
      if (humanScore === 5) {
        messageElement.innerText = "Congratulations! You won the game!";
      } else {
        messageElement.innerText = "Sorry! The computer won the game!";
      }
      humanScore = 0;
      computerScore = 0;
      document.getElementById(
        "human-score"
      ).innerText = `Human Score: ${humanScore}`;
      document.getElementById(
        "computer-score"
      ).innerText = `Computer Score: ${computerScore}`;
    }
  }
}
// Play 5 rounds

// Declare the winner

// Start the game

playGame();
