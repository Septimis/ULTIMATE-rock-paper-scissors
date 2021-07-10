# The Odin Project | Challenge 2: Rock Paper Scissors (DOM Practice)
You can find my page here: https://septimis.github.io/rock-paper-sissors/

## Description
The game is simple, select your weapon: <b>Sturdy Rock, Mystical Paper, or Vicious Scissors.</b><br>


## Game Guide
1. Each round, the player and computer will chose either Rock, Paper, or Scissors.  The first to 5 points wins the game.
1. Each round will reward you with points **if** you win.
    - You will recieve 5 * how many points you won the game by
1. You may use points buy various upgrades and items.
    

## Challenges & Learning
I ran into a problem at the beginning just trying to get my JavaScript file to run.  I found that the link to a JavaScript file needs to be referenced at the bottom of a page, not at the top as any `document.getElementById()` will return with null as the html id's have not been initiated yet.