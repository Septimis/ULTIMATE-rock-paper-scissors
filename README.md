# The Odin Project | Challenge 2: Rock Paper Scissors (Console)
You can find my page here: https://septimis.github.io/rock-paper-sissors/

## Description
This is the Odin Projects introduction to Javascript.  The user can play Rock Paper Scissors by interacting with the <i>console</i> in the Developers Tools.  To open devleoper tools, select your browser for a tutorial: [chrome](https://developer.chrome.com/docs/devtools/), [firefox](https://developer.mozilla.org/en-US/docs/Tools), [Edge](https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/open/).  Upon loading the page, the user will have a pop up asking how many times they would like to run the game, and then the user must enter in 'rock', 'paper', or 'scissors' for each game.  A final tally will be calculated at the end and the winner will be announced.

## Challenges & Learning
I ran into a problem at the beginning just trying to get my JavaScript file to run.  I found that the link to a JavaScript file needs to be referenced at the bottom of a page, not at the top as any `document.getElementById()` will return with null as the html id's have not been initiated yet.