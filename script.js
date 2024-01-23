const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('error');
  }
};

//console.log(getUserChoice('rock'));

const getComputerChoice = () => {
  const number = Math.floor(Math.random() * 3)
  switch (number) {
    case 0 :
    return 'rock';
    case 1 :
    return 'scissors';
    default :
    return 'paper';
  }
};

/*
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
*/

//time to determine the winner step 7
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'The game was a tie';
    }

  if (userChoice === 'rock') {
   if (computerChoice === 'paper') {
    return 'Sorry, the computer won';
  } else {
    return 'Congratulations, you won!';
  }    
   }

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The computer won';
    } else {
      return 'you won';
    }
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Sorry, the computer won';
    } else {
      return 'You won';
    }
  }

  if (userChoice === 'bomb') {
    return 'You won!';
  }
  };

/*
console.log(determineWinner('rock', 'scissors'));
console.log(determineWinner('scissors', 'rock')); 
*/

const playGame = ( ) => {
  const userChoice = getUserChoice('paper');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('Computer threw: ' + computerChoice);
  // to determine who won 
  console.log(determineWinner(userChoice, computerChoice));
  
};

playGame();










