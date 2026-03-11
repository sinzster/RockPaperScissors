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

function displayResult(message) {
  const div = document.querySelector("div");
  const p = document.createElement("p");
  p.innerText = message;
  div.appendChild(p);
}

function playGame(event) {
  // console.log(event);
  roundsCounter += 1;
  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    // console.log(humanChoice);
    // Win condition
    // rock beats scissors
    // scissors beats paper
    // paper beats rock
    if (
      (humanChoice === "rock" && computerChoice === "scisscors") ||
      (humanChoice === "scissors" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "rock")
    ) {
      displayResult(`You win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    } else if (humanChoice === computerChoice) {
      displayResult(`It's a tie! You both selected ${humanChoice}`);
    } else {
      displayResult(`You lose! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
    }
  }
  playRound(event.target.innerText, getComputerChoice());
  if (roundsCounter === 5) {
    console.log("Round end");
    let message = `Your score is: ${humanScore}. The computer's score is: ${computerScore}.`;
    if (humanScore < computerScore) {
      message += " Sorry, you lost!";
    } else if (humanScore === computerScore) {
      message += " It's a tie!";
    } else {
      message += " Sorry, you lost!";
    }
    displayResult(message);
  }
}
let humanScore = 0;
let computerScore = 0;
let roundsCounter = 0;

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  const humanChoice = button.innerText;
  button.addEventListener("click", playGame);
});
