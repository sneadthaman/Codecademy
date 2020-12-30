let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 9);
  }
  
  const compareGuesses = (human, computer, secret) => {
    if ((human < 0) || (human > 9)) {
      alert("Guess must be 0 to 9");
    }
    if (human == computer) {
      return true;
    } else if (human == secret) {
      return true;
    } else if (computer == secret) {
      return false;
    }
  
    let humanDiff = getAbsoluteDistance(secret, human);
    let compDiff = getAbsoluteDistance(secret, computer);
  
    if (humanDiff < compDiff) {
      return true;
    } else {
      return false;
    }
  }
  
  const getAbsoluteDistance = (num1, num2) => {
    return Math.abs(num1 - num2);
  }
  
  const updateScore = winner => {
    if (winner == 'human') {
      humanScore += 1;
    } else if (winner == 'computer') {
      computerScore += 1;
    }
  }
  
  const advanceRound = () => {
    currentRoundNumber += 1;
  }
  
