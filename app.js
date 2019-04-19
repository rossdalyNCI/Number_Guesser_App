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
});

// Set Message
function setMessage(msg, color){ // assigned 2 variables here
    message.style.color = color;
    message.textContent = msg;
}