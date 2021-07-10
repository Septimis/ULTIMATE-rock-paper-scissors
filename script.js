//button functionality
let rockBtn = document.getElementById("rockBtn");
rockBtn.addEventListener("click", function() {
    playRound(computerPlay(), "rock");
});

let paperBtn = document.getElementById("paperBtn");
paperBtn.addEventListener("click", function() {
    playRound(computerPlay(), "paper");
});

let scissorsBtn = document.getElementById("scissorsBtn");
scissorsBtn.addEventListener("click", function() {
    playRound(computerPlay(), "scissors");
});

//randomly returns with 'Rock', 'Paper', or 'Scissors'
function computerPlay() {
    //declare return variable
    let l_computerChoice = "";

    //generate a number between 1-100
    let determinator = parseInt(Math.random() * 100) + 1;
    
    //determine if that number will be a rock, paper or scissors
    if(determinator <= 33) {
        l_computerChoice = "rock";
    } else if(determinator > 33 && determinator <= 66) {
        l_computerChoice = "paper";
    } else {
        l_computerChoice = "scissors";
    }
    return l_computerChoice;
}

//plays one round of rock, paper, scissors
function playRound(a_computerChoice, a_playerChoice) {
    //declare variable that  shows the winner --> 0 means draw, 1 means player point, 2 means computer point
    let winner = 0;

    //show who got what
    document.getElementById("results").innerText = `The computer chose ${a_computerChoice} & you chose ${a_playerChoice}`;

    //logic of the game
    if(a_computerChoice == a_playerChoice) {
        console.log(`Draw!  You both chose ${a_computerChoice}`);
        winner = 0;
    } else if(a_computerChoice == "rock" && a_playerChoice == "scissors") {
        winner = 2;
        console.log("The computer won!  Rock beats scissors!");
    } else if(a_computerChoice == "paper" && a_playerChoice == "rock") {
        winner = 2;
        console.log("The computer won!  Paper beats rock!");
    } else if(a_computerChoice == "scissors" && a_playerChoice == "paper") {
        winner = 2;
        console.log("The computer won!  Scissors beats paper!");
    } else if(a_playerChoice == "rock" && a_computerChoice == "scissors") {
        winner = 1;
        console.log("You won!  Rock beats scissors!");
    } else if(a_playerChoice == "paper" && a_computerChoice == "rock") {
        winner = 1;
        console.log("You won! Paper beats rock!");
    } else if(a_playerChoice == "scissors" && a_computerChoice == "paper") {
        winner = 1;
        console.log("You won! Scissors beats paper!");
    }
    return winner;
}