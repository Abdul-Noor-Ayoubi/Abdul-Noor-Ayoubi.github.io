let numberToGuess = Math.floor((Math.random() * 10) + 1);
let numberOfGuesses = 0;

document.getElementById("SubmitBtn").onclick = function()
{
    let userGuess = document.getElementById("UserGuessText").value;
    let NbOfGuessesText = document.getElementById("nbOfGuesses");

    numberOfGuesses++;
    NbOfGuessesText.innerHTML = "Number of Guesses: " + numberOfGuesses;

    if(userGuess > numberToGuess)
    {
        window.alert("The real number is smaller");
    }
    else if(userGuess < numberToGuess)
    {
        window.alert("The real number is greater");
    }
    else if(userGuess == numberToGuess)
    {
        window.alert("Correct!, Guess the new number");
        numberToGuess = Math.floor((Math.random() * 10) + 1);
        numberOfGuesses = 0;
        NbOfGuessesText.innerHTML = "Number of Guesses: " + numberOfGuesses;
    }
    else
    {
        window.alert("Enter a number");
    }
}