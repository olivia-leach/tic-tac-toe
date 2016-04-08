# tic-tac-toe game

Project 1 for General Assembly Web Development Immersive.
@olivia-leach -- Completed on 4/7/2016

## Goal

Create a working tic-tac-toe game with the following features:

-   User register/log in/log out/change password functionality
-   Switch turns between X and O
-   Keep score between X, O, and ties
-   Be able to see user stats when logged in:

    -   No. games played
    -   No. games won
    -   Complete game history

## Approach

-   Structure basic bones of page layout with HTML/CSS: bootstrap and flexbox
-   Connect user-based API events on the front end to API using AJAX/jQuery:

    -   Log in (sign-in, POST request)
    -   Log out (sign-out, DELETE request)
    -   Register (sign-up, POST request)
    -   Change Password (change-password, PATCH request)

-   Complete JS game logic: single array to represent gameboard:

    -   One function to set up game board
    -   One function for a 'turn':

        -   Check if game is over based on win conditions
        -   If game is over, who won

-   Connect gameplay js to board with jQuery event listeners on each game square
-   Connect game-play API events on the front end to API using AJAX / jQuery:

    -   Create new game (create, POST request)
    -   Send move to back end (update, PATCH request)
    -   Look up game history (index, GET request)

-   Flush out HTML/CSS
-   Add some fun design bonuses

## Wireframe

<https://app.moqups.com/olliiviia/o9hwhjxk/view>

## User Stories

-   As a user, I want to be able to have a log in account so that I can view my game hisory.
-   As a user, I want an interactive scoreboard that tells me how many games I've won against an opponent.
-   As a user, I want to be able to see my win/loss history.
-   As a user, I want to be able to start a new game after I've just finished one.

## Potential future updates (aka if I had more time...)

-   Clean up js files (get rid of redundant code)
-   Add cross-device functionality for 2 players
-   Be able to click on an old game in the game history table and rewatch game play, or continue an unfinished game
-   Draw line to show row/column/diagnol that won
-   Animate drawing of X's and O's
-   Change pointer to be image of X or O when mouse hovers over board
