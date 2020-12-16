Taren Chen
HW8:
This is HW8 for GUI 1 Course at UMass Lowell
and the link to access it is https://tarenchen.github.io/hw8/scrabble.html

I was able to implement everything in the rubric. 
One thing I did not implement was letting the blank tile be any letter. It currently has the value of '_' 

All my files are commented, so this a brief description of what I did for each rubric item.

• (4) letter tiles in the player’s “hand” are selected randomly from a data structure with the
proper distribution of the letters
- Made a random function that would randomly pick a letter from inside the data structure.

• (4) letter tiles can be dragged-and-dropped onto target Scrabble squares
- Used JQuery drag and drop on the divs that contain the images of the scrabble tiles.

• (4) program identifies which letter tile is dropped onto which Scrabble square
- I did this by reaching into the data structure and grabbing the values I needed

• (4) board includes bonus squares
- Board contains two bonus squares (double letter points)

• (4) score is tallied correctly, including consideration of bonus square multipliers
- When we drop in the div that has a bonus square I was able to double count the points. Since you can't move the letters after it's dropped I update the score once the letter is dropped.

• (3) any number of words can be played until the player wishes to quit or depletes all tiles
- I prompt the user to restart after they finish using all the tiles. They can restart anytime by clicking the restart button.

• (3) the board is cleared after each round so that a new word can be played
- I clear the board each round by removing the peices that are no longer "draggable" thus dropped.

• (3) after playing a word, only the number of letter tiles needed to bring the player’s “hand” back to 7 tiles are selected
- I only grab from the data structure only enough tiles to bring the player's hand back to 7 tiles keeping the previous unused tiles.

• (3) score is kept for multiple words until the user restart a new game
- score stays until the game is restarted

• (2) Tiles can only be dragged from the “rack” to Scrabble board. If the user drop them
anywhere else, they will be bounced back to the “rack”.
- My tiles will bounce back to the rack if it's dropped somewhere it's not allowed to.

• (2) Once the tile is placed on the Scrabble board, it can not be moved.
- I change the property to not draggable once it's dropped in the board.

• (2) Except for the first letter, all sub-subsequent letters must be placed directly next to or
below another letter with no space. Else, they will bounce back to the “rack”.
- I only let the user start in the first block of the board then it they can add letters directly to the right of it.

• (2) user can always restart the game.
- User can always restart the game by pressing the restart button.
