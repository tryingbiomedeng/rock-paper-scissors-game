
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Initialising ansi-colors and the point system for the game
const {green, red, yellow} = require('ansi-colors')
let wins = 0;
let losses = 0;
let ties = 0;

//Game function
function rpsRound(playerChoice) {

  // const optionsShort = {
  //   r: 'rock', 
  //   p: 'paper',
  //   s: 'scissors'  
  // };
  //
  // if(optionsShort[playerChoice]) {
  //   playerChoice = optionsShort[playerChoice]; 
  // }

  //create options array and let the computer choose one at random
  const options = ['rock', 'paper', 'scissors'];
  const computerChoice = options[Math.floor(Math.random() * 3)];

  //if loop to check for tie
  if (playerChoice === computerChoice) {
    console.log(yellow("It's a tie!"));
    ties++;
  } else if ( //else if statement that checks for winning situation
    (playerChoice === 'rock' && computerChoice === 'scissors') || 
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    console.log(green("You win!"));
    wins++;
  } else { //else all else scenarios are lost outcomes
    console.log(red("You lose!"));
    losses++;
  }
}

//Game loop - to play the game
function playGame() {
  rl.question("Rock(r), paper(p) or scissors(s)? ", choice => {
    const options = ['rock', 'r', 'paper','p', 'scissors', 's'];
    if(options.includes(choice.toLowerCase())) {
      rpsRound(choice);
      printScores();
      playAgain();
    } else {
      console.log("Invalid choice. Please enter rock, paper or scissors.")
      playGame(); // ask again
    }
  });

}

//Scores function
function printScores() {
  console.log("The score is: ")
  console.log(`Wins: ${wins} Losses: ${losses} Ties: ${ties}`); 
}

//Game loop - to play again
function playAgain() {
  rl.question("Play again? (y/n) ", answer => {
    const validAnswers = ['y', 'yes', 'n', 'no'];
    if (validAnswers.includes(answer.toLowerCase())) {
      if (answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes') {
        playGame();
      } else {
        console.log("Bye-Bye")
        rl.close();
      }
    } else {
      console.log("Invalid input. Please enter 'yes' or 'no'");
      playAgain();
    }
  });
}

//Start game
playGame();
