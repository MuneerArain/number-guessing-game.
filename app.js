// Step 1: Alert / Welcome message
alert(" Welcome to the Random Number Guessing Game!");

// Step 2: Secret number (generate random number between 1 and 10)
var secretNumber = Math.floor(Math.random() * 10) + 1;

// Step 3: Prompt user for a guess
var userGuess = prompt("Guess a number between 1 and 10:");

// Step 4: Check conditions
if (userGuess === null) {
  alert(" Game cancelled. Please try again!");
} else {
  var guess = parseInt(userGuess); // Convert to number

  if (isNaN(guess)) {
    alert(" Invalid input! Please enter a valid number.");
  } else if (guess === secretNumber) {
    alert(" Correct! You win!");
  } else {
    alert(" Wrong guess. Better luck next time!\nThe correct number was: " + secretNumber);
  }
}
