function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function computerPlay() {
    let random_int = Math.floor(3*Math.random());
    switch (random_int) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        default:
            return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    let capitalizedPlayer = capitalize(playerSelection);
    if (capitalizedPlayer == computerSelection) {
        return `Tied! Both players chose ${capitalizedPlayer}`
    }
    if ((capitalizedPlayer == 'Paper' && computerSelection == 'Rock') ||
        (capitalizedPlayer == 'Rock' && computerSelection == 'Scissors') ||
        (capitalizedPlayer == 'Scissors' && computerSelection == 'Paper')) {
            return `You win! ${capitalizedPlayer} beats ${computerSelection}`;
        }
    return `You lose! ${computerSelection} beats ${capitalizedPlayer}`;
}

function game() {
    let computerSelection;
    let playerSelection;
    let result;
    for (let i = 0; i < 5; ++i) {
        playerSelection = prompt('Insert your play');
        computerSelection = computerPlay();
        result = playRound(playerSelection, computerSelection);
        console.log(result);
    }
}