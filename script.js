const options = ['rock', 'paper', 'scissor'];

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return 'tie';
    }
    else if ( (playerSelection == 'rock' && computerSelection == 'scissor') ||
            (playerSelection == 'paper' && computerSelection == 'rock') ||
            (playerSelection == 'scissor' && computerSelection == 'paper') ) {
            return 'player';
            }
    else {
        return 'computer';
    } 
}

function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection)
    if (result == 'tie') {
        return 'It`s a tie!'
    }
    else if (result == 'player') {
        return `You win! ${playerSelection} beats ${computerSelection}!`
    }

    else {
        return `You lose! ${computerSelection} beats ${playerSelection}!`
    }

}


function getPlayerChoice() {
    let validateInput = false;
    while(validateInput == false) {
        const choice = prompt('Rock, paper or scissor?');
        if (choice == null) {
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)) {
            validateInput = true;
            return choiceInLower;
        }
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        const playerSelection = getPlayerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log('--------------------');
        if (checkWinner(playerSelection, computerSelection) == 'player' ) {
            playerScore++;
        }
        else if (checkWinner(playerSelection, computerSelection) == 'computer') {
            computerScore++;
        }
    } 
    console.log('5RoundEnd')
    console.log(`Player: ${playerScore} x Computer: ${computerScore}`);
}

game()