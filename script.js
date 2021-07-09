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

function getChoice() {
    //get User Input
    let l_badInput = true;
    let l_playerChoice = "";
    //loop to verify for correct input
    do {
        l_playerChoice = prompt("Rock? Paper? Or Scissors?: ", "Your choice here...").toLowerCase();
        if(l_playerChoice == null) {
            alert("You didn't input anything!  Please try again...");
            l_badInput = true;
        } else if(l_playerChoice == "rock" || l_playerChoice == "paper" || l_playerChoice == "scissors") {
            l_badInput = false;
        } else {
            console.log("Please enter 'rock', 'paper', or 'scissors'...")
            l_badInput = true;
        }
    } while(l_badInput);
    return l_playerChoice;
}

//plays one round of rock, paper, scissors
function playRound(a_computerChoice, a_playerChoice) {
    //declare variable that  shows the winner --> 0 means draw, 1 means player point, 2 means computer point
    let winner = 0;

    //show who got what
    console.log(`The computer chose ${a_computerChoice} & you chose ${a_playerChoice}`);

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


function game() {
    //declare local variables
    let l_badInput = false;
    let l_numGames = 5;
    let l_playerScore = 0;
    let l_computerScore = 0;

    //loop to catch bad input
    do {
       try {
            l_numGames = parseInt(prompt("Enter the number of times you would like to play"));
            l_badInput = false;
        } catch(e) {
            alert("Incorrect input! Enter an integer and try again...");
            l_badInput = true;
        } 
    } while(l_badInput);
    
    //play numGames number of times
    for(let i = 0; i < l_numGames; i++) {
        let l_score = playRound(computerPlay(), getChoice());
        if(l_score == 1) {
            l_playerScore++;
        } else if(l_score == 2) {
            l_computerScore++;
        }
    }

    //announce winner
    console.log(`The score was:\nPlayer: ${l_playerScore}\nComputer: ${l_computerScore}`);
    if(l_playerScore == l_computerScore) {
        console.log("It was a DRAW!");
    } else if(l_playerScore > l_computerScore) {
        console.log("You won!")
    } else{
        console.log("The computer won!");
    }
}
//game();