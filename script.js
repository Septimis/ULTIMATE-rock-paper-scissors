//Initial VARIABLES
let l_body = document.getElementById("body");

//HOMESCREEN
let l_homeScreenItems = document.querySelectorAll(".homeScreen");
let l_homeScreenClone = l_homeScreenItems;
let l_startGameBtn = document.getElementById("startButton");

//floatDown animation items
let l_floatItems = document.querySelectorAll(".animatedItems");

//upgrade buttons
let l_rockUpgradeBtn = document.getElementById("rockUpgradeBtn");
let l_paperUpgradeBtn = document.getElementById("paperUpgradeBtn");
let l_scissorUpgradeBtn = document.getElementById("scissorUpgradeBtn");
let l_expBonusBtn = document.getElementById("expBonusBtn");

//GAMESCREEN
let l_gameScreenItems = document.querySelectorAll(".gameScreen");
let l_returnBtn = document.getElementById("backBtnContainer");

//Defaults
//gameScreen elements are hidden by default
for(let i = 0; i < l_gameScreenItems.length; i++) {
  l_gameScreenItems[i].remove();
}

//BUTTON FUNCTIONALITY
//homeScreen
l_startGameBtn.addEventListener("click", function(e) {
  l_homeScreenClone = l_homeScreenItems;
  for(let i = 0; i < l_homeScreenItems.length; i++) {
    //remove homeScreen items
    l_homeScreenItems[i].remove();

    //add gameScreen items
    l_body.appendChild(l_gameScreenItems[i]);

  }
});

//GAMESCREEN
//button functionality
l_returnBtn.addEventListener("click", function(e) {
  for(let i = 0; i < l_gameScreenItems.length; i++) {
    //remove gameScreen items
    l_gameScreenItems[i].remove();

    //add homeScreen items
    l_body.appendChild(l_homeScreenItems[i]);
  }
});

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

/* Reset Animations
 * https://css-tricks.com/restart-css-animation/
 */