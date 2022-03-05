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

const buttons = document.querySelectorAll('input');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener('click', function(e) {
        const playerscore = document.querySelector('#player-score');
        const computerscore = document.querySelector('#computer-score')
        if (parseInt(playerscore.textContent.slice(-1)) + parseInt(computerscore.textContent.slice(-1)) < 5) {
            computerSelection = computerPlay();
            const body = document.querySelector('body');
            const div = document.createElement('div');
            body.append(div);
            text = playRound(this.id, computerSelection);
            playerWon = text.includes('win');
            playerLose = text.includes('lose');
            div.textContent = text;
            var scoretext;
            if (playerWon) {
                scoretext = playerscore.textContent;
                playerscore.textContent = scoretext.slice(0, -1) + (parseInt(scoretext.slice(-1)) + 1); 
            } else if (playerLose) {
                scoretext = computerscore.textContent;
                computerscore.textContent = scoretext.slice(0, -1) + (parseInt(scoretext.slice(-1)) + 1); 
            }
        } else {
            console.log(parseInt(playerscore.textContent));
        }
    });
});