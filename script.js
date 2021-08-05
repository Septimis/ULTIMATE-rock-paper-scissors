/* Credit:
 *   Connor Meads
 *   https://github.com/Septimis/rock-paper-scissors
 * 
 * VARIABLE NAMING CONVENTION
 * -----------------------------
 * l_ = local variable
 * m_ = member variable
 * a_ = argument variable
 */
``
//start the time 
const m_startTime = new Date().getTime();
//Initial VARIABLES
const m_body = document.getElementById("body");

//GameGuide
let m_guideIsOpen = false;
showGuide(); //opens the guide by default
const m_guideLink = document.getElementById("guideLink");

//HOMESCREEN
const m_homeScreenItems = document.querySelectorAll(".homeScreen");
const m_startGameBtn = document.getElementById("startButton");
const m_experienceDisplay = document.getElementById("currentExperience");
const m_activeEffects = document.getElementById("activeEffects");

//floatDown animation items
const m_floatItems = document.querySelectorAll(".animatedItems");

//upgrade table
const m_rockUpgradeBtn = document.getElementById("rockUpgradeBtn");
const m_paperUpgradeBtn = document.getElementById("paperUpgradeBtn");
const m_scissorUpgradeBtn = document.getElementById("scissorUpgradeBtn");
const m_expBonusBtn = document.getElementById("expBonusBtn");
const m_expBonusCostSpan = document.getElementById("expBonusCost");

const m_rockRankText = document.getElementById("rockRank");
const m_paperRankText = document.getElementById("paperRank");
const m_scissorsRankText = document.getElementById("scissorsRank");

const m_rockUpgradeTitle = document.getElementById("rockUpgradeTitle");
const m_paperUpgradeTitle = document.getElementById("paperUpgradeTitle");
const m_scissorsUpgradeTitle = document.getElementById("scissorsUpgradeTitle");

const m_rockUpgradeDescription = document.getElementById("rockUpgradeDescription");
const m_paperUpgradeDescription = document.getElementById("paperUpgradeDescription");
const m_scissorsUpgradeDescription = document.getElementById("scissorsUpgradeDescription");

const m_xpSlider = document.getElementById("xpSlider");
const m_xpTextBox = document.getElementById("xpTextBox");

const m_equippedRock = document.getElementById("equippedRock");
const m_equippedPaper = document.getElementById("equippedPaper");
const m_equippedScissors = document.getElementById("equippedScissors");

const m_rockNextUpgradeReqExp = document.getElementById("rockNextUpgradeReqExp");
const m_paperNextUpgradeReqExp = document.getElementById("paperNextUpgradeReqExp");
const m_scissorsNextUpgradeReqExp = document.getElementById("scissorsNextUpgradeReqExp");

const m_endGameBtn = document.getElementById("endGameBtn");

//GAMESCREEN
const m_gameScreenItems = document.querySelectorAll(".gameScreen");
const m_returnBtn = document.getElementById("backBtnContainer");
const m_outcomeText = document.getElementById("outcomeText");
const m_rockBtn = document.getElementById("rockBtn");
const m_paperBtn = document.getElementById("paperBtn");
const m_scissorsBtn = document.getElementById("scissorsBtn");

const m_userChoice = document.getElementById("userSelection");
const m_computerChoice = document.getElementById("computerSelection");
const m_userScore = document.getElementById("userScore");
const m_computerScore = document.getElementById("computerScore");

//ACHIEVEMENTS
const m_paperDwayne = document.getElementById("dwayneAchievment");
const m_achievements = document.querySelectorAll(".achievments");

//DEFAULTS
//gameScreen elements are hidden by default
for(let element of m_gameScreenItems) {
  element.remove();
}

//computer choice chances are 33.33% at the beginning
let m_rockChance = 33.33;
let m_paperChance = 33.33;
let m_scissorsChance = 33.33;

//rank of each is 0 at the start
let m_rockRank = 0;
let m_paperRank = 0;
let m_scissorsRank = 0;

//cost of each upgrade
let m_rockUpgradeCost = 50;
let m_paperUpgradeCost = 50;
let m_scissorsUpgradeCost = 50;
let m_expBonusCost = 15;

//players start the game at 0 xp
let m_playerExperience = 0;

//player & computer start game at 0 points
let m_playerPoints = 0;
let m_computerPoints = 0;
let m_pointMultiplier = 1;

//spell VARIABLES
let m_spellFlatExperienceBonus = 0;
let m_spellExperienceMultiplier = 1;
let m_spellWinNextDraw = false;
let m_spellWinAllDraws = false;
let m_numEpicSpells = 4;
let m_numLegendarySpells = 3;
let m_hasRockDwayne = false;
let m_hasPaperDwayne = false;
let m_hasScissorsDwayne = false;

//achievement VARIABLES
let m_virginPlayer = true;
let m_favoritism = false;
let m_perfection = false;
let m_hasExpAchiev = false;

let m_numRockPlays = 0;
let m_numPaperPlays = 0;
let m_numScissorsPlays = 0;

//rock special VARIABLES
let m_protected = false;

//BUTTON FUNCTIONALITY
//game guide
m_guideLink.addEventListener("click", function() {
	showGuide();
});
function showGuide() {
	//check if there is already a game guide open
	if(!m_guideIsOpen) {
		m_guideIsOpen = true;
		//create the game guide 
		const l_gameGuideContainer = document.createElement("div");
		l_gameGuideContainer.style.position = "fixed";
		l_gameGuideContainer.style.top = "15%";
		l_gameGuideContainer.style.left = "50%";
		l_gameGuideContainer.style.transform = "translate(-50%, 0)";
		l_gameGuideContainer.style.zIndex = "1";
		l_gameGuideContainer.style.width = "50%";
		l_gameGuideContainer.style.height = "70%";
		l_gameGuideContainer.style.backgroundColor = "black";
		l_gameGuideContainer.style.color = "white";
		l_gameGuideContainer.style.border = "5px solid white";
		l_gameGuideContainer.style.textAlign = "center";
		l_gameGuideContainer.style.padding = "10px 10px 10px 10px";
		l_gameGuideContainer.classList.add("fadeInItems");

		const l_gameGuideTitle = document.createElement("h1");
		l_gameGuideTitle.innerText = "Game Guide";

		l_gameGuideContainer.appendChild(l_gameGuideTitle);

		const l_gameGuideContent = document.createElement("div");
		l_gameGuideContent.style.position = "fixed";
		l_gameGuideContent.style.top = "15%";
		l_gameGuideContent.style.left = "50%";
		l_gameGuideContent.style.transform = "translate(-50%, 0)";
		l_gameGuideContent.style.overflowY = "auto";
		l_gameGuideContent.style.textAlign = "left";
		l_gameGuideContent.style.border = "1px solid white";
		l_gameGuideContent.style.height = "75%";
		l_gameGuideContent.style.width = "94%";
		l_gameGuideContent.style.padding = "10px 10px 10px 10px";
		l_gameGuideContent.style.marginBottom = "10px";
		l_gameGuideContent.style.fontSize = "20px";

		l_gameGuideContainer.appendChild(l_gameGuideContent);

		//overview
		const l_h2_overview = document.createElement("h2");
		l_h2_overview.innerText = "Overview";
		l_h2_overview.style.textDecoration = "underline";

		l_gameGuideContent.appendChild(l_h2_overview);

		const l_span1_initDescription = document.createElement("span");
		l_span1_initDescription.innerText = "The game is simple, select your weapon: ";

		l_gameGuideContent.appendChild(l_span1_initDescription);

		const l_span2_initDescription = document.createElement("span");
		l_span2_initDescription.innerText = "Sturdy Rock, Mystical Paper, or Vicious Scissors";
		l_span2_initDescription.classList.add("textGuide");

		l_gameGuideContent.appendChild(l_span2_initDescription);

		const l_span3_initDescription = document.createElement("span");
		l_span3_initDescription.innerText = ".Use these to fight the computer to win perks and upgrades that will aid you in later conquests.";

		l_gameGuideContent.appendChild(l_span3_initDescription);

		//initial list
		const l_ol1_initPoints = document.createElement("ol");
		l_gameGuideContent.appendChild(l_ol1_initPoints);

		const l_ol1_li1 = document.createElement("li");
		l_ol1_li1.innerText = "Each round, the player and computer will chose either Rock, Paper, or Scissors. The first to 5 points wins the game.";
		l_ol1_initPoints.appendChild(l_ol1_li1);

		const l_ol1_li2 = document.createElement("li");
		l_ol1_li2.innerText = "Each game will reward you with points if you win.";
		l_ol1_initPoints.appendChild(l_ol1_li2);

		//unordered list within the ordered list
		const l_ul1_pointsBreakdown = document.createElement("ul");
		l_ol1_initPoints.appendChild(l_ul1_pointsBreakdown);

		const l_ul1_li1 = document.createElement("li");
		l_ul1_li1.innerText = "You will recieve ";
		l_ul1_pointsBreakdown.appendChild(l_ul1_li1);

		const l_ul1_li1_span1 = document.createElement("span");
		l_ul1_li1_span1.innerText = "5 * the number of points you won by.";
		l_ul1_li1_span1.style.color = "red";
		l_ul1_li1.appendChild(l_ul1_li1_span1);

		const l_ul1_li2 = document.createElement("li");
		l_ul1_li2.innerText = "For example, if you win 5 to 4, you won by a margin of 1, so your points would be ";
		l_ul1_pointsBreakdown.appendChild(l_ul1_li2);

		const l_ul1_li2_span1 = document.createElement("span");
		l_ul1_li2_span1.innerText = "5 * 1";
		l_ul1_li2_span1.style.color = "red";
		l_ul1_li2.appendChild(l_ul1_li2_span1);

		const l_ul1_li2_span2 = document.createElement("span");
		l_ul1_li2_span2.innerText = ". If you win 5 to 0, you won by a margin of 5, so your points would be ";
		l_ul1_li2.appendChild(l_ul1_li2_span2);

		const l_ul1_li2_span3 = document.createElement("span");
		l_ul1_li2_span3.innerText = "5 * 5";
		l_ul1_li2_span3.style.color = "red";
		l_ul1_li2.appendChild(l_ul1_li2_span3);

		//last element of the ordered list
		const l_ol1_li3 = document.createElement("li");
		l_ol1_li3.innerText = "You may use points to buy upgrades for your rock, paper, or scissors and gain the upper hand. Asthetic upgrades and other rewards can also be earned.";
		l_ol1_initPoints.appendChild(l_ol1_li3);

		//Upgrades & Items
		const l_h2_upgrades = document.createElement("h2");
		l_h2_upgrades.innerText = "Upgrades & Items";
		l_h2_upgrades.style.textDecoration = "underline";

		l_gameGuideContent.appendChild(l_h2_upgrades);

		//rock upgrades
		const l_h3_rockUpgrades = document.createElement("h3");
		l_h3_rockUpgrades.innerText = "ROCK";

		l_gameGuideContent.appendChild(l_h3_rockUpgrades);

		const l_ul2_rockRanks = document.createElement("ul");
		l_gameGuideContent.appendChild(l_ul2_rockRanks);

		const l_ul2_li1 = document.createElement("li");
		l_ul2_li1.innerText = "Rank I: Coal - 50 xp to unlock";
		l_ul2_rockRanks.appendChild(l_ul2_li1);

		const l_ul2_coal = document.createElement("ul");
		l_ul2_rockRanks.appendChild(l_ul2_coal);

		const l_ul2_coal_li1 = document.createElement("li");
		l_ul2_coal_li1.innerText = "There is a 25% chance on a loss this round that your opponent will not gain a point.\n\n";
		l_ul2_coal.appendChild(l_ul2_coal_li1);

		const l_ul2_li2 = document.createElement("li");
		l_ul2_li2.innerText = "Rank II: Stone - 100 xp to unlock";
		l_ul2_rockRanks.appendChild(l_ul2_li2);

		const l_ul2_stone = document.createElement("ul");
		l_ul2_rockRanks.appendChild(l_ul2_stone);

		const l_ul2_stone_li1 = document.createElement("li");
		l_ul2_stone_li1.innerText = "There is a 50% chance on a loss this round that your opponent will not gain a point.\n\n";
		l_ul2_stone.appendChild(l_ul2_stone_li1);

		const l_ul2_li3 = document.createElement("li");
		l_ul2_li3.innerText = "Rank III: Crystal - 500 xp to unlock";
		l_ul2_rockRanks.appendChild(l_ul2_li3);

		const l_ul2_crystal = document.createElement("ul");
		l_ul2_rockRanks.appendChild(l_ul2_crystal);

		const l_ul2_crystal_li1 = document.createElement("li");
		l_ul2_crystal_li1.innerText = "There is a 75% chance on your next loss this game that your opponent will not gain a point.\n\n";
		l_ul2_crystal.appendChild(l_ul2_crystal_li1);	

		const l_ul2_li4 = document.createElement("li");
		l_ul2_li4.innerText = "Rank IV: Diamond - 1,000 xp to unlock";
		l_ul2_rockRanks.appendChild(l_ul2_li4);

		const l_ul2_diamond = document.createElement("ul");
		l_ul2_rockRanks.appendChild(l_ul2_diamond);

		const l_ul2_diamond_li1 = document.createElement("li");
		l_ul2_diamond_li1.innerText = "There is a 75% chance on a loss this round that your opponent will not gain a point and a 50% chance that your opponent will not gain a point on your next loss this game.\n\n";
		l_ul2_diamond.appendChild(l_ul2_diamond_li1);	

		const l_ul2_li5 = document.createElement("li");
		l_ul2_li5.innerText = "Rank V: Talisman - 5,000 xp to unlock";
		l_ul2_rockRanks.appendChild(l_ul2_li5);

		const l_ul2_talisman = document.createElement("ul");
		l_ul2_rockRanks.appendChild(l_ul2_talisman);

		const l_ul2_talisman_li1 = document.createElement("li");
		l_ul2_talisman_li1.innerText = "There is a 90% chance on a loss this round that your opponent will not gain a point and a 90% chance on your next loss this game that your opponent will not gain a point.\n\n";
		l_ul2_talisman.appendChild(l_ul2_talisman_li1);

		//paper upgrades
		const l_h3_paperUpgrades = document.createElement("h3");
		l_h3_paperUpgrades.innerText = "PAPER";
		l_gameGuideContent.appendChild(l_h3_paperUpgrades);

		const l_ul3_paperRanks = document.createElement("ul");
		l_gameGuideContent.appendChild(l_ul3_paperRanks);

		const l_ul3_li1 = document.createElement("li");
		l_ul3_li1.innerText = "Rank I: Scroll - 50 xp to unlock";
		l_ul3_paperRanks.appendChild(l_ul3_li1);

		const l_ul3_scroll = document.createElement("ul");
		l_ul3_li1.appendChild(l_ul3_scroll);

		const l_ul3_scroll_li1 = document.createElement("li");
		l_ul3_scroll_li1.innerText = "Upon winning with paper, there is a 50% chance to activate a common spell, a 5% chance to activate a rare spell, and a 45% chance nothing will happen.\n\n";
		l_ul3_scroll.appendChild(l_ul3_scroll_li1);

		const l_ul3_li2 = document.createElement("li");
		l_ul3_li2.innerText = "Rank II: Spellbook - 100 xp to unlock";
		l_ul3_paperRanks.appendChild(l_ul3_li2);

		const l_ul3_spellBook = document.createElement("ul");
		l_ul3_li2.appendChild(l_ul3_spellBook);

		const l_ul3_spellBook_li1 = document.createElement("li");
		l_ul3_spellBook_li1.innerText = "Upon winning with paper, there is a 75% chance to activate a common spell, a 20% chance to activate a rare spell, and a 5% chance to activate an epic spell.\n\n";
		l_ul3_spellBook.appendChild(l_ul3_spellBook_li1);

		const l_ul3_li3 = document.createElement("li");
		l_ul3_li3.innerText = "Rank III: Lexicon - 500 xp to unlock";
		l_ul3_paperRanks.appendChild(l_ul3_li3);

		const l_ul3_lexicon = document.createElement("ul");
		l_ul3_li3.appendChild(l_ul3_lexicon);

		const l_ul3_lexicon_li1 = document.createElement("li");
		l_ul3_lexicon_li1.innerText = "Upon winning with paper, there is a 25% chance to activate a common spell, a 50% chance to activate a rare spell, and a 25% chance to activate an epic spell.\n\n";
		l_ul3_lexicon.appendChild(l_ul3_lexicon_li1);

		const l_ul3_li4 = document.createElement("li");
		l_ul3_li4.innerText = "Rank IV: Grimoire - 1,000 xp to unlock";
		l_ul3_paperRanks.appendChild(l_ul3_li4);

		const l_ul3_grimoire = document.createElement("ul");
		l_ul3_li4.appendChild(l_ul3_grimoire);

		const l_ul3_grimoire_li1 = document.createElement("li");
		l_ul3_grimoire_li1.innerText = "Upon winning with paper, there is a 60% chance to activate a rare spell, a 35% chance to activate an epic spell, and a 5% chance to activate a LEGENDARY spell.\n\n";
		l_ul3_grimoire.appendChild(l_ul3_grimoire_li1);

		const l_ul3_li5 = document.createElement("li");
		l_ul3_li5.innerText = "Rank V: Necronomicon - 5,000 xp to unlock";
		l_ul3_paperRanks.appendChild(l_ul3_li5);

		const l_ul3_necronomicon = document.createElement("ul");
		l_ul3_li5.appendChild(l_ul3_necronomicon);

		const l_ul3_necronomicon_li1 = document.createElement("li");
		l_ul3_necronomicon_li1.innerText = "Upon winning with paper, there is an 80% chance to activate an epic spell, and a 20% chance to activate a LEGENDARY spell.\n\n";
		l_ul3_necronomicon.appendChild(l_ul3_necronomicon_li1);

		//scissor upgrades
		const l_h3_scissorsUpgrades = document.createElement("h3");
		l_h3_scissorsUpgrades.innerText = "SCISSORS";
		l_gameGuideContent.appendChild(l_h3_scissorsUpgrades);

		const l_ul4_scissorsRanks = document.createElement("ul");
		l_gameGuideContent.appendChild(l_ul4_scissorsRanks);

		const l_ul4_li1 = document.createElement("li");
		l_ul4_li1.innerText = "Rank I: Razor - 50 xp to unlock";
		l_ul4_scissorsRanks.appendChild(l_ul4_li1);

		const l_ul4_razor = document.createElement("ul");
		l_ul4_li1.appendChild(l_ul4_razor);

		const l_ul4_razor_li1 = document.createElement("li");
		l_ul4_razor_li1.innerText = "Upon winning with scissors, there is a 25% chance to gain an additional point.\n\n";
		l_ul4_razor.appendChild(l_ul4_razor_li1);

		const l_ul4_li2 = document.createElement("li");
		l_ul4_li2.innerText = "Rank II: Shears - 100 xp to unlock";
		l_ul4_scissorsRanks.appendChild(l_ul4_li2);

		const l_ul4_shears = document.createElement("ul");
		l_ul4_li2.appendChild(l_ul4_shears);

		const l_ul4_shears_li1 = document.createElement("li");
		l_ul4_shears_li1.innerText = "Upon winning with scissors, there is a 50% chance to gain an additional point.\n\n";
		l_ul4_shears.appendChild(l_ul4_shears_li1);

		const l_ul4_li3 = document.createElement("li");
		l_ul4_li3.innerText = "Rank III: Ritual Knife - 500 xp to unlock";
		l_ul4_scissorsRanks.appendChild(l_ul4_li3);

		const l_ul4_ritualKnife = document.createElement("ul");
		l_ul4_li3.appendChild(l_ul4_ritualKnife);

		const l_ul4_ritualKnife_li1 = document.createElement("li");
		l_ul4_ritualKnife_li1.innerText = "Upon winning with scissors, there is a 75% chance to gain an additional point, or a 10% chance to gain 2 additional points.\n\n";
		l_ul4_ritualKnife.appendChild(l_ul4_ritualKnife_li1);

		const l_ul4_li4 = document.createElement("li");
		l_ul4_li4.innerText = "Rank IV: Sickle - 1,000 xp to unlock";
		l_ul4_scissorsRanks.appendChild(l_ul4_li4);

		const l_ul4_daisho = document.createElement("ul");
		l_ul4_li4.appendChild(l_ul4_daisho);

		const l_ul4_daisho_li1 = document.createElement("li");
		l_ul4_daisho_li1.innerText = "Upon winning with scissors, there is a 100% chance to gain an additional point, or a 30% chance to gain 2 additional points.\n\n";
		l_ul4_daisho.appendChild(l_ul4_daisho_li1);

		const l_ul4_li5 = document.createElement("li");
		l_ul4_li5.innerText = "Rank V: Scyth - 5,000 xp to unlock";
		l_ul4_scissorsRanks.appendChild(l_ul4_li5);

			const l_ul4_scyth = document.createElement("ul");
		l_ul4_li5.appendChild(l_ul4_scyth);

		const l_ul4_scyth_li1 = document.createElement("li");
		l_ul4_scyth_li1.innerText = "Upon losing with scissors, you have a 50% chance of gaining an additional point. If you win with scissors, there is a 100% chance to gain a point, a 50% chance to gain 2 additional points, and a 20% chance to set player points to 20 and computer points to -20.\n\n";
		l_ul4_scyth.appendChild(l_ul4_scyth_li1);

		//Spells overview
		const l_h2_spells = document.createElement("h2");
		l_h2_spells.innerText = "Spells";
		l_gameGuideContent.appendChild(l_h2_spells);

		const l_p_spellDescription = document.createElement("p");
		l_p_spellDescription.innerText = "Each category has an equal chance to activate the spell. Flat experience gains will be added AFTER multipliers have been added. Experience multipliers will stack with each other at the end of the game. For example, suppose you cast a +10 experience spell, a x2 experience bonus, and a x4 experience bonus. Your final score would be calculated by: 5 x margin x purchased Experience Bonus' x 2 x 4 + 10. Some spell effects are permanent such as the Dwayne cards and the reduced cost of an experience bonus. Once you have unlocked these, they will be removed from the pool of available spells and can no longer be cast.";
		l_gameGuideContent.appendChild(l_p_spellDescription);

		//common spell list
		const l_h3_commonSpell = document.createElement("h3");
		l_h3_commonSpell.innerText = "Common";
		l_gameGuideContent.appendChild(l_h3_commonSpell);

		const l_ul5_commonSpells = document.createElement("ul");
		l_gameGuideContent.appendChild(l_ul5_commonSpells);

		const l_ul5_li1 = document.createElement("li");
		l_ul5_li1.innerText = "+1-5 xp bonus THIS game regardless of outcome.";
		l_ul5_commonSpells.appendChild(l_ul5_li1);

		const l_ul5_li2 = document.createElement("li");
		l_ul5_li2.innerText = "Set the background to a random (dark) color.";
		l_ul5_commonSpells.appendChild(l_ul5_li2);

		const l_ul5_li3 = document.createElement("li");
		l_ul5_li3.innerText = "Randomize the scores. (Caution! This could not go in your favor!)";
		l_ul5_commonSpells.appendChild(l_ul5_li3);

		//rare spell list
		const l_h3_rareSpell = document.createElement("h3");
		l_h3_rareSpell.innerText = "Rare";
		l_gameGuideContent.appendChild(l_h3_rareSpell);

		const l_ul6_rareSpells = document.createElement("ul");
		l_gameGuideContent.appendChild(l_ul6_rareSpells);

		const l_ul6_li1 = document.createElement("li");
		l_ul6_li1.innerText = "+20 xp bonus THIS game regardless of outcome.";
		l_ul6_rareSpells.appendChild(l_ul6_li1);

		const l_ul6_li2 = document.createElement("li");
		l_ul6_li2.innerText = "Gain a x2 exp bonus THIS game.";
		l_ul6_rareSpells.appendChild(l_ul6_li2);

		const l_ul6_li3 = document.createElement("li");
		l_ul6_li3.innerText = "You will win the next draw this game.";
		l_ul6_rareSpells.appendChild(l_ul6_li3);

		const l_ul6_li4 = document.createElement("li");
		l_ul6_li4.innerText = "Reverse the scores (Caution! This could not go in your favor).";
		l_ul6_rareSpells.appendChild(l_ul6_li4);

		//epic spell list
		const l_h3_epicSpell = document.createElement("h3");
		l_h3_epicSpell.innerText = "Epic";
		l_gameGuideContent.appendChild(l_h3_epicSpell);

		const l_ul7_epicSpells = document.createElement("ul");
		l_gameGuideContent.appendChild(l_ul7_epicSpells);

		const l_ul7_li1 = document.createElement("li");
		l_ul7_li1.innerText = "Experience bonus costs 10 xp instead of 25 xp.";
		l_ul7_epicSpells.appendChild(l_ul7_li1);

		const l_ul7_li2 = document.createElement("li");
		l_ul7_li2.innerText = "Gain a x4 exp bonus THIS game.";
		l_ul7_epicSpells.appendChild(l_ul7_li2);

		const l_ul7_li3 = document.createElement("li");
		l_ul7_li3.innerText = "You win all draws THIS game.";
		l_ul7_epicSpells.appendChild(l_ul7_li3);

		const l_ul7_li4 = document.createElement("li");
		l_ul7_li4.innerText = "Set your opponents points to 0.";
		l_ul7_epicSpells.appendChild(l_ul7_li4);

		//legendary spell list
		const l_h3_legendarySpell = document.createElement("h3");
		l_h3_legendarySpell.innerText = "Legendary";
		l_gameGuideContent.appendChild(l_h3_legendarySpell);

		const l_ul8_legendarySpells = document.createElement("ul");
		l_gameGuideContent.appendChild(l_ul8_legendarySpells);

		const l_ul8_li1 = document.createElement("li");
		l_ul8_li1.innerText = "Unlock Dwayne 'The Rock' Johnson";
		l_ul8_legendarySpells.appendChild(l_ul8_li1);

		const l_ul8_li2 = document.createElement("li");
		l_ul8_li2.innerText = "Unlock Dwayne 'The Paper' Johnson";
		l_ul8_legendarySpells.appendChild(l_ul8_li2);

		const l_ul8_li3 = document.createElement("li");
		l_ul8_li3.innerText = "Unlock Dwayne 'The Scissors' Johnson";
		l_ul8_legendarySpells.appendChild(l_ul8_li3);

		const l_ul8_li4 = document.createElement("li");
		l_ul8_li4.innerText = "Gain a x10 xp bonus THIS game.";
		l_ul8_legendarySpells.appendChild(l_ul8_li4);	
		
		const l_ul8_li5 = document.createElement("li");
		l_ul8_li5.innerText = "Set the Score to 10 / -10";
		l_ul8_legendarySpells.appendChild(l_ul8_li5);

		const l_closeGuideBtn = document.createElement("button");
		l_closeGuideBtn.style.position = "absolute";
		l_closeGuideBtn.style.bottom = "10px";
		l_closeGuideBtn.style.left = "46%";
		l_closeGuideBtn.style.width = "80px";
		l_closeGuideBtn.style.height = "30px";
		l_closeGuideBtn.style.backgroundColor = "white";
		l_closeGuideBtn.style.color = "black";
		l_closeGuideBtn.style.paddingTop = "3px";
		l_closeGuideBtn.innerText = "Close";
		l_closeGuideBtn.classList.add("glow");

		l_closeGuideBtn.addEventListener("click", function() {
			m_guideIsOpen = false;
			l_gameGuideContainer.remove();
		});

		l_gameGuideContainer.appendChild(l_closeGuideBtn);

		m_body.appendChild(l_gameGuideContainer);
	}
}

//homeScreen
m_startGameBtn.addEventListener("click", function(e) {
	for(let i = 0; i < m_homeScreenItems.length; i++) {
	//remove homeScreen items
	m_homeScreenItems[i].remove();

	//add gameScreen items
	m_body.appendChild(m_gameScreenItems[i]);

	}
	//reset points
	m_playerPoints = 0;
	m_computerPoints = 0;
});
//upgrade buttons
m_rockUpgradeBtn.addEventListener("click", function() {
	//check if they even have enough xp
	if(m_playerExperience >= m_rockUpgradeCost) {
		if(m_rockRank == 4) {
			m_rockUpgradeBtn.disabled = true;
			m_rockUpgradeBtn.innerText = "Maxed Out";
			m_rockUpgradeBtn.classList.remove("glow");
		}

		//decrease player Experience accordingly
		m_playerExperience -= m_rockUpgradeCost;

		//increase cost of next upgrade
		switch(m_rockRank) {
			case 0:
				m_rockUpgradeCost = 100;
				m_equippedRock.innerText = "Coal";
				m_rockRankText.innerText = "I";
				m_rockUpgradeTitle.innerText = "Stone";
				m_rockUpgradeDescription.innerText = "There is a 50% chance on a loss this round that your opponent will not gain a point.";
				if(!m_hasRockDwayne) {
					m_rockBtn.style.background = "url(img/rock/coal.png) no-repeat center";
					m_rockBtn.style.backgroundSize = "contain";
				}
				break;
			case 1:
				m_rockUpgradeCost = 500;
				m_equippedRock.innerText = "Stone";
				m_rockRankText.innerText = "II";
				m_rockUpgradeTitle.innerText = "Crystal";
				m_rockUpgradeDescription.innerText = "There is a 75% chance on your next loss this game that your opponent will not gain a point.";
				if(!m_hasRockDwayne) {
					m_rockBtn.style.background = "url(img/rock/stone.png) no-repeat center";
					m_rockBtn.style.backgroundSize = "contain";
				}
				break;
			case 2:
				m_rockUpgradeCost = 1000;
				m_equippedRock.innerText = "Crystal"
				m_rockRankText.innerText = "III";
				m_rockUpgradeTitle.innerText = "Diamond";
				m_rockUpgradeDescription.innerText = "There is a 75% chance on a loss this round that your opponent will not gain a point and a 50% chance that your opponent will not gain a point on your next loss this game.";
				if(!m_hasRockDwayne) {
					m_rockBtn.style.background = "url(img/rock/crystal.png) no-repeat center";
					m_rockBtn.style.backgroundSize = "contain";
				}
				break;
			case 3:
				m_rockUpgradeCost = 5000;
				m_equippedRock.innerText = "Diamond";
				m_rockRankText.innerText = "IV";
				m_rockUpgradeTitle.innerText = "Talisman";
				m_rockUpgradeDescription.innerText = "There is a 90% chance on a loss this round that your opponent will not gain a point and a 90% chance on your next loss this game that your opponent will not gain a point.";
				if(!m_hasRockDwayne) {
					m_rockBtn.style.background = "url(img/rock/diamond.png) no-repeat center";
					m_rockBtn.style.backgroundSize = "contain";
				}
				break;
			case 4:
				m_rockUpgradeCost = NaN;
				m_equippedRock.innerText = "Talisman";
				m_rockRankText.innerText = "V";
				m_rockUpgradeTitle.innerText = "Fully Upgraded";
				m_rockUpgradeDescription.innerText = "";
				if(!m_hasRockDwayne) {
					m_rockBtn.style.background = "url(img/rock/talisman.png) no-repeat center";
					m_rockBtn.style.backgroundSize = "contain";
				}
				//achievement for getting rank V 
				showPopUp("achievement", "Upgrade Your Rock to Level 5\n+50 xp");
				document.getElementById("rockAchievment").style.color = "green";
				m_playerExperience += 50;
				m_experienceDisplay.innerText = m_playerExperience;

				//check if all are at rank V
				if(m_scissorsRank == 5 && m_paperRank == 5) {
					showPopUp("achievement", "Upgrade Rock, Paper, and Scissors to Level 5\n+100 xp");
					document.getElementById("trifectaAchievment").style.color = "green";
					m_playerExperience += 100;
					m_experienceDisplay.innerText = m_playerExperience;
				}
				break;
		}

		//increase rank of rock
		m_rockRank++;

		//update the expreience counter at the Top 
		m_experienceDisplay.innerText = m_playerExperience + " xp";


		//adjust the necessary elements to reflect the upgrade
		if(m_rockRank == 5) {
			m_rockNextUpgradeReqExp.innerText = "";
		} else {
			m_rockNextUpgradeReqExp.innerText = m_rockUpgradeCost + " xp";
		}
		
		
		//adjust the chance that the computer will choose paper over rock and scissors
		m_rockChance -= 1;
		m_paperChance += 2;
		m_scissorsChance -= 1;
	} else {
		alert(`You need ${m_rockUpgradeCost - m_playerExperience} more experience to upgrade!  Play more games to increase your experience!`);
	}
	
});

m_paperUpgradeBtn.addEventListener("click", function() {
	if(m_playerExperience >= m_paperUpgradeCost) {
		if(m_paperRank == 4) {
			m_paperUpgradeBtn.disabled = true;
			m_paperUpgradeBtn.innerText = "Maxed Out";
			m_paperUpgradeBtn.classList.remove("glow");
		}

		//decrease player Experience accordingly
		m_playerExperience -= m_paperUpgradeCost;

		switch(m_paperRank) {
			case 0:
				m_paperUpgradeCost = 100;
				m_equippedPaper.innerText = "Scroll";
				m_paperRankText.innerText = "I";
				m_paperUpgradeTitle.innerText = "Spellbook";
				m_paperUpgradeDescription.innerText = "Upon winning with paper, there is a 75% chance to activate a common spell, a 20% chance to activate a rare spell, and a 5% chance to activate an epic spell.";
				if(!m_hasPaperDwayne) { 
					m_paperBtn.style.background = "url(img/paper/scroll.png) no-repeat center";
					m_paperBtn.style.backgroundSize = "contain";
				}		
				
				break;
			case 1:
				m_paperUpgradeCost = 500;
				m_equippedPaper.innerText = "Spellbook";
				m_paperRankText.innerText = "II";
				m_paperUpgradeTitle.innerText = "Lexicon";
				m_paperUpgradeDescription.innerText = "Upon winning with paper, there is a 25% chance to activate a common spell, a 50% chance to activate a rare spell, and a 25% chance to activate an epic spell.";
				if(!m_hasPaperDwayne) { 
					m_paperBtn.style.background = "url(img/paper/spellbook.png) no-repeat center";
					m_paperBtn.style.backgroundSize = "contain";
				}
				
				break;
			case 2:
				m_paperUpgradeCost = 1000;
				m_equippedPaper.innerText = "Lexicon"
				m_paperRankText.innerText = "III";
				m_paperUpgradeTitle.innerText = "Grimoire";
				m_paperUpgradeDescription.innerText = "Upon winning with paper, there is a 60% chance to activate a rare spell, a 35% chance to activate an epic spell, and a 5% chance to activate a LEGENDARY spell.";
				if(!m_hasPaperDwayne) {
					m_paperBtn.style.background = "url(img/paper/lexicon.png) no-repeat center";
					m_paperBtn.style.backgroundSize = "contain";
				}
				break;
			case 3:
				m_paperUpgradeCost = 5000;
				m_equippedPaper.innerText = "Grimoire";
				m_paperRankText.innerText = "IV";
				m_paperUpgradeTitle.innerText = "Necronomicon";
				m_paperUpgradeDescription.innerText = "Regardless of the outcome, there is a 30% chance to activate a rare spell, a 60% chance to activate an epic spell, and a 10% chance to activate a LEGENDARY spell.";
				if(!m_hasPaperDwayne) {
					m_paperBtn.style.background = "url(img/paper/grimoire.png) no-repeat center";
					m_paperBtn.style.backgroundSize = "contain";
				}
				
				break;
			case 4:
				m_paperUpgradeCost = NaN;
				m_equippedPaper.innerText = "Necronomicon";
				m_paperRankText.innerText = "V";
				m_paperUpgradeTitle.innerText = "Fully Upgraded";
				m_paperUpgradeDescription.innerText = "";
				if(!m_hasPaperDwayne) {
					m_paperBtn.style.background = "url(img/paper/necronomicon.png) no-repeat center";
					m_paperBtn.style.backgroundSize = "contain";
				}

				//achievement for getting rank V 
				showPopUp("achievement", "Upgrade Your Paper to Level 5\n+50 xp");
				document.getElementById("paperAchievment").style.color = "green";
				m_playerExperience += 50;
				m_experienceDisplay.innerText = m_playerExperience;
				break;
			}
			//check if all are at rank V
			if(m_rockRank == 5 && m_scissorsRank == 5) {
				showPopUp("achievement", "Upgrade Rock, Paper, and Scissors to Level 5\n+100 xp");
				document.getElementById("trifectaAchievment").style.color = "green";
				m_playerExperience += 100;
				m_experienceDisplay.innerText = m_playerExperience;
			}
		

		//incrase rank of paper
		m_paperRank++;

		//update the expreience counter at the Top 
		m_experienceDisplay.innerText = m_playerExperience + " xp";

		if(m_paperRank == 5) {
			m_paperNextUpgradeReqExp.innerText = "";
		} else {
			m_paperNextUpgradeReqExp.innerText = m_paperUpgradeCost + " xp";
		}

		//adjust the chance that the computer will choose paper over rock or scissors
		m_rockChance -= 1;
		m_paperChance -= 1;
		m_scissorsChance += 2;
	} else {
		alert(`You need ${m_paperUpgradeCost - m_playerExperience} more experience to upgrade!  Play more games to increase your experience!`);
	}
	
});

m_scissorUpgradeBtn.addEventListener("click", function() {
	if(m_playerExperience >= m_scissorsUpgradeCost) {
		if(m_scissorsRank == 4) {
			m_scissorUpgradeBtn.disabled = true;
			m_scissorUpgradeBtn.innerText = "Maxed Out";
			m_scissorUpgradeBtn.classList.remove("glow");
		}

		//decrease player Experience accordingly
		m_playerExperience -= m_scissorsUpgradeCost;

		switch(m_scissorsRank) {
			case 0:
				m_scissorsUpgradeCost = 100;
				m_equippedScissors.innerText = "Razor";
				m_scissorsRankText.innerText = "I";
				m_scissorsUpgradeTitle.innerText = "Shears";
				m_scissorsUpgradeDescription.innerText = "Upon winning with scissors, there is a 50% chance to gain an additional point.";
				if(!m_hasScissorsDwayne) {
					m_scissorsBtn.style.background = "url(img/scissors/razor.png) no-repeat center";
					m_scissorsBtn.style.backgroundSize = "contain";
				}
				break;
			case 1:
				m_scissorsUpgradeCost = 500;
				m_equippedScissors.innerText = "Shears";
				m_scissorsRankText.innerText = "II";
				m_scissorsUpgradeTitle.innerText = "Ritual Knife";
				m_scissorsUpgradeDescription.innerText = "Upon winning with scissors, there is a 75% chance to gain an additional point, or a 10% chance to gain 2 additional points.";
				if(!m_hasScissorsDwayne) {
					m_scissorsBtn.style.background = "url(img/scissors/shears.png) no-repeat center";
					m_scissorsBtn.style.backgroundSize = "contain";
				}
				break;
			case 2:
				m_scissorsUpgradeCost = 1000;
				m_equippedScissors.innerText = "Ritual Knife"
				m_scissorsRankText.innerText = "III";
				m_scissorsUpgradeTitle.innerText = "Sickle";
				m_scissorsUpgradeDescription.innerText = "Upon winning with scissors, there is a 75% chance to gain an additional point, or a 20% chance to gain 2 additional points.";
				if(!m_hasScissorsDwayne) {
					m_scissorsBtn.style.background = "url(img/scissors/ritualKnife.png) no-repeat center";
					m_scissorsBtn.style.backgroundSize = "contain";
				}
				break;
			case 3:
				m_scissorsUpgradeCost = 5000;
				m_equippedScissors.innerText = "Sickle";
				m_scissorsRankText.innerText = "IV";
				m_scissorsUpgradeTitle.innerText = "Scyth";
				m_scissorsUpgradeDescription.innerText = "Upon losing with scissors, you have a 50% chance of gaining an additional point. If you win with scissors, there is a 50% chance to gain 2 additional points, and a 10% chance to win the game immedietly.";
				if(!m_hasScissorsDwayne) {
					m_scissorsBtn.style.background = "url(img/scissors/Sickle.png) no-repeat center";
					m_scissorsBtn.style.backgroundSize = "contain";
				}
				break;
			case 4:
				m_scissorsUpgradeCost = NaN;
				m_equippedScissors.innerText = "Scyth";
				m_scissorsRankText.innerText = "V";
				m_scissorsUpgradeTitle.innerText = "Fully Upgraded";
				m_scissorsUpgradeDescription.innerText = "";
				if(!m_hasScissorsDwayne) {
					m_scissorsBtn.style.background = "url(img/scissors/scythe.png) no-repeat center";
					m_scissorsBtn.style.backgroundSize = "contain";
				}

				//achievement for getting rank V 
				showPopUp("achievement", "Upgrade Your Scissors to Level 5\n+50 xp");
				document.getElementById("scissorsAchievment").style.color = "green";
				m_playerExperience += 50;
				m_experienceDisplay.innerText = m_playerExperience;

				//check if all are at rank V
				if(m_rockRank == 5 && m_paperRank == 5) {
					showPopUp("achievement", "Upgrade Rock, Paper, and Scissors to Level 5\n+100 xp");
					document.getElementById("trifectaAchievment").style.color = "green";
					m_playerExperience += 100;
					m_experienceDisplay.innerText = m_playerExperience;
				}
				break;
		}

		//increase rank of scissors
		m_scissorsRank++;

		//update the expreience counter at the Top 
		m_experienceDisplay.innerText = m_playerExperience + " xp";

		if(m_scissorsRank == 5) {
			m_scissorsNextUpgradeReqExp.innerText = "";
		} else {
			m_scissorsNextUpgradeReqExp.innerText = m_scissorsUpgradeCost + " xp";
		}

		//adjust the chance that the computer will choose scissors over rock or paper
		m_rockChance += 2;
		m_paperChance -= 1;
		m_scissorsChance -= 1;
	} else {
		alert(`You need ${m_scissorsUpgradeCost - m_playerExperience} more experience to upgrade!  Play more games to increase your experience!`);
	}
});

//active listeners to have the text box reflect the value of the slider
m_xpTextBox.value = m_xpSlider.value;

m_xpSlider.oninput = function() {
	m_xpTextBox.value = this.value;
	m_expBonusCostSpan.innerText = (m_expBonusCost * this.value) + " xp";
}

//text box is restricted to just numbers
m_xpTextBox.oninput = function() {
	if(this.value > (200 - m_pointMultiplier)) {
		alert("You can only buy up to x200 multiplier");
		this.value = 200;
	} else {
		m_xpTextBox.value = m_xpTextBox.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
	}
	m_expBonusCostSpan.innerText = (m_expBonusCost * this.value) + " xp";
	m_xpSlider.value = this.value;
}

m_expBonusBtn.addEventListener("click", function() {
	let l_cost = m_expBonusCost * m_xpTextBox.value;

	//make sure user has enough points 
	if(m_playerExperience < l_cost) {
		alert(`You need ${l_cost - m_playerExperience} more experience to buy that!`);
	} else if((parseInt(m_xpTextBox.value) + m_pointMultiplier - 1) > 200) {
		alert(`You cannot go above x200 multiplier.\nYou can only buy ${200 - m_pointMultiplier} more.`);
	} else if(m_xpTextBox.value < 2) {
		alert("You cannot go below a x2 multiplier");
		m_xpTextBox.value = 2;
	} else {
		//deduct experience from user
		m_playerExperience -= l_cost;

		//apply bonus xp
		if(m_pointMultiplier == 1) {
			m_pointMultiplier += parseInt(m_xpTextBox.value) - 1;
		} else {
			m_pointMultiplier += parseInt(m_xpTextBox.value);
		}
		

		//reflect changes on active activeEffects & experience
		m_activeEffects.innerText = `Experience Bonus: ${m_pointMultiplier}`;
		m_experienceDisplay.innerText = m_playerExperience + " xp";
	}
});

m_endGameBtn.addEventListener("click", function() {
	//check if player qualifies
	let l_hasAllAchievments = !m_virginPlayer && //played first game
							   m_favoritism && //favortism achievment
							   m_perfection && //perfection achievment
							   m_rockRank == 5 && //has Rock, Paper, & Scissors at rank V
							   m_paperRank == 5 &&
							   m_scissorsRank == 5 &&
							   m_hasRockDwayne && //has Dwayne 'the rock paper scissors' Johnson
							   m_hasPaperDwayne &&
							   m_hasScissorsDwayne &&
							   m_hasExpAchiev; //has overloaded achievment

	if(m_playerExperience >= 100000 && l_hasAllAchievments) {
		for(let i = 0; i < m_homeScreenItems.length; i++) {
			//remove homescreen items
			m_homeScreenItems[i].remove();
		}

		//add end game credits
		rollCredits();
	} else {
		if(!l_hasAllAchievments && m_playerExperience < 20000) {
			alert("You need to get the remaining achievments");
		} else if(l_hasAllAchievments && m_playerExperience >= 20000) {
			alert("You only need more experience!  Keep grinding!");
		} else {
			alert("Not enough achievments and not enough experience...");
		}
	}
});

//GAMESCREEN
//button functionality
m_returnBtn.addEventListener("click", function() {
	returnToHome();
});

function returnToHome(a_playedFirstGame, a_gotFavortism, a_gotPerfection, a_gotExpAchiev) {
	for(let i = 0; i < m_gameScreenItems.length; i++) {
		//remove gameScreen items
		m_gameScreenItems[i].remove();

		//add homeScreen items
		m_body.appendChild(m_homeScreenItems[i]);

  }
	//reset the images of the choices
	m_userChoice.src = "";
	m_computerChoice.src = "";
	//reset spell effects
	m_spellWinAllDraws = false;
	m_spellWinNextDraw = false;
	m_spellFlatExperienceBonus = 0;
	m_spellExperienceMultiplier = 1;

	//reset game Elements
	m_userScore.innerText = "0";
	m_computerScore.innerText = "0";
	m_outcomeText.innerText = "";

	//reset activeEffects
	m_activeEffects.innerText = "";
	m_pointMultiplier = 1;
	m_body.style.backgroundColor = "black";

	//handle achievments
	if(a_playedFirstGame) {
		showPopUp("achievement", "Play Your First Game\n+5 xp");
		document.getElementById("welcomeAchievment").style.color = "green";
		m_playerExperience += 5;
		m_experienceDisplay.innerText = m_playerExperience;
	}
	if(a_gotFavortism) {
		showPopUp("achievement", "Win a Game by Only Choosing Either Rock, Paper, or Scissors\n+10 xp");
		document.getElementById("onlyOneAchievment").style.color = "green";
		m_playerExperience += 10;
		m_experienceDisplay.innerText = m_playerExperience;
	}
	if(a_gotPerfection) {
		showPopUp("achievement", "End a Game With a Score of 5 to 0\n+20 xp");
		document.getElementById("perfectionAchievment").style.color = "green";
		m_playerExperience += 20;
		m_experienceDisplay.innerText = m_playerExperience;
	}
	if(a_gotExpAchiev) {
		showPopUp("achievement", "Earn over 10,000 xp in one game!");
		document.getElementById("expAchievment").style.color = "green";
		m_playerExperience += 1000;
		m_experienceDisplay.innerText = m_playerExperience;
	}
}

//User Selection Buttons
m_rockBtn.addEventListener("click", function() {
	//increment rock counter (for achievement)
	m_numRockPlays += 1;

	let l_outcome = playRound("rock");

	//Spell to win draws
	if(l_outcome == 0 && (m_spellWinNextDraw || m_spellWinAllDraws)) {
		l_outcome = 1;
		m_spellWinNextDraw = false;
	}

	  //change image of userSelection to a rock appropriate to their winnings
	if(m_hasRockDwayne) {
		m_userChoice.src = "img/rock/Dwayne_rock.png";
	} else {
		switch(m_rockRank) {
			case 1: //Coal
				m_userChoice.src = "img/rock/coal.png";
				break;
			case 2: //Stone
				m_userChoice.src = "img/rock/stone.png";
				break;
			case 3: //Crystal
				m_userChoice.src = "img/rock/crystal.png";
				break;
			case 4: //Diamond
				m_userChoice.src = "img/rock/diamond.png";
				break;
			case 5: //Talisman
				m_userChoice.src = "img/rock/talisman.png";
				break;
			default: //rock
				m_userChoice.src = "img/rock/rock.png";
				break;
		}
	}

	//rock special
	switch(m_rockRank) {
		case 1: //Coal
			if(l_outcome == -1 && getRandomInt(0, 3) == 0) {
				l_outcome = 1;
				showPopUp("coal", "Opponent didn't gain a point");
			}
			break;
		case 2: //Stone
			if(l_outcome == -1 && getRandomInt(0, 3) >= 1) {
				l_outcome = 1;
				showPopUp('stone', "Opponent didn't gain a point");
			}
			break;
		case 3: //Crystal
			if(getRandomInt(0, 3) > 0 && !m_protected) {
				m_protected = true;
				showPopUp('protection', "Your next loss won't hurt!");
			}
			break;
		case 4: //Diamond
			if(l_outcome == -1 && getRandomInt(0, 3) > 0) {
				l_outcome = 1;
				showPopUp('diamond', "Opponent didn't gain a point");
			}
			if(getRandomInt(0,1) == 1 && !m_protected) {
				m_protected = true;
				showPopUp('protection', "Your next loss won't hurt!");
			}
			break;
		case 5: //Talisman
			if(l_outcome == -1 && getRandomInt(1, 10) > 1) {
				l_outcome = 1;
				showPopUp('talisman', "Opponent didn't gain a point");
			}
			if(getRandomInt(1, 10) > 1 && !m_protected) {
				showPopUp('protection', "Your next loss won't hurt!");
				m_protected = true;
			}
			break;
	}
	
	if(m_protected && l_outcome == -1) {
		l_outcome = 1;
		m_protected = false;
		showPopUp('rockSpecial', "Opponent didn't gain a point");
	}
	//outcome logic
	if(l_outcome == -1) { //loss
		m_outcomeText.innerText = "You Lost!";
		m_outcomeText.style.color = "red";
		m_computerPoints++;
		m_computerScore.innerText = m_computerPoints;
	} else if(l_outcome == 0) { //draw
		m_outcomeText.innerText = "Draw!";
		m_outcomeText.style.color = "white";
	} else if(l_outcome == 1) { //win
		m_outcomeText.innerText = "You won!";
		m_outcomeText.style.color = "green";
		m_playerPoints++;
		m_userScore.innerText = m_playerPoints;
	}

	//test if the player or computer has won the game
	if(m_playerPoints >= 5) {
		endGame(true);
	} else if(m_computerPoints >= 5) {
		endGame(false);
	}
});
m_paperBtn.addEventListener("click", function() {
	//increment the counter for paper (for achievement)
	m_numPaperPlays += 1;

	//change image of userSelection to a paper appropriate to their winnings
	if(m_hasPaperDwayne) {
		m_userChoice.src = "img/paper/Dwayne_paper.png";
	} else {
		switch(m_paperRank) {
			case 1: //Scroll
				m_userChoice.src = "img/paper/scroll.png";
				break;
			case 2: //Spellbook
				m_userChoice.src = "img/paper/spellbook.png";
				break;
			case 3: //Lexicon
				m_userChoice.src = "img/paper/lexicon.png";
				break;
			case 4: //Grimiore
				m_userChoice.src = "img/paper/grimoire.png";
				break;
			case 5: //Sovereign Intellect
				m_userChoice.src = "img/paper/necronomicon.png";
				break;
			default: //paper
				m_userChoice.src = "img/paper/Paper.png";
				break;
		}
	}	

	let l_outcome = playRound("paper");

	//Spell to win draws
	if(l_outcome == 0 && (m_spellWinNextDraw || m_spellWinAllDraws)) {
		l_outcome = 1;
		m_spellWinNextDraw = false;
	}

	//rock special
	if(m_protected && l_outcome == -1) {
		l_outcome = 1;
		m_protected = false;
		showPopUp('rockSpecial', "Opponent didn't gain a point");
	}

	//outcome logic
	if(l_outcome == -1) { //loss
		m_outcomeText.innerText = "You Lost!";
		m_outcomeText.style.color = "red";
		m_computerPoints++;
		m_computerScore.innerText = m_computerPoints;
	} else if(l_outcome == 0) { //draw
		m_outcomeText.innerText = "Draw!";
		m_outcomeText.style.color = "white";
	} else if(l_outcome == 1) { //win
		//spells
		let l_determinator = getRandomInt(1, 100);
		if(m_paperRank == 1) { //rank 1
			if(l_determinator <= 50) {
				commonSpell();
			} else if(l_determinator <= 55) {
				rareSpell();
			}
		} else if(m_paperRank == 2) { //rank 2
			if(l_determinator <= 75) {
				commonSpell();
			} else if(l_determinator <= 95) {
				rareSpell();
			} else if(l_determinator <= 100) {
				epicSpell();
			}
		} else if(m_paperRank == 3) { //rank 3
			if(l_determinator <= 25) {
				commonSpell();
			} else if(l_determinator <= 75) {
				rareSpell();
			} else if(l_determinator <= 100) {
				epicSpell();
			}
		} else if(m_paperRank == 4) { //rank 4
			if(l_determinator <= 60) {
				rareSpell();
			} else if(l_determinator <= 95) {
				epicSpell();
			} else if(l_determinator <= 100) {
				legendarySpell();
			}
		} else if(m_paperRank == 5) { //rank 5
			if(l_determinator <= 80) {
				epicSpell();
			} else if(l_determinator <= 100) {
				legendarySpell();
			}
		}

		m_outcomeText.innerText = "You won!";
		m_outcomeText.style.color = "green";
		if(m_playerPoints < 10) {
			m_playerPoints++;
		}
		m_userScore.innerText = m_playerPoints;
		
	}

	//test if the player or computer has won the game
	if(m_playerPoints >= 5) {
		endGame(true);
	} else if(m_computerPoints == 5) {
		endGame(false);
	}
});

//spell functions
function commonSpell() {
	//determine the spell that will be cast
	const l_determinator = getRandomInt(1, 3);
	let l_spellDescription = "Default";
	
	if(l_determinator == 1) { //+1-5 xp
		let l_awardedXpBonus = getRandomInt(1, 5);
		m_spellFlatExperienceBonus += l_awardedXpBonus;
		l_spellDescription = `+${l_awardedXpBonus} experience`;
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
			} else {
				l_tooLight = false;
			}
		}

		//set background temporarily
		m_body.style.backgroundColor = l_color;
		l_spellDescription = "Changed background!";
	} else if(l_determinator == 3) { //Randomize the Scores
		l_spellDescription = "Randomized Scores!";
		m_playerPoints = getRandomInt(0, 4);
		m_userScore.innerText = m_playerPoints;
		m_computerPoints = getRandomInt(0, 4);
		m_computerScore.innerText = m_computerPoints;
	}
	//show the spell
	showPopUp('common', l_spellDescription);
}
function rareSpell() {
	let l_spellDescription = "Default";

	//determine which spell will be cast
	const l_determinator = getRandomInt(1, 4);

	switch(l_determinator) {
		//+20 xp bonus
		case 1:
			m_spellFlatExperienceBonus += 20;
			l_spellDescription = '+20 experience';
			break;
		//Gain x2 xp bonus
		case 2:
			if(m_spellExperienceMultiplier == 1) {
				m_spellExperienceMultiplier = 2;
			} else {
				m_spellExperienceMultiplier += 2;
			}
			l_spellDescription = 'x2 Experience Multiplier!';
			break;
		//Win the next draw
		case 3:
			m_spellWinNextDraw = true;
			l_spellDescription = 'Win NEXT draw this game';
			break;
		//Reverse Scores
		case 4:
			//change points
			let l_tempPoints = m_playerPoints;
			m_playerPoints = m_computerPoints;
			m_computerPoints = l_tempPoints;

			//reflect that on the DOM
			m_userScore.innerText = m_playerPoints;
			m_computerScore.innerText = m_computerPoints;

			l_spellDescription = 'Switch Scores!';
			break;
	}

	showPopUp('rare', l_spellDescription);
}
function epicSpell() {
	//determine which spell will be cast
	const l_determinator = getRandomInt(1, m_numEpicSpells);
	let l_spellDescription = "Default";

	switch(l_determinator) {
		//Gain x4 exp bonus THIS game
		case 1:
			if(m_spellExperienceMultiplier == 1) {
				m_spellExperienceMultiplier = 4;
			} else {
				m_spellExperienceMultiplier += 4;
			}
			l_spellDescription = 'x4 Experience Multiplier!';
			break;
		//Win all draws this game
		case 2:
			m_spellWinAllDraws = true;
			l_spellDescription = "Win ALL draws this game";
			break;
		//Set opponents score to 0
		case 3:
			m_computerPoints = 0;
			m_computerScore.innerText = m_computerPoints;
			l_spellDescription = "Computer Score set to 0";
			break;
		//change experience requirement for experience bonus
		case 4: 
			m_numEpicSpells = 3; //user can't cast this anymore
			m_expBonusCostSpan.innerText = "10 xp";
			m_expBonusCost = 10;
			l_spellDescription = "WHOA!  Experience bonus' cost 10 xp now instead of 25 xp!"
			break;
	}

	showPopUp('epic', l_spellDescription);
}
function legendarySpell() {
	let l_spellDescription = "Default";

	//determine which spell will be cast
	const l_determinator = getRandomInt(1, m_numLegendarySpells);

	if(l_determinator == 1) { // Insta win!
		m_playerPoints = 10;
		m_userScore.innerText = m_playerPoints;

		m_computerPoints = -10;
		m_computerScore.innerText = m_computerPoints;
		l_spellDescription = 'Instant Win!!';
	} else if(l_determinator == 2) { //x10 multiplier
		if(m_spellExperienceMultiplier == 1) {
			m_spellExperienceMultiplier = 10;
		} else {
			m_spellExperienceMultiplier += 10;
		}
		l_spellDescription = "x10 Experience Multiplier";
	} else if(l_determinator == 3) {
		if(!m_hasRockDwayne) {
			m_rockBtn.style.background = 'url(img/rock/Dwayne_rock.png) no-repeat center';
			m_rockBtn.style.backgroundSize = "contain";
			l_spellDescription = "UNLOCK!\nDWAYNE 'THE ROCK' JOHNSON";
			m_hasRockDwayne = true;
		} else if(!m_hasPaperDwayne) {
			m_paperBtn.style.background = 'url(img/paper/Dwayne_paper.png) no-repeat center';
			m_paperBtn.style.backgroundSize = "contain";
			l_spellDescription = "UNLOCK!\nDWAYNE 'THE PAPER' JOHNSON";
			m_hasPaperDwayne = true;
		} else if(!m_hasScissorsDwayne) {
			m_scissorsBtn.style.background = 'url(img/scissors/Dwayne_scissors.png) no-repeat center';
			m_scissorsBtn.style.backgroundSize = "contain";
			l_spellDescription = "UNLOCK!\nDWAYNE 'THE SCISSORS' JOHNSON";
			m_hasScissorsDwayne = true;

			//unlock achievement
			showPopUp("achievement", "Unlock the full power of Dwayne The Rock Johnson");
			m_paperDwayne.style.color = "green";
			m_playerExperience += 1000;
			m_experienceDisplay.innerText = m_playerExperience;

			m_numLegendarySpells--;
		}
	}

	showPopUp('legendary', l_spellDescription);
}

m_scissorsBtn.addEventListener("click", function() {
	//increment the scissors counter (for achievement)
	m_numScissorsPlays += 1;

	//change image of userSelection to a scissors appropriate to their winnings
	if(m_hasScissorsDwayne) {
		m_userChoice.src = "img/scissors/Dwayne_scissors.png";
	} else {
		switch(m_scissorsRank) {
			case 1: //Razor
				m_userChoice.src = "img/scissors/razor.png";
				break;
			case 2: //Shears
				m_userChoice.src = "img/scissors/shears.png";
				break;
			case 3: //Ritual Knife
				m_userChoice.src = "img/scissors/ritualKnife.png";
				break;
			case 4: //Sickle
				m_userChoice.src = "img/scissors/Sickle.png";
				break;
			case 5: //Scythe
				m_userChoice.src = "img/scissors/scythe.png";
				break;
			default: //scissors
				m_userChoice.src = "img/scissors/Scissors.png";
				break;
		}
	}

	let l_outcome = playRound("scissors");

	//Spell to win draws
	if(l_outcome == 0 && (m_spellWinNextDraw || m_spellWinAllDraws)) {
		l_outcome = 1;
		m_spellWinNextDraw = false;
	}

	//rock special
	if(m_protected && l_outcome == -1) {
		l_outcome = 1;
		m_protected = false;
		showPopUp('rockSpecial', "Opponent didn't gain a point");
	}

	//determine the special ability of scissors
	let l_extraPoint = 0;
	let l_rankVSpecial = false;
	let l_determinator = getRandomInt(1, 100);
	switch(m_scissorsRank) {
		case 1: //Kitchen Scissors
			if(getRandomInt(1, 4) == 1 && l_outcome == 1) {
				l_extraPoint = 1;
				showPopUp('scissorsSpecial', 'Extra Point!');
			}
			break;
		case 2: //Trauma Scissors
			if(getRandomInt(1, 4) > 2 && l_outcome == 1) {
				l_extraPoint = 1;
				showPopUp('scissorsSpecial', 'Extra Point!');
			}
			break;
		case 3: //Sheep Shears
			if(l_determinator <= 75 && l_outcome == 1) {
				l_extraPoint = 1;
				showPopUp('scissorsSpecial', 'Extra Point!');
			} else if(l_determinator <= 85 && l_outcome == 1) {
				l_extraPoint = 2;
				showPopUp('scissorsSpecial', 'Extra 2 Points!');
			}
			break;
		case 4: //Sickle
			if(l_outcome == 1) {
				if(l_determinator <= 30) {
					l_extraPoint = 2;
					showPopUp('scissorsSpecial', 'Extra 2 Points!');
				} else {
					l_extraPoint = 1;
					showPopUp('scissorsSpecial', 'Extra Point!');
				}
			}
			
			break;
		case 5: //Scythe
			if(l_outcome == -1 && l_determinator <= 50) {
				l_rankVSpecial = true;
				l_extraPoint = 1;
				showPopUp('scythSpecial', 'Extra Point!');
			} else if(l_outcome == 1) {
				if(l_determinator <= 50) {
					l_extraPoint = 2;
					showPopUp('scythSpecial', 'Extra 2 Point!');
				} else if(l_determinator <= 70) {
					m_playerPoints = 20;
					m_userScore.innerText = m_playerPoints;
					m_computerPoints = -20;
					m_computerScore.innerText = m_computerPoints;
					showPopUp('scythSpecial', 'Consume Souls');
				} else {
					showPopUp('scissorsSpecial', 'Extra Point!');
					l_extraPoint = 1;
				}
			}
			break;
	}

	//outcome logic
	if(l_outcome == -1) { //loss
		if(l_rankVSpecial) {
			m_playerPoints += l_extraPoint;
			m_userScore.innerText = m_playerPoints;
		}
		m_outcomeText.innerText = "You Lost!";
		m_outcomeText.style.color = "red";
		m_computerPoints++;
		m_computerScore.innerText = m_computerPoints;
	} else if(l_outcome == 0) { //draw
		m_outcomeText.innerText = "Draw!";
		m_outcomeText.style.color = "white";
	} else if(l_outcome == 1) { //win
		m_outcomeText.innerText = "You won!";
		m_outcomeText.style.color = "green";
		if(m_playerPoints < 10) {
			m_playerPoints++;
		}
		m_playerPoints += l_extraPoint;
		m_userScore.innerText = m_playerPoints;
	}
	//test if the player or computer has won the game
	if(m_playerPoints >= 5) {
		endGame(true);
	} else if(m_computerPoints == 5) {
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
		
		let l_rockDeterminator = m_rockChance;
		let l_paperDeterminator = m_rockChance + m_paperChance;

    //determine if that number will be a rock, paper or scissors
    if(l_determinator <= l_rockDeterminator) {
			l_computerSelection = "rock";
			m_computerChoice.src = `img/${l_computerSelection}/${l_computerSelection}.png`;
		} else if(l_determinator <= l_paperDeterminator) {
			l_computerSelection = "paper";
			m_computerChoice.src = `img/${l_computerSelection}/Paper.png`;
		} else {
			l_computerSelection = "scissors";
			m_computerChoice.src = `img/${l_computerSelection}/Scissors.png`;
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

//wraps up the final score
function endGame(a_isVictorious) {
	//disable the game buttons so the user cannot keep playing the game
	m_rockBtn.disabled = true;
	m_paperBtn.disabled = true;
	m_scissorsBtn.disabled = true;

	//show the main results screen
	const l_div_resultsScreen = document.createElement("div");
	l_div_resultsScreen.style.position = "fixed";
	l_div_resultsScreen.style.left = "50%";
	l_div_resultsScreen.style.transform = "translate(-50%, 0)";
	l_div_resultsScreen.style.top = "25%";
	l_div_resultsScreen.style.zIndex = "2";
	l_div_resultsScreen.style.minWidth = "50%";
	l_div_resultsScreen.style.height = "35%";
	l_div_resultsScreen.style.backgroundColor = "black";
	l_div_resultsScreen.style.color = "white";
	l_div_resultsScreen.style.border = "5px solid white";
	l_div_resultsScreen.style.padding = "0px 10px 10px 10px";
	l_div_resultsScreen.style.textAlign = "center";
	l_div_resultsScreen.classList.add("fadeInItems");

	const l_h1_resultsTitle = document.createElement("h1");
	l_h1_resultsTitle.innerText = "Results";
	l_h1_resultsTitle.style.textAlign = "center";
	l_h1_resultsTitle.style.marginTop = "0px";
	l_h1_resultsTitle.style.fontSize = "35px";
	l_h1_resultsTitle.style.borderBottom = "2px solid white";
	l_div_resultsScreen.appendChild(l_h1_resultsTitle);

	//victory or defeat
	const l_h2_result = document.createElement("h2");
	l_h2_result.style.border = "2px solid white";
	l_h2_result.style.width = "35%";
	l_h2_result.style.position = "absolute";
	l_h2_result.style.left = "50%";
	l_h2_result.style.top = "40px";
	l_h2_result.style.transform = "translate(-50%, 0)";
	l_div_resultsScreen.appendChild(l_h2_result);

	//results table
	const l_table_resultsTable = document.createElement("table");
	l_table_resultsTable.style.textAlign = "center";
	l_table_resultsTable.style.marginTop = "25px";
	l_table_resultsTable.style.position = "absolute";
	l_table_resultsTable.style.left = "45%";
	l_table_resultsTable.style.transform = "translate(-50%, 0)";
	l_table_resultsTable.style.borderSpacing = "40px 10px";

	l_div_resultsScreen.appendChild(l_table_resultsTable);

	const l_tr_titles = document.createElement("tr");
	l_tr_titles.style.fontWeight = "bolder";
	l_tr_titles.style.textDecoration = "underline";
	const l_tr_expBreakdown = document.createElement("tr");
	l_table_resultsTable.appendChild(l_tr_titles);
	l_table_resultsTable.appendChild(l_tr_expBreakdown);

	//first column (title)
	const l_td_blank = document.createElement("td");
	l_tr_titles.appendChild(l_td_blank);
	const l_td_expTitle = document.createElement("td");
	l_td_expTitle.innerText = "Experience";
	l_td_expTitle.style.fontWeight = "bolder";
	l_tr_expBreakdown.appendChild(l_td_expTitle);

	//second column (Base Experience)
	const l_td_baseTitle = document.createElement("td");
	l_td_baseTitle.innerText = "Base";
	l_tr_titles.appendChild(l_td_baseTitle);

	const l_td_baseExp = document.createElement("td");
	l_td_baseExp.innerText = "5";
	l_tr_expBreakdown.appendChild(l_td_baseExp);

	//third column (Win Margin)
	const l_td_marginTitle = document.createElement("td");
	l_td_marginTitle.innerText = "Margin";
	l_tr_titles.appendChild(l_td_marginTitle);

	const l_td_winMargin = document.createElement("td");
	l_td_winMargin.innerText = "0"; //default
	l_tr_expBreakdown.appendChild(l_td_winMargin);

	//fourth column (Purchased Multipliers) 
	const l_td_multiplierTitle = document.createElement("td");
	l_td_multiplierTitle.innerText = "Purchased Multiplier";
	l_td_multiplierTitle.style.width = "30px";
	l_tr_titles.appendChild(l_td_multiplierTitle);

	const l_td_multiplier = document.createElement("td");
	l_td_multiplier.innerText = m_pointMultiplier; //default
	l_tr_expBreakdown.appendChild(l_td_multiplier);

	//optional column (spell Exp Multiplier)
	if(m_spellExperienceMultiplier > 1) {
		//if there was a spell xp multiplier, add a column to reflect it
		const l_td_spellMultTitle = document.createElement("td");
		l_td_spellMultTitle.innerText = "Spell Multiplier";
		l_td_spellMultTitle.style.width = "30px";
		l_tr_titles.appendChild(l_td_spellMultTitle);

		const l_td_spellMultiplier = document.createElement("td");
		l_td_spellMultiplier.innerText = m_spellExperienceMultiplier;
		l_tr_expBreakdown.appendChild(l_td_spellMultiplier);
	}

	//optional column(spell flat exp bonus)
	if(m_spellFlatExperienceBonus > 0) {
		//if there was a spell xp addition, add a column to reflect it
		const l_td_flatBonusTitle = document.createElement("td");
		l_td_flatBonusTitle.innerText = "Flat Exp Bonus";
		l_td_flatBonusTitle.style.with = "30px";
		l_tr_titles.appendChild(l_td_flatBonusTitle);

		const l_td_flatBonus = document.createElement("td");
		l_td_flatBonus.innerText = m_spellFlatExperienceBonus;
		l_tr_expBreakdown.appendChild(l_td_flatBonus);
	}

	//final column (final)
	const l_td_finalExpTitle = document.createElement("td");
	l_td_finalExpTitle.innerText = "Final";
	l_tr_titles.appendChild(l_td_finalExpTitle);

	const l_td_finalExp = document.createElement("td");
	l_td_finalExp.style.fontSize = "25px";
	l_tr_expBreakdown.appendChild(l_td_finalExp);

	//declare variables
	let l_experience;
	let l_winMargin;

	//victorious dependant effects
	if(a_isVictorious) {
		l_winMargin = m_playerPoints - m_computerPoints;
		l_h2_result.innerText = "VICTORY";
		l_h2_result.style.color = "green";
	} else {
		l_winMargin = 0;
		l_h2_result.innerText = "DEFEAT";
		l_h2_result.style.color = "red";
	}

	//calculate points
	l_experience = 5 * l_winMargin * m_pointMultiplier * m_spellExperienceMultiplier + m_spellFlatExperienceBonus;
	m_playerExperience += l_experience;
	m_experienceDisplay.innerText = m_playerExperience + " xp";

	//reflect those points on the breakdown
	l_td_winMargin.innerText = l_winMargin;
	l_td_finalExp.innerText = l_experience;



	//achievements
	let l_gotAchievement = false;
	let l_playedFirstGame = false;
	let l_gotFavortism = false;
	let l_gotPerfection = false;
	let l_gotExpAchiev = false;
	//first game
	if(m_virginPlayer) {
		l_gotAchievement = true;
		l_playedFirstGame = true;
		
		m_virginPlayer = false;
	}
	//win by only choosing rock, paper, or scissors
	if(!m_favoritism && a_isVictorious && (
		(m_numRockPlays == 0 && m_numPaperPlays == 0 && m_numScissorsPlays >= 5) ||
		(m_numScissorsPlays == 0 && m_numRockPlays == 0 && m_numPaperPlays >= 5) ||
		(m_numPaperPlays == 0 && m_numScissorsPlays == 0 && m_numRockPlays >= 5) 
	)) {
		l_gotAchievement = true;
		l_gotFavortism = true;
		
		m_favoritism = true;
	}
	//win a perfect game
	if(!m_perfection && m_playerPoints >= 5 && m_computerPoints <= 0) {
		l_gotAchievement = true;
		l_gotPerfection = true;
		
		m_perfection = true;
	}
	if(l_experience >= 10000 && !m_hasExpAchiev) {
		l_gotAchievement = true;
		l_gotExpAchiev = true;
		
		m_hasExpAchiev = true;
	}

	//add an achievements addendum to the results page if they got an achievement
	if(l_gotAchievement) {
		//change the height of the results screen
		l_div_resultsScreen.style.height = "50%";

		//display achievments
		const l_h2_achievements = document.createElement("h2");
		l_h2_achievements.innerText = "Achievements Awarded";
		l_h2_achievements.style.textDecoration = "underline";
		l_h2_achievements.style.position = "absolute";
		l_h2_achievements.style.left = "5%";
		l_h2_achievements.style.top = "200px";
		l_div_resultsScreen.appendChild(l_h2_achievements);

		const l_table_achievementTable = document.createElement("table");
		l_table_achievementTable.style.position = "absolute";
		l_table_achievementTable.style.left = "5%";
		l_table_achievementTable.style.top = "265px";
		l_table_achievementTable.style.textAlign = "left";
		l_table_achievementTable.style.borderSpacing = "0px 10px";
		l_div_resultsScreen.appendChild(l_table_achievementTable);

		//table header row
		const l_tr_achievHeader = document.createElement("tr");
		l_tr_achievHeader.style.fontWeight = "bolder";
		l_tr_achievHeader.style.fontSize = "20px";
		l_table_achievementTable.appendChild(l_tr_achievHeader);

		const l_td_achieveName = document.createElement("td");
		l_td_achieveName.style.width = "500px";
		l_td_achieveName.innerText = "Name";
		l_tr_achievHeader.appendChild(l_td_achieveName);

		const l_td_expAwarded = document.createElement("td");
		l_td_expAwarded.innerText = "Experience";
		l_tr_achievHeader.appendChild(l_td_expAwarded);

		//first win
		if(l_playedFirstGame) {
			const l_tr_firstPlayed = document.createElement("tr");
			l_table_achievementTable.appendChild(l_tr_firstPlayed);

			const l_td_firstPlayed = document.createElement("td");
			l_td_firstPlayed.innerText = "Welcome!";
			l_tr_firstPlayed.appendChild(l_td_firstPlayed);

			const l_td_firstPlayedExp = document.createElement("td");
			l_td_firstPlayedExp.innerText = "+5 xp";
			l_tr_firstPlayed.appendChild(l_td_firstPlayedExp);
		}

		//Favortism
		if(l_gotFavortism) {
			const l_tr_favortism = document.createElement("tr");
			l_table_achievementTable.appendChild(l_tr_favortism);

			const l_td_favortismTitle = document.createElement("td");
			l_td_favortismTitle.innerText = "Favortism";
			l_tr_favortism.appendChild(l_td_favortismTitle);

			const l_td_favortismExp = document.createElement("td");
			l_td_favortismExp.innerText = "+10 xp";
			l_tr_favortism.appendChild(l_td_favortismExp);
		}

		//Perfection
		if(l_gotPerfection) {
			const l_tr_perfection = document.createElement("tr");
			l_table_achievementTable.appendChild(l_tr_perfection);

			const l_td_perfection = document.createElement("td");
			l_td_perfection.innerText = "Perfection";
			l_tr_perfection.appendChild(l_td_perfection);

			const l_td_perfectionExp = document.createElement("td");
			l_td_perfectionExp.innerText = "+20 xp";
			l_tr_perfection.appendChild(l_td_perfectionExp);
		}

		//Experience Achievment
		if(l_gotExpAchiev) {
			const l_tr_expAchiev = document.createElement("tr");
			l_table_achievementTable.appendChild(l_tr_expAchiev);

			const l_td_expAchiev = document.createElement("td");
			l_td_expAchiev.innerText = "Overloaded";
			l_tr_expAchiev.appendChild(l_td_expAchiev);

			const l_td_expAchievExp = document.createElement("td");
			l_td_expAchievExp.innerText = "+1,000 xp";
			l_tr_expAchiev.appendChild(l_td_expAchievExp);
		}
	}

	//make the close button
	const l_btn_closeResults = document.createElement("button");
	l_btn_closeResults.innerText = "Close";
	l_btn_closeResults.classList.add("glow");
	l_btn_closeResults.classList.add("progressButtons");
	l_btn_closeResults.style.position = "absolute";
	l_btn_closeResults.style.left = "50%";
	l_btn_closeResults.style.transform = "translate(-50%, 0)";
	l_btn_closeResults.style.bottom = "20px";
	l_btn_closeResults.style.width = "80px";
	l_btn_closeResults.style.height = "30px";

	l_btn_closeResults.addEventListener("click", function() {
		l_div_resultsScreen.remove();

		//enable the game buttons so the user can play the game next time.
		m_rockBtn.disabled = false;
		m_paperBtn.disabled = false;
		m_scissorsBtn.disabled = false;

		//return to home screen
		returnToHome(l_playedFirstGame, l_gotFavortism, l_gotPerfection, l_gotExpAchiev);
	});
	l_div_resultsScreen.appendChild(l_btn_closeResults);
	m_numRockPlays = 0;
	m_numPaperPlays = 0;
	m_numScissorsPlays = 0;

	//show results screen
	m_body.appendChild(l_div_resultsScreen);
}

async function showPopUp(a_title, a_description) {
	//create a div to show the spell
	const l_spellEffectScreen = document.createElement("div");
	//the div will spawn on a random part of the screen
	l_spellEffectScreen.style.left = `${getRandomInt(15, 80)}%`;
	l_spellEffectScreen.style.top = `${getRandomInt(15, 80)}%`;

	//style the div
	l_spellEffectScreen.style.position = "absolute";
	l_spellEffectScreen.style.zIndex = "999";
	l_spellEffectScreen.style.width = "20%";
	l_spellEffectScreen.style.height = "25%";
	l_spellEffectScreen.style.backgroundColor = "rgba(100, 100, 100, 0.3)";
	l_spellEffectScreen.style.color = "white";
	l_spellEffectScreen.style.border = "2px solid white";
	l_spellEffectScreen.style.borderRadius = "10%";
	l_spellEffectScreen.style.textAlign = "Center";
	l_spellEffectScreen.style.pointerEvents = "none";

	m_body.appendChild(l_spellEffectScreen);

	const l_spellEffectTitle = document.createElement("H1");
	l_spellEffectTitle.style.color = "white";
	l_spellEffectScreen.appendChild(l_spellEffectTitle);

	const l_spellDescription = document.createElement("p");
	l_spellDescription.style.fontSize = "18px";
	l_spellDescription.innerText = a_description;
	l_spellEffectScreen.appendChild(l_spellDescription);

	//change title and description based on rarity of the spell
	switch(a_title) {
		case 'common':
			l_spellEffectTitle.innerText = "Common";
			l_spellEffectScreen.style.backgroundColor = "grey";
			break;
		case 'rare':
			l_spellEffectTitle.innerText = "Rare";
			l_spellEffectScreen.style.backgroundColor = "blue";
			break;
		case 'epic':
			l_spellEffectTitle.innerText = "Epic";
			l_spellEffectScreen.style.backgroundColor = "purple";
			break;
		case 'legendary':
			l_spellEffectTitle.innerText = "Legendary";
			l_spellEffectScreen.style.backgroundColor = "orange";
			break;
		case 'coal':
			l_spellEffectTitle.innerText = "Coal Special";
			l_spellEffectScreen.style.backgroundColor = "black";
			break;
		case 'stone':
			l_spellEffectTitle.innerText = "Stone Special";
			l_spellEffectScreen.style.backgroundColor = "#51414F";
			break;
		case 'diamond':
			l_spellEffectTitle.innerText = "Diamond Special";
			l_spellEffectScreen.style.backgroundColor = "#201935";
			break;
		case 'talisman':
			l_spellEffectTitle.innerText = "Talisman Special";
			l_spellEffectScreen.style.backgroundColor = "#cbe3f0";
			break;
		case 'rockSpecial':
			l_spellEffectTitle.innerText = "Rock Protection!";
			l_spellEffectScreen.style.backgroundColor = "#918E85";
			break;
		case 'protection':
			l_spellEffectTitle.innerText = "Future Protection";
			l_spellEffectScreen.style.backgroundColor = "#918E85";
			break;
		case 'scissorsSpecial':
			l_spellEffectTitle.innerText = "Slice and Dice";
			l_spellEffectScreen.style.backgroundColor = "#43464B";
			break;
		case 'scythSpecial':
			l_spellEffectTitle.innerText = "REAPER";
			l_spellEffectScreen.style.backgroundColor = "#bc153b";
			break;
		case 'achievement':
			l_spellEffectTitle.innerText = "ACHIEVEMENT";
			l_spellEffectScreen.style.backgroundColor = "black";
			l_spellEffectScreen.style.borderColor = "#FFB101";
			l_spellEffectScreen.style.borderWidth = "5px";
	}	

	l_spellEffectScreen.classList.add("popUpFadeInItems");
	await sleep(2000);
	l_spellEffectScreen.classList.remove("popUpFadeInItems");
	l_spellEffectScreen.classList.add("fadeOutItems");
	await sleep(2000);
	l_spellEffectScreen.classList.remove("fadeOutItems");
	l_spellEffectScreen.remove();
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

//END GAME CREDITS
function rollCredits() {
	//calclate their game time
	let l_finishTime = new Date((new Date().getTime() - m_startTime));
	let l_days = 0;
	let l_hours = 0;
	let l_min = 0;
	let l_sec = 0;

	while(l_finishTime >= 86400000) {
		l_days++;
		l_finishTime -= 86400000;
	}
	while(l_finishTime >= 3600000) {
		l_hours++;
		l_finishTime -= 3600000;
	}
	while(l_finishTime >= 60000) {
		l_min++;
		l_finishTime -= 60000;
	}
	while(l_finishTime >= 1000) {
		l_sec++;
		l_finishTime -= 1000;
	}

	//create a floating div
	const l_creditsScreen = document.createElement("div");
	l_creditsScreen.classList.add("floatingItems");
	l_creditsScreen.style.border = "2px solid white";
	l_creditsScreen.style.color = "white";
	l_creditsScreen.style.position = "fixed";
	l_creditsScreen.style.left = "50%";
	l_creditsScreen.style.transform = "translate(-50%, 0)";
	l_creditsScreen.style.top = "15%";
	l_creditsScreen.style.zIndex = "1";
	l_creditsScreen.style.width = "50%";
	l_creditsScreen.style.height = "70%";
	l_creditsScreen.style.padding = "0px 10px 10px 20px";

	//create a header
	const l_creditCongrats = document.createElement("p");
	l_creditCongrats.innerText = "CONGRATULATIONS!";
	l_creditCongrats.style.fontSize = "46px";
	l_creditCongrats.style.textAlign = "Center";
	l_creditCongrats.style.marginBottom = "0px";

	const l_timePlayed = document.createElement("p");
	l_timePlayed.innerText = `Your Time:\n${l_days} days\n${l_hours} hours\n${l_min} minutes\n${l_sec} seconds\n${l_finishTime} milliseconds`;

	l_timePlayed.style.textAlign = "Center";
	l_timePlayed.style.fontSize = "18px";

	const l_creditTitle = document.createElement("h2");
	l_creditTitle.innerText = "Credits";
	l_creditTitle.style.textDecoration = "underline";

	//create the content
	const l_creditCreatorTitle = document.createElement("span");
	l_creditCreatorTitle.innerText = "Creator: ";
	l_creditCreatorTitle.style.fontWeight = "bolder";
	l_creditCreatorTitle.style.fontSize = "18px";

	const l_creditCreator = document.createElement("span");
	l_creditCreator.innerText = "Connor Meads\nHandled game design and the programming.\n\n";
	l_creditCreator.style.fontSize = "18px";

	const l_creditArtistTitle = document.createElement("span");
	l_creditArtistTitle.innerText = "Artist: ";
	l_creditArtistTitle.style.fontSize = "18px";
	l_creditArtistTitle.style.fontWeight = "bolder";

	const l_creditArtist = document.createElement("span");
	l_creditArtist.innerText = "Jessica Allman\nHandled the upgrade names and designs.";
	l_creditArtist.style.fontSize = "18px";

	const l_creditThanks = document.createElement("h2");
	l_creditThanks.innerText = "Thanks for playing my game!";
	l_creditThanks.style.textAlign = "Center";
	l_creditThanks.style.marginTop = "100px";

	const l_creditExitBtn = document.createElement("button");
	l_creditExitBtn.style.position = "absolute";
	l_creditExitBtn.style.left = "50%";
	l_creditExitBtn.style.transform = "translate(-50%, 0)";
	l_creditExitBtn.style.height = "40px";
	l_creditExitBtn.style.width = "100px";
	l_creditExitBtn.style.fontSize = "18px";
	l_creditExitBtn.classList.add("glow");
	l_creditExitBtn.classList.add("progressButtons");
	l_creditExitBtn.innerText = "Restart";

	l_creditExitBtn.addEventListener("click", function() {
		location.reload();
	});

	//add credits to the screen
	l_creditsScreen.appendChild(l_creditCongrats);
	l_creditsScreen.appendChild(l_timePlayed);
	l_creditsScreen.appendChild(l_creditTitle);
	l_creditsScreen.appendChild(l_creditCreatorTitle);
	l_creditsScreen.appendChild(l_creditCreator);
	l_creditsScreen.appendChild(l_creditArtistTitle);
	l_creditsScreen.appendChild(l_creditArtist);
	l_creditsScreen.appendChild(l_creditThanks);
	l_creditsScreen.appendChild(l_creditExitBtn);

	m_body.appendChild(l_creditsScreen);
}