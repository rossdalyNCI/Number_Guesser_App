// Game Values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess
guessBtn.addEventListener('click', function(){ // listen for a click and then we want to call a function
    let guess = parseInt(guessInput.value); // parsing the value as an integer
    
    // Validate
    if(isNaN(guess) || guess < min || guess > max){ // if guess is equal to Not a Number or its less than the min or greater than the max
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    // Check if won
    if(guess === winningNum){
        
        // Game over - won
        gameOver(true, `${winningNum} is correct, YOU WIN!`);

    } else {
        // Wrong number
        guessesLeft -= 1; // same as putting guessesLeft = guessesLeft - 1

        if(guessesLeft === 0){
            // Game over - lost
            gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);
            
        } else {
            // Game continues - answer wrong

            // Change border color
            guessInput.style.borderColor = 'red';

            // Clear Input
            guessInput.value = '';

            // Tell user its the wrong number
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
        }
    }
});

// Game over
function gameOver(won, msg){
    let color;
    won === true ? color = 'green' : color = 'red'; // if won is equal to true, then we want that color to equal green, else we want that color to equal red

    // Disable input
    guessInput.disabled = true;
    // Change border color
    guessInput.style.borderColor = color; // defined above on whether a user won or not
    // Set text color
    message.style.color = color;
    // Set message
    setMessage(msg); // msg passed in

    // Play Again?
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again'; // will append the class name of 'play-again' to guessBtn
}

// Set Message
function setMessage(msg, color){ // assigned 2 variables here
    message.style.color = color;
    message.textContent = msg;
}