//Creating varibales to hold current and last guess. Players wins and losses//

var playerGuess
var playerWins = 0;
var playerLosses = 0;
var guessesLeft = 10;

//Create variables to reference back to the HTML to display the items seen by the player//
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var remainingText = document.getElementById("remaining-text");
var playerguessText = document.getElementById("playerguess-text");

//countsdown the number of guess the player has used//
for (i=0; i<10; i++) { 
    console.log(i+1);
}

var secretNumber =  Math.ceil(Math.random()) * 10;


