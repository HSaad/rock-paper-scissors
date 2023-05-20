let playerScore = 0;
let computerScore = 0;

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
    
    switch (playerSelection){
        case "rock":
            if(computerSelection == "rock"){
                return "Tie!";
            } else if (computerSelection == "paper"){
                computerScore++;
                return "You Lose! Paper beats Rock";
            }else {
                playerScore++;
                return "You Win! Rock beats Scissors";
            }
        case "paper":
            if (computerSelection == "rock"){
                playerScore++;
                return "You Win! Paper beats Rock";
            } else if (computerSelection == "paper"){
                return "Tie!";
            } else {
                computerScore++;
                return "You Lose! Scissors beats Paper";
            }
        case "scissors":
            if (computerSelection == "rock"){
                computerScore++;
                return "You Lose! Rock beats Scissors";
            }else if (computerSelection == "paper"){
                playerScore++;
                return "You Win! Scissors beats Paper";
            }else {
                return "Tie!";
            }
        default:
            return "Incorrect Selection. Please choose either: rock, paper, or scissors";
    }
}

function getWinner(){
    if(computerScore > playerScore){
        return `Computer Wins. Computer Score: ${computerScore},  Your Score: ${playerScore}`;
    }else if(computerScore < playerScore ){
        return `You Win! Computer Score: ${computerScore},  Your Score: ${playerScore}`;
    }else {
        return `Tie! Computer Score: ${computerScore},  Your Score: ${playerScore}`;
    }
}

function getPlayerChoice(e){
    return e.target.id
}

function game(playerChoice) {
    // for(let i =0; i < 5; i++){
        console.log(playRound(playerChoice, getComputerChoice()));
    // }
    console.log(getWinner());
}

let btns = document.querySelectorAll('button');
btns.forEach((btn) => btn.addEventListener('click', e => game(getPlayerChoice(e))));

//game();