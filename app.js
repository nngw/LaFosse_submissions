//Import dependencies
const { color, log, red, green, cyan, white, bgCyan, bgGreen, bgRed } = require('console-log-colors');
const { computerPlays, compareChoices } = require('./functions')
const prompt = require('prompt-sync')({sigint: true});

//Set variables
const choices= ['rock', 'paper', 'scissor'];
let personScore = 0;
let computerScore = 0;
let round = 1;
let playing = true; 

//Get player name
let person = prompt("Please enter your name: ", "Human");
console.log(`Hello ${person}, lets play\n\n`);

//Play game
while (playing === true) { 
    let playerPick = '';
    
    while(playerPick !== 'p' && playerPick !== 'r' && playerPick !== 's'){
        playerPick = prompt("Choose a hand to play.\nType 'p' for paper, r for 'rock, or 's' for scissor\n").toLowerCase();
    }

    if (playerPick === 'p'){
        playerPick = 'paper';
    } else if (playerPick === 'r') {
        playerPick = 'rock';
    } else {
        playerPick = 'scissor';
    }

    
    let computerPick = computerPlays(choices);
    
    const outcome = compareChoices(playerPick,computerPick);
    
    //Print the result of the round
    if (outcome === red("Computer wins")){
        computerScore++
        console.log(`\nRound ${round} results:\n` + outcome + "\n");
    } else if (outcome === green("Player wins")){
        personScore++
        console.log(`\nRound ${round} results:\n` + outcome + "\n");
    } else {
        console.log(`\nRound ${round} results:\n` + outcome + "\n");
    }

    console.log(`The current score is ${person}: ${personScore}    Computer: ${computerScore}\n`);
    round++;

    let playAgain = '';

    while(playAgain !== 'y' && playAgain !== 'n'){
        playAgain = prompt("Do you want to play again? press 'y' for YES and 'n' for NO\n").toLowerCase();
    }
    
    //Break loop if player does not want to continue
    playAgain === "y" ? playing = true : playing = false;

} 

console.log(`\nGAME OVER\n\nThe final score is ${person}: ${personScore}    Computer: ${computerScore}\n`);

if (personScore > computerScore){
    console.log(white.bgGreen(`${person} wins`));
} else if (personScore < computerScore) {
    console.log(white.bgRed("Computer wins"));
} else {
    console.log(white.bgCyan("Computer wins"));
}