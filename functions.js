//Dependencies
const { color, log, modifier, red, green, cyan, bold} = require('console-log-colors');


//Create function for computer choises 
const computerPlays = (array) =>{
    return array[Math.floor(Math.random()*3)]
}

//Define the rules
const compareChoices = (playerChoice, computerChoice) =>{
    if (playerChoice === "rock"){
        if(computerChoice === "rock"){
            return cyan("Draw")
        } else if (computerChoice === "paper"){
            console.log(red("Computer wins") === "Computer wins")
            return red("Computer wins")
        } else if (computerChoice === "scissor"){
            return green("Player wins")
        }
    } else if (playerChoice === "paper"){
        if(computerChoice === "paper"){
            return cyan("Draw")
        } else if (computerChoice === "scissor"){
            return red("Computer wins")
        } else if (computerChoice === "rock"){
            return green("Player wins")
        }
    } else if (playerChoice === "scissor"){
        if(computerChoice === "scissor"){
            return cyan("Draw")
        } else if (computerChoice === "rock"){
            return red("Computer wins")
        } else if (computerChoice === "paper"){
            return green("Player wins")
        }
    }
}

module.exports = {
    computerPlays,
    compareChoices,
}
