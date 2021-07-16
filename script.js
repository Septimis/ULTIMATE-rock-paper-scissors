//NEXT TODO:
//Fix the Results Page when inserting and deleting cells
//The final column keeps getting deleted

//Initial VARIABLES
const l_body = document.getElementById("body");

//GameGuide
const l_gameGuide = document.getElementById("gameGuide");
const l_guideLink = document.getElementById("guideLink");
const l_closeGuideBtn = document.getElementById("closeGuideBtn");

//Results Overview
const l_resultsScreen = document.getElementById("resultsPage");
const l_closeResultsBtn = document.getElementById("closeResultsBtn");
const l_victoryOrDeath = document.getElementById("victoryOrDeath");

const l_baseExpBreakdown = document.getElementById("baseExpBreakdown");
const l_winMarginText = document.getElementById("winMargin");
const l_expMultiplierBreakdown = document.getElementById("expMultiplierBreakdown");
const l_experienceFinal = document.getElementById("experienceBreakdown");
const l_resultsHeaderRow = document.getElementById("resultsHeaderRow");
const l_resultsBreakdownRow = document.getElementById("resultsBreakdownRow");

//spell effect screen & children
const m_spellEffectScreen = document.getElementById("spellEffect")
const m_spellEffectTitle = document.getElementById("spellEffectTitle");
const m_spellDescription = document.getElementById("spellEffectDescription");


//HOMESCREEN
const l_homeScreenItems = document.querySelectorAll(".homeScreen");
const l_startGameBtn = document.getElementById("startButton");
const l_experienceDisplay = document.getElementById("currentExperience");
const l_activeEffects = document.getElementById("activeEffects");

//floatDown animation items
const l_floatItems = document.querySelectorAll(".animatedItems");

//upgrade table
const l_rockUpgradeBtn = document.getElementById("rockUpgradeBtn");
const l_paperUpgradeBtn = document.getElementById("paperUpgradeBtn");
const l_scissorUpgradeBtn = document.getElementById("scissorUpgradeBtn");
const l_expBonusBtn = document.getElementById("expBonusBtn");

const l_rockRankText = document.getElementById("rockRank");
const l_paperRankText = document.getElementById("paperRank");
const l_scissorsRankText = document.getElementById("scissorsRank");

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

//results is hidden by default
l_resultsScreen.remove();

//spell effects are hidden by default
m_spellEffectScreen.remove();

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
let l_pointMultiplier = 1;

//spell VARIABLES
let l_spellFlatExperienceBonus = 0;
let l_spellExperienceMultiplier = 1;

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
	//reset spell multiplier
	if(l_spellExperienceMultiplier > 1) {
		l_resultsHeaderRow.deleteCell(4);
		l_resultsBreakdownRow.deleteCell(4);
	}
	//reset spell experience gains
	if(l_spellFlatExperienceBonus > 0){
		l_resultsHeaderRow.deleteCell(4);
		l_resultsBreakdownRow.deleteCell(4);
	}

	//reset spell pertinent spell effects
	l_spellFlatExperienceBonus = 0;
	l_spellExperienceMultiplier = 1;

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
				l_rockRankText.innerText = "I";
				l_rockUpgradeTitle.innerText = "Quartz";
				l_rockUpgradeDescription.innerText = "There is a 75% chance on a loss this round that your opponent will not gain a point.";
				break;
			case 1:
				l_rockUpgradeCost = 200;
				l_equippedRock.innerText = "Quartz";
				l_rockRankText.innerText = "II";
				l_rockUpgradeTitle.innerText = "Topaz";
				l_rockUpgradeDescription.innerText = "There is a 75% chance on your next loss this game that your opponent will not gain a point.";
				break;
			case 2:
				l_rockUpgradeCost = 500;
				l_equippedRock.innerText = "Topaz"
				l_rockRankText.innerText = "III";
				l_rockUpgradeTitle.innerText = "Moissanite";
				l_rockUpgradeDescription.innerText = "There is a 75% chance on a loss this round that your opponent will not gain a point and a 50% chance that your opponent will not gain a point on your next loss this game.";
				break;
			case 3:
				l_rockUpgradeCost = 1000;
				l_equippedRock.innerText = "Moissanite";
				l_rockRankText.innerText = "IV";
				l_rockUpgradeTitle.innerText = "Diamond";
				l_rockUpgradeDescription.innerText = "There is a 90% chance on a loss this round that your opponent will not gain a point and a 90% chance on your next loss this game that your opponent will not gain a point.";
				break;
			case 4:
				l_rockUpgradeCost = 9999;
				l_equippedRock.innerText = "Diamond";
				l_rockRankText.innerText = "V";
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
		l_playerExperience -= l_paperUpgradeCost;

		switch(l_paperRank) {
			case 0:
				l_paperUpgradeCost = 100;
				l_equippedPaper.innerText = "Scroll";
				l_paperRankText.innerText = "I";
				l_paperUpgradeTitle.innerText = "Spellbook";
				l_paperUpgradeDescription.innerText = "Upon winning with paper, there is a 75% chance to activate a common spell, a 20% chance to activate a rare spell, and a 5% chance to activate an epic spell.";
				break;
			case 1:
				l_paperUpgradeCost = 200;
				l_equippedPaper.innerText = "Spellbook";
				l_paperRankText.innerText = "II";
				l_paperUpgradeTitle.innerText = "Lexicon";
				l_paperUpgradeDescription.innerText = "Upon winning with paper, there is a 25% chance to activate a common spell, a 50% chance to activate a rare spell, and a 25% chance to activate an epic spell.";
				break;
			case 2:
				l_paperUpgradeCost = 500;
				l_equippedPaper.innerText = "Lexicon"
				l_paperRankText.innerText = "III";
				l_paperUpgradeTitle.innerText = "Grimoire";
				l_paperUpgradeDescription.innerText = "Upon winning with paper, there is a 60% chance to activate a rare spell, a 35% chance to activate an epic spell, and a 5% chance to activate a LEGENDARY spell.";
				break;
			case 3:
				l_paperUpgradeCost = 1000;
				l_equippedPaper.innerText = "Grimoire";
				l_paperRankText.innerText = "IV";
				l_paperUpgradeTitle.innerText = "Sovereign Intellect";
				l_paperUpgradeDescription.innerText = "Regardless of the outcome, there is a 30% chance to activate a rare spell, a 60% chance to activate an epic spell, and a 10% chance to activate a LEGENDARY spell.";
				break;
			case 4:
				l_paperUpgradeCost = 9999;
				l_equippedPaper.innerText = "Sovereign Intellect";
				l_paperRankText.innerText = "V";
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
		l_playerExperience -= l_scissorsUpgradeCost;

		switch(l_scissorsRank) {
			case 0:
				l_scissorsUpgradeCost = 100;
				l_equippedScissors.innerText = "Kitchen Scissors";
				l_scissorsRankText.innerText = "I";
				l_scissorsUpgradeTitle.innerText = "Sheep Shears";
				l_scissorsUpgradeDescription.innerText = "Upon winning with scissors, there is a 75% chance to gain an additional point.";
				break;
			case 1:
				l_scissorsUpgradeCost = 200;
				l_equippedScissors.innerText = "Trauma Scissors";
				l_scissorsRankText.innerText = "II";
				l_scissorsUpgradeTitle.innerText = "Sheep Shears";
				l_scissorsUpgradeDescription.innerText = "Upon winning with scissors, there is a 75% chance to gain an additional point, or a 10% chance to gain 2 additional points.";
				break;
			case 2:
				l_scissorsUpgradeCost = 500;
				l_equippedScissors.innerText = "Sheep Shears"
				l_scissorsRankText.innerText = "III";
				l_scissorsUpgradeTitle.innerText = "Bolt Cutters";
				l_scissorsUpgradeDescription.innerText = "Upon winning with scissors, there is a 75% chance to gain an additional point, or a 20% chance to gain 2 additional points.";
				break;
			case 3:
				l_scissorsUpgradeCost = 1000;
				l_equippedScissors.innerText = "Bolt Cutters";
				l_scissorsRankText.innerText = "IV";
				l_scissorsUpgradeTitle.innerText = "Gro'noth, Destroyer of Worlds";
				l_scissorsUpgradeDescription.innerText = "Upon losing with scissors, you have a 50% chance of gaining an additional point. If you win with scissors, there is a 50% chance to gain 2 additional points, and a 10% chance to win the game immedietly.";
				break;
			case 4:
				l_scissorsUpgradeCost = 9999;
				l_equippedScissors.innerText = "Gro'noth, Destroyer of Worlds";
				l_scissorsRankText.innerText = "V";
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

l_expBonusBtn.addEventListener("click", function() {
	//deduct experience from user
	l_playerExperience -= 25;

	//apply bonus xp
	if(l_pointMultiplier == 1) {
		l_pointMultiplier = 2;
	} else {
		l_pointMultiplier += 2;
	}

	//reflect changes on active activeEffects & experience
	l_activeEffects.innerText = `Experience Bonus: ${l_pointMultiplier}`;
	l_experienceDisplay.innerText = l_playerExperience + " xp";
});

//GAMESCREEN
//button functionality
l_returnBtn.addEventListener("click", function() {
	returnToHome();
});

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
		l_outcomeText.style.color = "red";
		l_computerPoints++;
		l_computerScore.innerText = l_computerPoints;
	} else if(l_outcome == 0) { //draw
		l_outcomeText.innerText = "Draw!";
		l_outcomeText.style.color = "white";
	} else if(l_outcome == 1) { //win
		l_outcomeText.innerText = "You won!";
		l_outcomeText.style.color = "green";
		l_playerPoints++;
		l_userScore.innerText = l_playerPoints;
	}

	//test if the player or computer has won the game
	if(l_playerPoints >= 5) {
		endGame(true);
	} else if(l_computerPoints == 5) {
		endGame(false);
	}
});
l_paperBtn.addEventListener("click", function() {
	l_userChoice.src = "img/paper/paper.jpg";

	let l_outcome = playRound("paper");

	//outcome logic
	if(l_outcome == -1) { //loss
		l_outcomeText.innerText = "You Lost!";
		l_outcomeText.style.color = "red";
		l_computerPoints++;
		l_computerScore.innerText = l_computerPoints;
	} else if(l_outcome == 0) { //draw
		l_outcomeText.innerText = "Draw!";
	} else if(l_outcome == 1) { //win
		//spells
		if(l_paperRank == 1) {
			let l_determinator = getRandomInt(1, 100);
			if(l_determinator <= 50) {
				console.log("casting a common spell");
				commonSpell();
			} else if(l_determinator <= 55) {
				console.log("casting a rare spell");
				rareSpell();
			}

		} else if(l_paperRank == 2) {

		} else if(l_paperRank == 3) {

		} else if(l_paperRank == 4) {

		} else if(l_paperRank == 5) {

		}

		l_outcomeText.innerText = "You won!";
		l_outcomeText.style.color = "green";
		l_playerPoints++;
		l_userScore.innerText = l_playerPoints;
	}

	//test if the player or computer has won the game
	if(l_playerPoints >= 5) {
		endGame(true);
	} else if(l_computerPoints == 5) {
		endGame(false);
	}
});

//spell functions
function commonSpell() {
	//determine the spell that will be cast
	const l_determinator = getRandomInt(1, 3);
	m_spellEffectTitle.innerText = "Common";
	m_spellEffectTitle.style.color = "grey";
	
	if(l_determinator == 1) { //+1-5 xp
		let l_awardedXpBonus = getRandomInt(1, 5);
		l_spellFlatExperienceBonus += l_awardedXpBonus;
		m_spellDescription.innerText = `+${l_awardedXpBonus} experience`;
	} else if(l_determinator == 2) { //random background Color
		//repeat if the color isn't dark enough
		let l_tooLight = true;
		let l_color;
		while(l_tooLight) {;
			//generate the random background
			let l_options = "0123456789ABCDEF"
			l_color = "#";
			for(let i = 0; i < 6; i++) {
				l_color += l_options[getRandomInt(0, 15)];
			}
			console.log(`color: ${l_color}`);
			//test if the color is too light.
			if(parseInt(l_color) > 16565444) {
				l_tooLight = true;
				console.log("too light");
			} else {
				l_tooLight = false;
			}
		}

		//set background temporarily
		l_body.style.backgroundColor = l_color;
		m_spellDescription.innerText = "Changed background!";
	} else if(l_determinator == 3) { //Randomize the Scores
		m_spellDescription.innerText = "Randomized Scores!";
		l_playerPoints = getRandomInt(0, 4);
		l_userScore.innerText = l_playerPoints;
		l_computerPoints = getRandomInt(0, 4);
		l_computerScore.innerText = l_computerPoints;
	}
	//show the spell
	showSpell();
}
function rareSpell() {
	m_spellEffectTitle.innerText = "Rare";
	m_spellEffectTitle.style.color = "blue";

	//determine which spell will be cast
	const l_determinator = getRandomInt(1, 4);

	switch(l_determinator) {
		//+20 xp bonus
		case 1:
			l_spellFlatExperienceBonus += 20;
			m_spellDescription.innerText = '+20 experience';
			break;
		//Gain x2 xp bonus
		case 2:
			if(l_spellExperienceMultiplier == 1) {
				l_spellExperienceMultiplier = 2;
			} else {
				l_spellExperienceMultiplier += 2;
			}
			break;
		//Win the next draw
		case 3:
			break;
		//Reverse Scores
		case 4:
			break;
	}

	showSpell();
}
function epicSpell() {
	m_spellEffectTitle.innerText = "Epic";
	m_spellEffectTitle.style.color = "purple";

}
function legendarySpell() {
	m_spellEffectTitle.innerText = "LEGENDARY";
	m_spellEffectTitle.style.color = "orange";

}
async function showSpell() {
	console.log("START OF SHOW SPELL");
	l_body.appendChild(m_spellEffectScreen);
	m_spellEffectScreen.classList.add("fadeInItems");
	await sleep(2000);
	m_spellEffectScreen.classList.remove("fadeInItems");
	m_spellEffectScreen.classList.add("fadeOutItems");
	await sleep(2000);
	m_spellEffectScreen.classList.remove("fadeOutItems");
	m_spellEffectScreen.remove();
	//m_spellEffectScreen.classList.remove("fadeOutItems");
	console.log("END OF SHOW SPELL");
}

l_scissorsBtn.addEventListener("click", function() {
	l_userChoice.src = "img/scissors/scissors.jpg";

	let l_outcome = playRound("scissors");

	//outcome logic
	if(l_outcome == -1) { //loss
		l_outcomeText.innerText = "You Lost!";
		l_outcomeText.style.color = "red";
		l_computerPoints++;
		l_computerScore.innerText = l_computerPoints;
	} else if(l_outcome == 0) { //draw
		l_outcomeText.innerText = "Draw!";
	} else if(l_outcome == 1) { //win
		l_outcomeText.innerText = "You won!";
		l_outcomeText.style.color = "green";
		l_playerPoints++;
		l_userScore.innerText = l_playerPoints;
	}
	//test if the player or computer has won the game
	if(l_playerPoints >= 5) {
		endGame(true);
	} else if(l_computerPoints == 5) {
		endGame(false);
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

//wraps up the final score
function endGame(a_isVictorious) {
	//reset game Elements
	l_userScore.innerText = "0";
	l_computerScore.innerText = "0";
	l_outcomeText.innerText = "";

	if(a_isVictorious) {
		returnToHome();

		showResults();
		l_victoryOrDeath.innerText = "VICTORY!";
		l_victoryOrDeath.style.color ="green";
		
		//calcuate points
		l_playerExperience += 5 * (l_playerPoints - l_computerPoints) * l_pointMultiplier * l_spellExperienceMultiplier + l_spellFlatExperienceBonus;
		l_experienceDisplay.innerText = l_playerExperience + " xp";

		//show breakown correctly
		l_baseExpBreakdown.innerText = "5";
		l_winMarginText.innerText = l_playerPoints - l_computerPoints;
		l_expMultiplierBreakdown.innerText = l_pointMultiplier;
		l_experienceFinal.innerText = 5 * (l_playerPoints - l_computerPoints) * l_pointMultiplier * l_spellExperienceMultiplier + l_spellFlatExperienceBonus;

		//if there was added xp from spells, add that in the table here
		if(l_spellExperienceMultiplier > 1) { //tests if there was a multiplier added
			let l_addedSpellMultiplierTitle = l_resultsHeaderRow.insertCell(4);
			l_addedSpellMultiplierTitle.innerText = "Spell Multiplier";
			l_addedSpellMultiplierTitle.style.fontSize = "16px";
			l_addedSpellMultiplierTitle.style.fontWeight = "bold";
			let l_addedSpellMultiplierData = l_resultsBreakdownRow.insertCell(4);
			l_addedSpellMultiplierData.innerText = l_spellExperienceMultiplier;
		
		}
		if(l_spellFlatExperienceBonus > 0) {
			let l_addedFlatExpCellTitle = l_resultsHeaderRow.insertCell(4);
			l_addedFlatExpCellTitle.innerText = "Flat Spell Bonus";
			l_addedFlatExpCellTitle.style.fontSize = "16px";
			l_addedFlatExpCellTitle.style.fontWeight = "bold";
			let l_addedFlatExpCellData = l_resultsBreakdownRow.insertCell(4);
			l_addedFlatExpCellData.style.fontSize = "16px";
			l_addedFlatExpCellData.innerText = `+ ${l_spellFlatExperienceBonus}`;
		}
	} else {
		returnToHome();
		showResults();

		l_baseExpBreakdown.innerText = 0;
		l_winMarginText.innerText = 0;
		l_expMultiplierBreakdown.innerText = l_pointMultiplier;
		l_experienceFinal.innerText = 0;

		l_victoryOrDeath.innerText = "DEFEAT";
		l_victoryOrDeath.style.color ="red";
	}

	//reset activeEffects
	l_activeEffects.innerText = "";
	l_pointMultiplier = 1;
	l_body.style.backgroundColor = "black";
}

//returns an int between two numbers (ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

//sleeps for ms amount (ref: https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep)
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}