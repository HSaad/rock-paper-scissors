function random(){
    return Math.floor(Math.random() * 3);
}

function getComputerChoice(){
    let choice = random();
    if (choice == 0){
        return "rock";
    }else if (choice == 1){
        return "paper";
    }else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase().trim();

    switch (playerSelection){
        case "rock":
            if(computerSelection == "rock"){
                return "Tie!";
            } else if (computerSelection == "paper"){
                return "You Lose! Paper beats Rock";
            }else {
                return "You Win! Rock beats Scissors";
            }
        case "paper":
            if (computerSelection == "rock"){
                return "You Win! Paper beats Rock";
            } else if (computerSelection == "paper"){
                return "Tie!";
            } else {
                return "You Lose! Scissors beats Paper";
            }
        case "scissors":
            if (computerSelection == "rock"){
                return "You Lose! Rock beats Scissors";
            }else if (computerSelection == "paper"){
                return "You Win! Scissors beats Paper";
            }else {
                return "Tie!";
            }
        default:
            return "Incorrect Selection. Please choose either: rock, paper, or scissors";
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));