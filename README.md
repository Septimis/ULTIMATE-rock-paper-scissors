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
        - There is a 25% chance on a loss *this* round that your opponent will not gain a point. 
    - Rank II: Stone - 100 xp to unlock
        - There is a 50% chance on a loss *this* round that your opponent will not gain a point.
    - Rank III: Crystal - 500 xp to unlock
        - There is a 75% chance on your *next* loss this game that your opponent will not gain a point.
    - Rank IV: Diamond - 1,000 xp to unlock
        - There is a 75% chance on a loss *this* round that your opponent will not gain a point **and** a 50% chance that your opponent will not gain a point on your *next* loss this game.
    - Rank V: Talisman - 5,000 xp to unlock
        - There is a 90% chance on a loss *this* round that your opponent will not gain a point **and** a 90% chance on your *next* loss this game that your opponent will not gain a point.
- PAPER
    - Rank I: Scroll - 50 xp to unlock
        - Upon winning with paper, there is a 50% chance to activate a common spell, a 5% chance to activate a rare spell, and a 45% chance nothing will happen.
    - Rank II: Spellbook - 100 xp to unlock
        - Upon winning with paper, there is a 75% chance to activate a common spell, a 20% chance to activate a rare spell, and a 5% chance to activate an epic spell.
    - Rank III: Lexicon - 500 xp to unlock
        - Upon winning with paper, there is a 25% chance to activate a common spell, a 50% chance to activate a rare spell, and a 25% chance to activate an epic spell.
    - Rank IV:Grimoire - 1,000 xp to unlock
        - Upon winning with paper, there is a 60% chance to activate a rare spell, a 35% chance to activate an epic spell, and a 5% chance to activate a *LEGENDARY* spell.
    - Rank V: Necronomicon - 5,000 xp to unlock
        - Upon winning with paper, there is an 80% chance to activate an epic spell, and a 20% chance to activate a *LEGENDARY* spell.
- SCISSORS
    - Rank I: Razor - 50 xp to unlock
        - Upon winning with scissors, there is a 25% chance to gain an additional point.
    - RAnk II: Shears - 100 xp to unlock
        - Upon winning with scissors, there is a 50% chance to gain an additional point.
    - Rank III: Ritual Knife - 500 xp to unlock
        - Upon winning with scissors, there is a 75% chance to gain an additional point, or a 10% chance to gain 2 additional points.
    - Rank IV: Sickle - 1,000 xp to unlock
        - Upon winning with scissors, there is a 100% chance to gain an additional point, or a 30% chance to gain 2 additional points.
    - Rank V: Scyth - 5,000 xp to unlock
        - Upon losing with scissors, you have a 50% chance of gaining an additional point.  If you win with scissors, there is a 100% chance to gain a point, a 50% chance to gain 2 additional points, and a 20% chance to set player points to 20 and computer points to -20.
#### Spells
Each category has an equal chance to activate the spell.  Flat experience gains will be added **AFTER** multipliers have been added.  Experience multipliers will stack with each other at the end of the game.  For example, suppose you cast a +10 experience spell, a x2 experience bonus, and a x4 experience bonus.  Your final score would be calculated by: *5 x margin x purchased Experience Bonus' x 2 x 4 + 10*.  Some spell effects are permanent such as the Dwayne cards and the reduced cost of an experience bonus.  Once you have unlocked these, they will be removed from the pool of available spells and can no longer be cast.
##### Common
 - +1-5 xp bonus THIS game regardless of outcome.
 - Set the background to a random (dark) color.
 - Randomize the scores. (Caution!  This could not go in your favor!)
##### Rare
 - +20 xp bonus THIS game regardless of outcome.
 - Gain a x2 exp bonus THIS game.
 - You will win the **next** draw this game.
 - Reverse the scores (Caution!  This could not go in your favor).
##### Epic
 - Experience bonus costs 10 xp instead of 25 xp.
 - Gain a x4 exp bonus THIS game.
 - You win all draws THIS game.
 - Set your opponents points to 0.
##### Legendary
 - Unlock Dwayne "The Rock" Johnson
 - Unlock Dwayne "The Paper" Johnson
 - Unlock Dwayne "The Scissors" Johnson
 - Gain a x10 xp bonus THIS game.
 - Set the score to 10 / -10
---
## Education

### Challenges and Learning
#### HTML
 - I learned the beauty and simplicity of a `<table>`.  Rows and columns were very easy to set up and style.
 - Nesting divs and spans are your best friend when it comes to positioning and styling.
#### .CSS
 - In general, getting the website to look the same on different screens was a challenge.  I learned the correct time and place of pixel offsets to percentage.
 - Learning about about transform was a big leap forward in centering items on any sized screen.
 - I learned a lot about different `position` styles and when to use them.
 - The pop-up `Game Guide` was a really good exercise in position elements as well as adding scroll bars to div's.
 - Overall this project felt more natural than previous ones in regards to placement of what I want.
#### JavaScript
- The \<script> tag needs to be specified at the bottom of an html page, not the top.  Otherwise the JavaScript file will have no idea what elements you're talking about.
- I also learned to reference the JavaScript file in the Head element using 'defer'.
- I had a difficult time getting animations to repeat afte they have already played.  I was able to accomplish this by adding and removing the elements and their classes. This [resource](https://css-tricks.com/restart-css-animation/) was very helpful.
- Jumping between 2 different screens with only **one** html file was excellent practice in JavaScript *DOM Manipulation*.

##### DOM Manipulation within JavaScript
- Namely I had to create all elements on the html page, then wipe out the ones I wasn't using immedietly using the `remove()` function, then add them on a button click.
- Originally I created all of my elements in html, then would toggle their visibility using JavaScript.  Once I learned more about DOM Manipulation, I decided it would be better instead to dynamically generate and delete these elements completely in the DOM instead of toggling their visibility.  This turned out to be a fantastic idea.
- The pop up idea to display spells and effects activating was one of my best ideas as it really contributes to the progression of power the player will feel. 

### Resources
Main reference: [w3Schools](https://www.w3schools.com/) \
Restarting a .CSS animation: [css tricks](https://css-tricks.com/restart-css-animation/)