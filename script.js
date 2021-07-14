//Initial VARIABLES
let l_body = document.getElementById("body");

//GameGuide
let l_gameGuide = document.getElementById("gameGuide");
let l_guideLink = document.getElementById("guideLink");
let l_closeGuideBtn = document.getElementById("closeGuideBtn");

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
let l_rockBtn = document.getElementById("rockBtn");
let l_paperBtn = document.getElementById("paperBtn");
let l_scissorsBtn = document.getElementById("scissorsBtn");

let l_userChoice = document.getElementById("userSelection");
let l_computerChoice = document.getElementById("computerSelection");
let l_userScore = document.getElementById("userScore");
let l_computerScore = document.getElementById("computerScore");

//Defaults
//gameScreen elements are hidden by default
for(let element of l_gameScreenItems) {
  element.remove();
}
//gameGuide is hidden by default
l_gameGuide.remove();

//BUTTON FUNCTIONALITY
//game guide
l_guideLink.addEventListener("click", function() {
  l_body.appendChild(l_gameGuide); //opens game guide
});
l_closeGuideBtn.addEventListener("click", function() {
  l_gameGuide.remove();
});

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
  //reset the images of the choices
  l_userChoice.src = "";
  l_computerChoice.src = "";
});

//User Selection Buttons
l_rockBtn.addEventListener("click", function() {
  //change image of userSelection to a rock
  l_userChoice.src = "img/rock/rock.jpg";

  if(playRound("rock") == 1) {
     alert("you won!");
  }
});

//GAME LOGIC
//randomly returns with 'rock', 'paper', or 'scissors'
function getComputerChoice() {
    //declare return variable
    let l_computerSelection = "";

    //generate a number between 1-100
    let determinator = parseInt(Math.random() * 100) + 1;
    
    //determine if that number will be a rock, paper or scissors
    if(determinator <= 33) {
        l_computerSelection = "rock";
    } else if(determinator > 33 && determinator <= 66) {
        l_computerSelection = "paper";
    } else {
        l_computerSelection = "scissors";
    }
    return l_computerSelection;
}

//handles logic of a round.  Returns a 0 for a draw, 1 for a player win, and -1 for a computer win
function playRound(a_playerChoice) {
  let l_computerSelection= getComputerChoice();
  if(a_playerChoice == l_computerSelection) {
    return 0;
  } else if((a_playerChoice == "rock" && l_computerSelection == "scissors") 
          || (a_playerChoice == "paper" && l_computerSelection == "rock")
          || (a_playerChoice == "scissors" && l_computerSelection == "paper")) {
    return 1;
  } else {
    return -1;
  }
}

/* Reset Animations
 * https://css-tricks.com/restart-css-animation/
 */