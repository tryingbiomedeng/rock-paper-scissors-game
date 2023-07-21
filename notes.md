# pseudocode - basic app

Create a program that plays Rock, Paper, Scissors with the user.
When the user completes a game - win or lose - they should be prompted to begin another one.
The program should only use console output; no graphics are needed.

function rpsGame (players_choice)
    optionsArray = [rock, paper, scissor]
    comp_choice = random from optionsArray

    if (players_choice === comp_choice);
        print (it's a tie)

    else (
        if (players_choice === rock and computer_choice === scissors)
            print (you win)
        else if (players_choice === rock and computer_choice === paper)
            print (you lose)
        else if (players_choice === paper and computer_choice === rock)
            print (you win) 
        else if (players_choice === paper and computer_choice === scissors)
            print (you lose) 
        else if (players_choice === scissors and computer_choice === rock)
            print (you lose) 
        else if (players_choice === scissors and computer_choice === paper)
            print (you win) 
    )

    print (do you want to play another round?)
    if yes
        start again
    else
        end

# problems

1. console.log(print) - does not work question asked but does not take input // solved - add user input to sepearate function then into function

2. does not allow repeat of game // solved - use readline

3. game ends after new game prompt // solved - caused due to rl.close being called immmediately after first game. create separate playAgain function that has rl.close

# game 2.0

1. initialise 3 variables to count wins, losses and ties from player pov
2. use ansi-colors 

# problems 2.0

1. kept writing rock/paper/scissors when asked y or no // solved - added a condition to validate input, also added condition to input rock, paper, scissors

2. tried to use a condtion that allows for shortcut use e.g r, p, s but all outcomes ended up as lose. // ???
