const choices = document.querySelectorAll('.choice')
const results = document.querySelector('.results')

const result = document.createElement('p');
const scoreboard = document.createElement('p');

let playerScore = 0;
let computerScore = 0;

let gameRun = playerScore < 5 && computerScore < 5;

result.textContent = 'No results yet, click one of the choices to start the game!'
results.appendChild(result);

scoreboard.textContent = `${playerScore} | ${computerScore}`;
results.appendChild(scoreboard);

function getComputerChoice () {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    let computerChoice = choices[randomIndex];
    return computerChoice;
}

function checkWinner(playerScore, computerScore) {
    if (playerScore == 5) {
        result.textContent = `You Won with ${playerScore} points! Computer had ${computerScore} points!`;
        results.appendChild(result);
    } else {
        result.textContent = `You Lost with ${playerScore} points. Computer had ${computerScore} points.`;
        results.appendChild(result);
    }
}

function playRound (userChoice, computerChoice) {
    if (gameRun){
        if (userChoice === computerChoice) {
            result.textContent = `This round's a tie, you both chose ${userChoice}!`;
            results.appendChild(result);
        } else if (userChoice === "rock" && computerChoice === "paper"){
            result.textContent = `You Lost this round. You chose ${userChoice} and computer chose ${computerChoice}.`;
            results.appendChild(result);
            computerScore++;
        }else if (userChoice === "rock" && computerChoice === "scissors"){
            result.textContent = `You won this round! You chose ${userChoice} and computer chose ${computerChoice}!`;
            results.appendChild(result);
            playerScore++;
        }else if (userChoice === "paper" && computerChoice === "scissors"){
            result.textContent = `You Lost this round. You chose ${userChoice} and computer chose ${computerChoice}.`;
            results.appendChild(result);
            computerScore++;
        }else if (userChoice === "paper" && computerChoice === "rock"){
            result.textContent = `You won this round! You chose ${userChoice} and computer chose ${computerChoice}!`;
            results.appendChild(result);
            playerScore++;
        }else if (userChoice === "scissors" && computerChoice === "rock"){
            result.textContent = `You Lost this round. You chose ${userChoice} and computer chose ${computerChoice}.`;
            results.appendChild(result);
            computerScore++;
        }else if (userChoice === "scissors" && computerChoice === "paper"){
            result.textContent = `You won this round! You chose ${userChoice} and computer chose ${computerChoice}!`;
            results.appendChild(result);
            playerScore++;
        } else {
            result.textContent = "Invalid input :(";
            results.appendChild(result);
        }
    }else {
        checkWinner(playerScore, computerScore);
    }
}

function removeTransition (e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('animation');
}

choices.forEach(choice => {
    choice.addEventListener('click', (e) => {
        choice.classList.add('animation');
        playRound(choice.id, getComputerChoice());
        gameRun = playerScore < 5 && computerScore < 5;
        scoreboard.textContent = `${playerScore} | ${computerScore}`;
        results.appendChild(scoreboard);
        choices.forEach(choice => choice.addEventListener('transitionend', removeTransition));
    })
});
