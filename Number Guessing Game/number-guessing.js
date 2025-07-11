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

