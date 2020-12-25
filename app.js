const log = function(i) {
    console.log(i);
}

//game values
let min = 1,
    max = 10,
    winningNum = 2,
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

//listen for guess
guessBtn.addEventListener('click', function(){
   let guess = parseInt(guessInpit.value);
   log(guess);
   //validate
   if(isNaN(guess) || guess < min || guess > max){
       setMessage(`Please enter a number between ${min} and ${max}`, 'red');
   }    
});

//set message
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}

