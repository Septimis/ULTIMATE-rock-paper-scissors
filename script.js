//Initial VARIABLES
const l_body = document.getElementById("body");

//GameGuide
const l_gameGuide = document.getElementById("gameGuide");
const l_guideLink = document.getElementById("guideLink");
const l_victoryOrDeath = document.getElementById("victoryOrDeath");
const l_closeGuideBtn = document.getElementById("closeGuideBtn");

//Results Overview
const l_resultsScreen = document.getElementById("resultsPage");
const l_closeResultsBtn = document.getElementById("closeResultsBtn");

//HOMESCREEN
const l_homeScreenItems = document.querySelectorAll(".homeScreen");
let l_startGameBtn = document.getElementById("startButton");
const l_experienceDisplay = document.getElementById("currentExperience");
const l_activeEffects = document.getElementById("activeEffects");

//floatDown animation items
const l_floatItems = document.querySelectorAll(".animatedItems");

//upgrade table
const l_rockUpgradeBtn = document.getElementById("rockUpgradeBtn");
const l_paperUpgradeBtn = document.getElementById("paperUpgradeBtn");
const l_scissorUpgradeBtn = document.getElementById("scissorUpgradeBtn");
const l_expBonusBtn = document.getElementById("expBonusBtn");

const l_rockUpgradeTitle = document.getElementById("rockUpgradeTitle");
const l_paperUpgradeTitle = document.getElementById("paperUpgradeTitle");
const l_scissorsUpgradeTitle = document.getElementById("scissorsUpgradeTitle");

const l_rockUpgradeDescription = document.getElementById("rockUpgradeDescription");
const l_paperUpgradeDescription = document.getElementById("paperUpgradeDescription");
const l_scissorsUpgradeDescription = document.getElementById("scissorsUpgradeDescription");

const l_equippedRock = document.getElementById("equippedRock");
const l_equippedPaper = document.getElementById("equippedPaper");
const l_equippedScissors = document.getElementById("equippedScissors");

const l_rockNextUpgradeReqExp = document.getElementById("rockNextUpgradeReqExp");
const l_paperNextUpgradeReqExp = document.getElementById("paperNextUpgradeReqExp");
const l_scissorsNextUpgradeReqExp = document.getElementById("scissorsNextUpgradeReqExp");

//GAMESCREEN
const l_gameScreenItems = document.querySelectorAll(".gameScreen");
const l_returnBtn = document.getElementById("backBtnContainer");
const l_outcomeText = document.getElementById("outcomeText");
const l_rockBtn = document.getElementById("rockBtn");
const l_paperBtn = document.getElementById("paperBtn");
const l_scissorsBtn = document.getElementById("scissorsBtn");

const l_userChoice = document.getElementById("userSelection");
const l_computerChoice = document.getElementById("computerSelection");
const l_userScore = document.getElementById("userScore");
const l_computerScore = document.getElementById("computerScore");

//DEFAULTS
//gameScreen elements are hidden by default
for(let element of l_gameScreenItems) {
  element.remove();
}
//gameGuide is hidden by default
l_gameGuide.remove();

//results is hidden by default
l_resultsScreen.remove();

//computer choice chances are 33.33% at the beginning
let l_rockChance = 33.33;
let l_paperChance = 33.33;
let l_scissorsChance = 33.33;

//rank of each is 0 at the start
let l_rockRank = 0;
let l_paperRank = 0;
let l_scissorsRank = 0;

//cost of each upgrade
let l_rockUpgradeCost = 50;
let l_paperUpgradeCost = 50;
let l_scissorsUpgradeCost = 50;

//players start the game at 0 xp
let l_playerExperience = 0;

//player & computer start game at 0 points
let l_playerPoints = 0;
let l_computerPoints = 0;

//BUTTON FUNCTIONALITY
//game guide
l_guideLink.addEventListener("click", function() {
  l_body.appendChild(l_gameGuide); //opens game guide
});
l_closeGuideBtn.addEventListener("click", function() {
  l_gameGuide.remove();
});

//results overview
function showResults() {
	l_body.appendChild(l_resultsScreen);
}
l_closeResultsBtn.addEventListener("click", function() {
	l_resultsScreen.remove();
});

//homeScreen
l_startGameBtn.addEventListener("click", function(e) {
  for(let i = 0; i < l_homeScreenItems.length; i++) {
    //remove homeScreen items
    l_homeScreenItems[i].remove();

    //add gameScreen items
    l_body.appendChild(l_gameScreenItems[i]);

  }

	//reset points
	l_playerPoints = 0;
	l_computerPoints = 0;
});
//upgrade buttons
l_rockUpgradeBtn.addEventListener("click", function() {
	//check if they even have enough xp
	if(l_playerExperience >= l_rockUpgradeCost) {
		if(l_rockRank == 4) {
			l_rockUpgradeBtn.disabled = true;
			l_rockUpgradeBtn.innerText = "Maxed Out";
			l_rockUpgradeBtn.classList.remove("glow");
		}

		//decrease player Experience accordingly
		l_playerExperience -= l_rockUpgradeCost;

		//increase cost of next upgrade
		switch(l_rockRank) {
			case 0:
				l_rockUpgradeCost = 100;
				l_equippedRock.innerText = "Coal";
				l_rockUpgradeTitle.innerText = "Quartz";
				l_rockUpgradeDescription.innerText = "There is a 75% chance on a loss this round that your opponent will not gain a point.";
				break;
			case 1:
				l_rockUpgradeCost = 200;
				l_equippedRock.innerText = "Quartz";
				l_rockUpgradeTitle.innerText = "Topaz";
				l_rockUpgradeDescription.innerText = "There is a 75% chance on your next loss this game that your opponent will not gain a point.";
				break;
			case 2:
				l_rockUpgradeCost = 500;
				l_equippedRock.innerText = "Topaz"
				l_rockUpgradeTitle.innerText = "Moissanite";
				l_rockUpgradeDescription.innerText = "There is a 75% chance on a loss this round that your opponent will not gain a point and a 50% chance that your opponent will not gain a point on your next loss this game.";
				break;
			case 3:
				l_rockUpgradeCost = 1000;
				l_equippedRock.innerText = "Moissanite";
				l_rockUpgradeTitle.innerText = "Diamond";
				l_rockUpgradeDescription.innerText = "There is a 90% chance on a loss this round that your opponent will not gain a point and a 90% chance on your next loss this game that your opponent will not gain a point.";
				break;
			case 4:
				l_rockUpgradeCost = 9999;
				l_equippedRock.innerText = "Diamond";
				l_rockUpgradeTitle.innerText = "Fully Upgraded";
				l_rockUpgradeDescription.innerText = "";
				break;
		}

		//increase rank of rock
		l_rockRank++;

		//update the expreience counter at the Top 
		l_experienceDisplay.innerText = l_playerExperience + " xp";


		//adjust the necessary elements to reflect the upgrade
		if(l_rockRank == 5) {
			l_rockNextUpgradeReqExp.innerText = "";
		} else {
			l_rockNextUpgradeReqExp.innerText = l_rockUpgradeCost + " xp";
		}
		
		
		//adjust the chance that the computer will choose paper over rock and scissors
		l_rockChance -= 1;
		l_paperChance += 2;
		l_scissorsChance -= 1;
	} else {
		alert(`You need ${l_rockUpgradeCost - l_playerExperience} more experience to upgrade!  Play more games to increase your experience!`);
	}
	
});

l_paperUpgradeBtn.addEventListener("click", function() {
	if(l_playerExperience >= l_paperUpgradeCost) {
		if(l_paperRank == 4) {
			l_paperUpgradeBtn.disabled = true;
			l_paperUpgradeBtn.innerText = "Maxed Out";
			l_paperUpgradeBtn.classList.remove("glow");
		}

		//decrease player Experience accordingly
		l_playerExperience -= l_rockUpgradeCost;

		switch(l_paperRank) {
			case 0:
				l_paperUpgradeCost = 100;
				l_equippedPaper.innerText = "Scroll";
				l_paperUpgradeTitle.innerText = "Spellbook";
				l_paperUpgradeDescription.innerText = "Upon winning with paper, there is a 75% chance to activate a common spell, a 20% chance to activate a rare spell, and a 5% chance to activate an epic spell.";
				break;
			case 1:
				l_paperUpgradeCost = 200;
				l_equippedPaper.innerText = "Spellbook";
				l_paperUpgradeTitle.innerText = "Lexicon";
				l_paperUpgradeDescription.innerText = "Upon winning with paper, there is a 25% chance to activate a common spell, a 50% chance to activate a rare spell, and a 25% chance to activate an epic spell.";
				break;
			case 2:
				l_paperUpgradeCost = 500;
				l_equippedPaper.innerText = "Lexicon"
				l_paperUpgradeTitle.innerText = "Grimoire";
				l_paperUpgradeDescription.innerText = "Upon winning with paper, there is a 60% chance to activate a rare spell, a 35% chance to activate an epic spell, and a 5% chance to activate a LEGENDARY spell.";
				break;
			case 3:
				l_paperUpgradeCost = 1000;
				l_equippedPaper.innerText = "Grimoire";
				l_paperUpgradeTitle.innerText = "Sovereign Intellect";
				l_paperUpgradeDescription.innerText = "Regardless of the outcome, there is a 30% chance to activate a rare spell, a 60% chance to activate an epic spell, and a 10% chance to activate a LEGENDARY spell.";
				break;
			case 4:
				l_paperUpgradeCost = 9999;
				l_equippedPaper.innerText = "Sovereign Intellect";
				l_paperUpgradeTitle.innerText = "Fully Upgraded";
				l_paperUpgradeDescription.innerText = "";
				break;
		}

		//incrase rank of paper
		l_paperRank++;

		//update the expreience counter at the Top 
		l_experienceDisplay.innerText = l_playerExperience + " xp";

		if(l_paperRank == 5) {
			l_paperNextUpgradeReqExp.innerText = "";
		} else {
			l_paperNextUpgradeReqExp.innerText = l_paperUpgradeCost + " xp";
		}

		//adjust the chance that the computer will choose paper over rock or scissors
		l_rockChance -= 1;
		l_paperChance -= 1;
		l_scissorsChance += 2;
	} else {
		alert(`You need ${l_paperUpgradeCost - l_playerExperience} more experience to upgrade!  Play more games to increase your experience!`);
	}
	
});

l_scissorUpgradeBtn.addEventListener("click", function() {
	if(l_playerExperience >= l_scissorsUpgradeCost) {
		if(l_scissorsRank == 4) {
			l_scissorUpgradeBtn.disabled = true;
			l_scissorUpgradeBtn.innerText = "Maxed Out";
			l_scissorUpgradeBtn.classList.remove("glow");
		}

		//decrease player Experience accordingly
		l_playerExperience -= l_rockUpgradeCost;

		switch(l_scissorsRank) {
			case 0:
				l_scissorsUpgradeCost = 100;
				l_equippedScissors.innerText = "Kitchen Scissors";
				l_scissorsUpgradeTitle.innerText = "Sheep Shears";
				l_scissorsUpgradeDescription.innerText = "Upon winning with scissors, there is a 75% chance to gain an additional point.";
				break;
			case 1:
				l_scissorsUpgradeCost = 200;
				l_equippedScissors.innerText = "Trauma Scissors";
				l_scissorsUpgradeTitle.innerText = "Sheep Shears";
				l_scissorsUpgradeDescription.innerText = "Upon winning with scissors, there is a 75% chance to gain an additional point, or a 10% chance to gain 2 additional points.";
				break;
			case 2:
				l_scissorsUpgradeCost = 500;
				l_equippedScissors.innerText = "Sheep Shears"
				l_scissorsUpgradeTitle.innerText = "Bolt Cutters";
				l_scissorsUpgradeDescription.innerText = "Upon winning with scissors, there is a 75% chance to gain an additional point, or a 20% chance to gain 2 additional points.";
				break;
			case 3:
				l_scissorsUpgradeCost = 1000;
				l_equippedScissors.innerText = "Bolt Cutters";
				l_scissorsUpgradeTitle.innerText = "Gro'noth, Destroyer of Worlds";
				l_scissorsUpgradeDescription.innerText = "Upon losing with scissors, you have a 50% chance of gaining an additional point. If you win with scissors, there is a 50% chance to gain 2 additional points, and a 10% chance to win the game immedietly.";
				break;
			case 4:
				l_scissorsUpgradeCost = 9999;
				l_equippedScissors.innerText = "Gro'noth, Destroyer of Worlds";
				l_scissorsUpgradeTitle.innerText = "Fully Upgraded";
				l_scissorsUpgradeDescription.innerText = "";
				break;
		}

		//increase rank of scissors
		l_scissorsRank++;

		//update the expreience counter at the Top 
		l_experienceDisplay.innerText = l_playerExperience + " xp";

		if(l_scissorsRank == 5) {
			l_scissorsNextUpgradeReqExp.innerText = "";
		} else {
			l_scissorsNextUpgradeReqExp.innerText = l_scissorsUpgradeCost + " xp";
		}

		//adjust the chance that the computer will choose scissors over rock or paper
		l_rockChance += 2;
		l_paperChance -= 1;
		l_scissorsChance -= 1;
	} else {
		alert(`You need ${l_scissorsUpgradeCost - l_playerExperience} more experience to upgrade!  Play more games to increase your experience!`);
	}
});

//GAMESCREEN
//button functionality
l_returnBtn.addEventListener("click", returnToHome());

function returnToHome() {
	for(let i = 0; i < l_gameScreenItems.length; i++) {
    //remove gameScreen items
    l_gameScreenItems[i].remove();

    //add homeScreen items
    l_body.appendChild(l_homeScreenItems[i]);
  }
  //reset the images of the choices
  l_userChoice.src = "";
  l_computerChoice.src = "";
}

//User Selection Buttons
l_rockBtn.addEventListener("click", function() {
  //change image of userSelection to a rock
  l_userChoice.src = "img/rock/rock.jpg";

	let l_outcome = playRound("rock");

	//outcome logic
	if(l_outcome == -1) { //loss
		l_outcomeText.innerText = "You Lost!";
		l_computerPoints++;
		l_computerScore.innerText = l_computerPoints;
	} else if(l_outcome == 0) { //draw
		l_outcomeText.innerText = "Draw!";
	} else if(l_outcome == 1) { //win
		l_outcomeText.innerText = "You won!";
		l_playerPoints++;
		l_userScore.innerText = l_playerPoints;
	}

	//test if the player or computer has won the game
	if(l_playerPoints >= 5) {
		returnToHome();
		l_victoryOrDeath.innerText = "VICTORY!";
		showResults();
	} else if(l_computerPoints == 5) {
		returnToHome();
		l_victoryOrDeath.innerText = "DEFEAT";
		showResults();
	}
});
l_paperBtn.addEventListener("click", function() {
	l_userChoice.src = "img/paper/paper.jpg";

	let l_outcome = playRound("paper");

	//outcome logic
	if(l_outcome == -1) { //loss
		l_outcomeText.innerText = "You Lost!";
		l_computerPoints++;
		l_computerScore.innerText = l_computerPoints;
	} else if(l_outcome == 0) { //draw
		l_outcomeText.innerText = "Draw!";
	} else if(l_outcome == 1) { //win
		l_outcomeText.innerText = "You won!";
		l_playerPoints++;
		l_userScore.innerText = l_playerPoints;
	}

	//test if the player or computer has won the game
	if(l_playerPoints >= 5) {
		returnToHome();
		l_victoryOrDeath.innerText = "VICTORY!";
		showResults();
	} else if(l_computerPoints == 5) {
		returnToHome();
		l_victoryOrDeath.innerText = "DEFEAT";
		showResults();
	}
});
l_scissorsBtn.addEventListener("click", function() {
	l_userChoice.src = "img/scissors/scissors.jpg";

	let l_outcome = playRound("scissors");

	//outcome logic
	if(l_outcome == -1) { //loss
		l_outcomeText.innerText = "You Lost!";
		l_computerPoints++;
		l_computerScore.innerText = l_computerPoints;
	} else if(l_outcome == 0) { //draw
		l_outcomeText.innerText = "Draw!";
	} else if(l_outcome == 1) { //win
		l_outcomeText.innerText = "You won!";
		l_playerPoints++;
		l_userScore.innerText = l_playerPoints;
	}
	//test if the player or computer has won the game
	if(l_playerPoints >= 5) {
		returnToHome();
		l_victoryOrDeath.innerText = "VICTORY!";
		showResults();
	} else if(l_computerPoints == 5) {
		returnToHome();
		l_victoryOrDeath.innerText = "DEFEAT";
		showResults();
	}
});

//GAME LOGIC
//randomly returns with 'rock', 'paper', or 'scissors'
function getComputerChoice() {
    //declare return variable
    let l_computerSelection = "";

    //generate a number between 1-100
    let l_determinator = parseInt(Math.random() * 100) + 1;
		
		let l_rockDeterminator = l_rockChance;
		let l_paperDeterminator = l_rockChance + l_paperChance;

    //determine if that number will be a rock, paper or scissors
    if(l_determinator <= l_rockDeterminator) {
			l_computerSelection = "rock";
		} else if(l_determinator <= l_paperDeterminator) {
			l_computerSelection = "paper";
		} else {
			l_computerSelection = "scissors";
		}
		l_computerChoice.src = `img/${l_computerSelection}/${l_computerSelection}.jpg`;
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