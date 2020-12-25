const log = function(i) {
    console.log(i);
}

//game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft =3;

//UI elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInpit = document.querySelector('#guess-input'),
      message = document.querySelector('.message');
      
//assign UI min/max
minNum.textContent = min;
maxNum.textContent = max;

//play again event listener
game.addEventListener('mousedown',function(e){
    if(e.target.className === 'play-again') {
        window.location.reload();
    }
});

//listen for guess
guessBtn.addEventListener('click', function(){
   let guess = parseInt(guessInpit.value);
   log(guess);
   //validate
   if(isNaN(guess) || guess < min || guess > max){
       setMessage(`Please enter a number between ${min} and ${max}`, 'red');
   }
   //win
   if(guess === winningNum) {
    gameOver(true, `${winningNum} is correct, you win!`);

   } else {
       guessesLeft -= 1;

       if (guessesLeft === 0) {
        gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);
       } else {
        guessInpit.style.borderColor = 'red';
        guessInpit.value = '';
        setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
       }
   } 
});


//game over
function gameOver(won, msg) {
    let color; 
    won === true ? color = 'green' : color = 'red'; 

    guessInpit.disabled = true;
    guessInpit.style.borderColor = color;
    message.style.color = color;
    setMessage(msg);

    //play again
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}

//set message
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}

//winning number randomizer
function getRandomNum(min, max){
   return Math.floor(Math.random() * (max - min + 1) + min);
}

