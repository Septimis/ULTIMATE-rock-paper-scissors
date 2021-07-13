//HOMESCREEN
//floatDown animation items
let startGameBtn = document.getElementById("startButton");
let userStats = document.getElementById("userStats");


//upgrade buttons
let rockUpgradeBtn = document.getElementById("rockUpgradeBtn");
let paperUpgradeBtn = document.getElementById("paperUpgradeBtn");
let scissorUpgradeBtn = document.getElementById("scissorUpgradeBtn");
let expBonusBtn = document.getElementById("expBonusBtn");

//button functionality
startGameBtn.addEventListener("click", function() {
    startGameBtn.
    userStats.style.animationPlayState = "initial";
});

//GAMESCREEN
//button functionality


//GAME LOGIC
//randomly returns with 'rock', 'paper', or 'scissors'
function getComputerChoice() {
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