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

//Functions//

//Function is run whenever the user presses a key.//
document.onkeyup = functon(event)

    //determines which key was pressed.//
    var playerGuess = event.key;
    
    //Generates a random number 0-9. This is the computers secret number//
    function randomNumber(){
    var random = Math.ceil(Math.random()*10);
    return random;
    }

    for(i=0; i<10; i++){
        console.log(i);
    }

    //Statements determine the outcome of the game//
    function checkPlayerGuess(){
        if (playerGuess < computerGuess){
            losses++;
        }else if (playerGuess > computerGuess){
            losses++;
        }else{
            wins++;
        }
    
    }



    //Display the results of the game//
    function displayPlayerOutcome(){
        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;


    }


