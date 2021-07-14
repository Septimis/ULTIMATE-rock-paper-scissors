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
    - Rank I: Coal - 50 xp to unlock
        - There is a 50% chance on a loss *this* round that your opponent will not gain a point. 
    - Rank II: Quartz - 100 xp to unlock
        - There is a 75% chance on a loss *this* round that your opponent will not gain a point.
    - Rank III: Topaz - 200 xp to unlock
        - There is a 75% chance on your *next* loss this game that your opponent will not gain a point.
    - Rank IV: Moissanite - 500 xp to unlock
        - There is a 75% chance on a loss *this* round that your opponent will not gain a point **and** a 50% chance that your opponent will not gain a point on your *next* loss this game.
    - Rank V: Diamond - 1000 xp to unlock
        - There is a 90% chance on a loss *this* round that your opponent will not gain a point **and** a 90% chance on your *next* loss this game that your opponent will not gain a point.
- PAPER
    - Rank I: Scroll - 50 xp to unlock
        - Upon winning with paper, there is a 50% chance to activate a common spell, a 5% chance to activate a rare spell, and a 45% chance nothing will happen.
    - Rank II: Spellbook - 100 xp to unlock
        - Upon winning with paper, there is a 75% chance to activate a common spell, a 20% chance to activate a rare spell, and a 5% chance to activate an epic spell.
    - Rank III: Lexicon - 200 xp to unlock
        - Upon winning with paper, there is a 25% chance to activate a common spell, a 50% chance to activate a rare spell, and a 25% chance to activate an epic spell.
    - Rank IV:Grimoire - 500 xp to unlock
        - Upon winning with paper, there is a 60% chance to activate a rare spell, a 35% chance to activate an epic spell, and a 5% chance to activate a *LEGENDARY* spell.
    - Rank V: Sovereign Intellect - 1000 xp to unlock
        - Regardless of the outcome, there is a 30% chance to activate a rare spell, a 60% chance to activate an epic spell, and a 10% chance to activate a *LEGENDARY* spell.
- SCISSORS
    - Rank I: Kitchen Scissors - 50 xp to unlock
        - Upon winning with scissors, there is a 50% chance to gain an additional point.
    - RAnk II: Trauma Scissors - 100 xp to unlock
        - Upon winning with scissors, there is a 75% chance to gain an additional point.
    - Rank III: Sheep Shears - 200 xp to unlock
        - Upon winning with scissors, there is a 75% chance to gain an additional point, or a 10% chance to gain 2 additional points.
    - Rank IV: Bolt Cutters - 500 xp to unlock
        - Upon winning with scissors, there is a 75% chance to gain an additional point, or a 20% chance to gain 2 additional points.
    - Rank V: Gro'noth, Destroyer of Worlds - 1000 xp to unlock
        - Upon losing with scissors, you have a 50% chance of gaining an additional point.  If you win with scissors, there is a 50% chance to gain 2 additional points, and a 10% chance to win the game immedietly.
---
## Education

### Challenges and Learning
#### HTML
 - I learned the beauty and simplicity of a `<table>`.  Rows and columns were very easy to set up and style.
 - Nesting divs and spans are your best friend when it comes to positioning and styling.
#### .CSS
 - I struggled a lot with getting my `background-image: linear-gradient()` to fill the entire screen regardless of the size of the screen.
 - In general, getting the website to look the same on different screens was a challenge.  I learned the correct time and place of pixel offsets to percentage.
 - I learned a lot about different `position` styles and when to use them.
 - The pop-up `Game Guide` was a really good exercise in position elements as well as adding scroll bars to div's.
 - Overall this project felt more natural than previous ones in regards to placement of what I want.
#### JavaScript
- The \<script> tag needs to be specified at the bottom of an html page, not the top.  Otherwise the JavaScript file will have no idea what elements you're talking about.
- I had a difficult time getting animations to repeat afte they have already played.  I was able to accomplish this by adding and removing the elements and their classes. This [resource](https://css-tricks.com/restart-css-animation/) was very helpful.
- Jumping between 2 different screens with only **one** html file was excellent practice in JavaScript *DOM Manipulation*.
    - Namely I had to create all elements on the html page, then wipe out the ones I wasn't using immedietly using the `remove()` function, then add them on a button click.

### Resources
Main reference: [w3Schools](https://www.w3schools.com/) \
Restarting a .CSS animation: [css tricks](https://css-tricks.com/restart-css-animation/)