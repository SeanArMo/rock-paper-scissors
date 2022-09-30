let playerScore = 0;
let computerScore = 0;

function getComputerChoice () {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    let computerChoice = choices[randomIndex];
    return computerChoice;
}

function getUserChoice() {
    let userChoice = prompt("What is your choice (rock/paper/scissors): ");
    userChoice = userChoice.toLowerCase();
    return userChoice;
}

function playRound (userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        console.log("This round's a tie, you both chose " + userChoice + "!");
    } else if (userChoice === "rock" && computerChoice === "paper"){
        console.log("You Lost this round. You chose " + userChoice + " and computer chose " + computerChoice +".");
        computerScore++;
    }else if (userChoice === "rock" && computerChoice === "scissors"){
        console.log("You won this round! You chose " + userChoice + " and computer chose " + computerChoice +"!");
        playerScore++;
    }else if (userChoice === "paper" && computerChoice === "scissors"){
        console.log("You Lost this round. You chose " + userChoice + " and computer chose " + computerChoice +".");
        computerScore++;
    }else if (userChoice === "paper" && computerChoice === "rock"){
        console.log("You won this round! You chose " + userChoice + " and computer chose " + computerChoice +"!");
        playerScore++;
    }else if (userChoice === "scissors" && computerChoice === "rock"){
        console.log("You Lost this round. You chose " + userChoice + " and computer chose " + computerChoice +".");
        computerScore++;
    }else if (userChoice === "scissors" && computerChoice === "paper"){
        console.log("You won this round! You chose " + userChoice + " and computer chose " + computerChoice +"!");
        playerScore++;
    } else {
        console.log("Invalid input :(")
    }
}

function checkWinner (playerScore, computerScore) {
    if (playerScore === computerScore) {
        console.log("It's a draw, you both got " + playerScore + ".");
    } else if (playerScore > computerScore) {
        console.log("You won! You have " + playerScore + " point(s) and computer has " + computerScore + ".");
    } else if (playerScore < computerScore) {
        console.log("You lost! You have " + playerScore + " point(s) and computer has " + computerScore + ".");
    } else {
        console.log("Error");
    }
}

for (let i = 0; i < 5; i++) {
    playRound(getUserChoice(), getComputerChoice());
    if (i === 4) {
        checkWinner(playerScore, computerScore);
    }
 }
