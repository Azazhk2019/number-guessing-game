// Question 1: Number Guessing Game (Beginner)
// Problem:

// The secret number is 5.

// Ask the user to guess a number between 1 and 10.

// The user has 3 chances.

// If the guess is correct → Show "Correct!" and stop.

// If the guess is wrong → Show "Try again!"

// If all 3 chances are used → Show "Game over!"

// Concepts Used:
// while or for loop, if-else, break, user input

let attempt = 0;
while (attempt < 3){
    let userNumber = parseInt(prompt("Enter your guessing number from 1 to 10: "));
if (isNaN(userNumber) || userNumber > 10 || userNumber < 1){
    alert(`Please enter valid number`)
}else if (userNumber === 5){
    alert(`Great you have guessed the right number ${userNumber}`);
    break;
}else{
    attempt++
    alert(`Sorry you have guessed the wrong number ${userNumber}`)
    
}
}
if (attempt === 3){
    alert(`Game over! the correct answer was 5`)
}

