function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  switch (randomNumber) {
    case 1:
      return "rock";
      break;
    case 2:
      return "paper";
    case 3:
      return "scissors";
    default:
      break;
  }
}

function getHumanChoice() {
  return prompt("What will your choice be?");
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    // Win condition
    // rock beats scissors
    // scissors beats paper
    // paper beats rock
    if (
      (humanChoice === "rock" && computerChoice === "scisscors") ||
      (humanChoice === "scissors" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "rock")
    ) {
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    } else {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
    }
  }
  for (let index = 0; index < 5; index++) {
    playRound(getHumanChoice(), getComputerChoice());
  }
  console.log(
    `Your score is: ${humanScore}. The computer's score is: ${computerScore}. ${humanScore > computerScore ? "You won!" : humanScore === computerScore ? "It's a tie" : "Sorry, you lost!"}`,
  );
}

playGame();
