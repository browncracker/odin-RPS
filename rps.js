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
    if (playerSelection != 'rock' && playerSelection != 'scissors' && playerSelection != 'paper') {
        outcome = undefined;
    }
    else if ((playerSelection == 'rock' && computerSelection =='scissors') || (playerSelection =='scissors' && computerSelection =='paper') || (playerSelection =='paper' && computerSelection == 'rock')) {
        outcome = 1;
    }
    else if ((playerSelection == 'scissors' && computerSelection =='rock') || (playerSelection =='paper' && computerSelection =='scissors') || (playerSelection =='rock' && computerSelection == 'paper')) {
        outcome = -1;
    }
    else
        outcome = 0;
    return outcome;
}

function game() {
    let playerWins = 0;
    let computerWins = 0;
    let winner;
    for (i=0; i<5; i++) {
        let playerSelection = prompt ('Rock, Paper, or Scissors?');
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        if (result > 0) {
            playerWins++;
        } else if (result < 0) {
            computerWins++;
        } else if (result == undefined) {
            console.log('Not a valid entry');
            i--;
        }
    }
    if (playerWins > computerWins) {
        winner = `You won ${playerWins} out of 5! You Win!`
    } else if (computerWins > playerWins) {
        winner = `You only won ${playerWins} out of 5. You Lose!`
    } else if (computerWins == playerWins) {
        winner = "It's a tie!"
    }
    console.log(winner);
    console.log(playerWins);
    console.log(computerWins);
}

let theGame = game();