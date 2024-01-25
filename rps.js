function getComputerChoice() {
    let choice = Math.floor(Math.random()*3);
    switch(choice) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function playRound(playerSelects, computerSelection) {
    let playerSelection = playerSelects.toLowerCase();
    let outcome;
    if ((playerSelection == 'rock' && computerSelection =='scissors') || (playerSelection =='scissors' && computerSelection =='paper') || (playerSelection =='paper' && computerSelection == 'rock')) {
        outcome = 1; //player win
    }
    else if ((playerSelection == 'scissors' && computerSelection =='rock') || (playerSelection =='paper' && computerSelection =='scissors') || (playerSelection =='rock' && computerSelection == 'paper')) {
        outcome = -1; //cpu win
    } else {
        outcome = 0; //tie
    }
    return outcome;
}

function game() {
    let playerWins = 0;
    let computerWins = 0;
    let ties = 0;
    var result;
    updateResults(playerWins, computerWins, ties);
    let results = document.querySelector('#results');

    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', function(e) {
            result = playRound(button.id.toString(), getComputerChoice());
            console.log(playerWins);
            console.log(computerWins);
            if (result > 0) {
                playerWins++;
                results.textContent = 'You win this round!'
            } else if (result < 0) {
                computerWins++;
                results.textContent = 'You lose this round!'
            } else {
                ties++;
                results.textContent = 'Round is a tie!'
            }
            updateResults(playerWins, computerWins, ties);
            let winner = document.querySelector("#winner");
    
            if (playerWins >= 5) {
                winner.setAttribute('style', 'color:red; font-weight:bold; font-size: 20px');
                winner.textContent = 'Player Wins!';
            } else if (computerWins >= 5) {
                winner.setAttribute('style', 'color:red; font-weight:bold; font-size: 20px');
                winner.textContent = 'PC Wins!';
            } 
        });
    });
} 

function updateResults(playerWins, computerWins, ties) {
    let playerWin = document.querySelector("#playerwins");
    let pcWin = document.querySelector("#pcwins");
    let tie = document.querySelector('#ties');

    playerWin.textContent = 'Player: ' + playerWins;
    pcWin.textContent = 'PC: ' + computerWins;
    tie.textContent = 'Ties: ' + ties;
}

let theGame = game();