const getUserChoice = (userInput) => {
  // to accept input 'rock' and 'Rock' too
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "scissors" ||
    userInput === "paper" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log("You must choose either scissors, rock or paper!");
  }
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
};

//console.log(getComputerChoice(1));

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "The game was a tie.";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  }
  if (userChoice === "bomb") {
    return "Congratulations, you won!";
  } else {
  }
}

//console.log(determineWinner('scissors', 'paper'));

const playGame = () => {
  const userChoice = getUserChoice("bomb");
  console.log(userChoice);
  const computerChoice = getComputerChoice();
  console.log("You threw: " + userChoice);
  console.log("The computer threw: " + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
