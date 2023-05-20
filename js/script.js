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
        return "You Lose. Computer Wins.. Reload to restart the game";
    }
    return "You Win!.. Reload to restart the game";
}

function refreshPage(){
    window.location.reload();
} 

function createRestartButton(){
    let restartButton = document.querySelector('#restart');

    if (restartButton !== null) return;

    restartButton = document.createElement('button');
    let parentContainer = document.querySelector('body');

    restartButton.id = "restart";
    restartButton.textContent = "Play Again?";
    restartButton.addEventListener('click', () => refreshPage());

    parentContainer.appendChild(restartButton);
}

function getScore(){
    return `Computer Score: ${computerScore},  Your Score: ${playerScore}`;
}

function getPlayerChoice(e){
    return e.target.id
}

function displayGame(result) {
    let gameResult = document.querySelector(".game");
    let score = document.querySelector(".score");

    gameResult.textContent = result;
    score.textContent = getScore();
}

function displayWinner(){
    let winner = document.querySelector(".winner");
    winner.textContent = getWinner();
}

function playGame(playerChoice){
    if(playerScore < 5 &&  computerScore < 5){
        let result = playRound(playerChoice, getComputerChoice());
        displayGame(result);
    }else{
        displayWinner();
        createRestartButton();
    }
}

function game(){
    let btns = document.querySelectorAll('button');
    btns.forEach((btn) => btn.addEventListener('click', e => playGame(getPlayerChoice(e))));
}

game();