# The Odin Project | Challenge 2: Rock Paper Scissors (DOM Practice)
You can find my page here: https://septimis.github.io/rock-paper-sissors/

## Description
Players will play rounds of Rock, Paper, Scissors against the computer.  The first one to 5 points wins the game.  Players are awarded experience points based off of their performance in the game and can use those points to upgrade their abilities or change the cosmetics to improve on their next game.  Try to unlock all of the abilities and cosmetics!  


## Game Guide
The game is simple, select your weapon: <b>Sturdy Rock, Mystical Paper, or Vicious Scissors</b>.  Use these to fight the computer to win perks and upgrades that will aid you in later conquests.

1. Each round, the player and computer will chose either Rock, Paper, or Scissors.  The first to 5 points wins the game.
1. Each game will reward you with points **if** you win.
    - You will recieve `5 * the number of points you won by`
        - For example, if you win 5 to 4, you won by a margin of 1, so your points would be `5 * 1`.  If you win 5 to 0, you won by a margin of 5, so your points would be `5 * 5`.
1. You may use points to buy upgrades for your rock, paper, or scissors and gain the upper hand.  Asthetic upgrades and other rewards can also be earned.
#### Upgrades & Items
-   ROCK
    - Rock I - 50xp to unlock
        - There is a 50% chance on a loss *this* round that your opponent will not gain a point. 
    - Rock II - 100xp to unlock
        - There is a 75% chance on a loss *this* round that your opponent will not gain a point.
    - Rock III - 200xp to unlock
        - There is a 75% chance on your *next* loss this game that your opponent will not gain a point.
    - Rock IV - 500xp to unlock
        - There is a 75% chance on a loss *this* round that your opponent will not gain a point **and** a 50% chance that your opponent will not gain a point on your *next* loss this game.
    - Rock V - 1000xp to unlock
        - There is a 90% chance on a loss *this* round that your opponent will not gain a point **and** a 90% chance on your *next* loss this game that your opponent will not gain a point.
- PAPER
    - Paper I - 50xp to unlock
        - Upon winning with paper, there is a 50% chance to activate a common spell, a 5% chance to activate a rare spell, and a 45% chance nothing will happen.
    - Paper II - 100xp to unlock
        - Upon winning with paper, there is a 75% chance to activate a common spell, a 20% chance to activate a rare spell, and a 5% chance to activate an epic spell.
    - Paper III - 200xp to unlock
        - Upon winning with paper, there is a 25% chance to activate a common spell, a 50% chance to activate a rare spell, and a 25% chance to activate an epic spell.
    - Paper IV - 500xp to unlock
        - Upon winning with paper, there is a 60% chance to activate a rare spell, a 35% chance to activate an epic spell, and a 5% chance to activate a *LEGENDARY* spell.
    - Paper V - 1000xp to unlock
        - Regardless of the outcome, there is a 30% chance to activate a rare spell, a 60% chance to activate an epic spell, and a 10% chance to activate a *LEGENDARY* spell.
- SCISSORS
    - Scissors I - 50xp to unlock
        - Upon winning with scissors, there is a 50% chance to gain an additional point.
    - Scissors II - 100xp to unlock
        - Upon winning with scissors, there is a 75% chance to gain an additional point.
    - Scissors III - 200xp to unlock
        - Upon winning with scissors, there is a 75% chance to gain an additional point, or a 10% chance to gain 2 additional points.
    - Scissors IV - 500xp to unlock
        - Upon winning with scissors, there is a 75% chance to gain an additional point, or a 20% chance to gain 2 additional points.
    - Scissors V - 1000xp to unlock
        - Upon losing with scissors, you have a 50% chance of gaining an additional point.  If you win with scissors, there is a 50% chance to gain 2 additional points, and a 10% chance to win the game immedietly.
---
## Education

### Challenges and Learning
I ran into a problem at the beginning just trying to get my JavaScript file to run.  I found that the link to a JavaScript file needs to be referenced at the bottom of a page, not at the top as any `document.getElementById()` will return with null as the html id's have not been initiated yet.