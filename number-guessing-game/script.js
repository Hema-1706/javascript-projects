let randomNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;

let inputBox = document.getElementById("guessInput");

let checkButton = document.getElementById("checkBtn");

let restartButton = document.getElementById("restartBtn");

let message = document.getElementById("message");

let attemptsText = document.getElementById("attempts");


checkButton.addEventListener("click", function () {

    let userGuess = Number(inputBox.value);

    if (userGuess < 1 || userGuess > 100) {
        message.textContent = "Enter a number between 1 and 100";
        return;
    }

    attempts++;

    attemptsText.textContent = "Attempts: " + attempts;

    if (userGuess === randomNumber) {
        message.textContent = "Correct! You guessed it!";
        message.style.color = "green";
    }

    else if (userGuess > randomNumber) {
        message.textContent = "Too High!";
        message.style.color = "red";
    }

    else {
        message.textContent = "Too Low!";
        message.style.color = "orange";
    }

    inputBox.value = "";

});


restartButton.addEventListener("click", function () {

    randomNumber = Math.floor(Math.random() * 100) + 1;

    attempts = 0;

    attemptsText.textContent = "Attempts: 0";

    message.textContent = "Game Restarted! Start guessing...";

    message.style.color = "black";

    inputBox.value = "";

});