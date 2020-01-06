//array containing all letters in the alphabet

let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q",
                "r","s","t","u","v","w","x","y","z"];

//Global Variables

var winCount=0;
var lossCount=0;
var guessesRemaining= 10;
var guessedLetters = [];

//Computer to pick random letter
var randomLetter = Math.floor(Math.random() * alphabet.length);
var computerChoice = alphabet[randomLetter];

console.log('Computer choice= ' + computerChoice);

//add a listener for the user to press a key
document.onkeyup = function(event) {
    var userChoice = event.key;
    //make sure the user selects an alpha character
    var regexp = /[a-z]/gi;
        if (!regexp.test(userChoice)){
            alert("please enter a letter");
        }
        else{
            console.log('User Choice= ' + userChoice);
        }
//Reset computer choice if the user loses
if (guessesRemaining <= 0){
    lossCount++;
    document.getElementById("lossCount").innerHTML = ("Losses: ") + lossCount;
    alert("Miss Cleo was a better guesser than you! Psychic you are not!");
    guessesRemaining = 10;
    guessedLetters = [];
    document.getElementById("guessedLetters").innerHTML = ("Yours Guesses So Far: ") + guessedLetters;
    document.getElementById("guessesRemaing").innerHTML = ("Guesses Left: ") + guessesRemaining;
    randomLetter = Math.floor(Math.random() * alphabet.length);
    computerChoice = alphabet[randomLetter];
    console.log('Computer choice= ' + computerChoice);
}

//Compares the computer choice to the user choice
if (computerChoice === userChoice){
    alert('Congratulations! You are pyschic!');
    winCount++;
    document.getElementById("winCount").innerHTML = ("Wins: ") + winCount;
    guessedLetters = [];
    document.getElementById("guessedLetters").innerHTML =("Yours Guesses So Far: ") + guessedLetters;
    randomLetter = Math.floor(Math.random() * alphabet.length);
    computerChoice = alphabet[randomLetter];
    guessesRemaining = 10;
    document.getElementById("guessesRemaining").innerHTML = ("Guesses Left: ") + guessesRemaining;
}else{
    console.log("Guess again!");
    document.getElementById("guessesRemaining").innerHTML = ("Guesses Left: ") + guessesRemaining--;
    guessedLetters.push(userChoice);
    document.getElementById("guessedLetters").innerHTML = ("Yours Guesses So Far: ") + guessedLetters;
}
}