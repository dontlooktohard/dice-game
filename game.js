let currentScore =0
const holdBtn = document.querySelector('#hold');
const newGame = document.querySelector('#newGame');
const startGame = document.querySelector('#startGame');
let isPlayerOne = false
let totalScorePlayerOne = 0 ;
let totalScorePlayerTwo = 0 ;
let targetScore = 0;
console.log(startGame);

startGame.addEventListener("click", function() {
  let target = document.querySelector('#textInput').value;
  targetScore = target ;
  document.getElementById("gameMenu").style.display = "none";
  })


function generateNumber() {
    return Math.floor(Math.random() * 6) + 1;
  }

//   change the dice imag by using the string of the src + the random number
  document.getElementById("myButton").addEventListener("click", function() {
    let randomNumber = generateNumber();
    let randomNumber2 = generateNumber();
   
    const firstDiceImage = "./assets/dice-" + randomNumber + '.png';
    document.querySelectorAll('img')[0].setAttribute('src',firstDiceImage);
    const firstDiceImage2 = "./assets/dice-" + randomNumber2 + '.png';
    document.querySelectorAll('img')[1].setAttribute('src',firstDiceImage2);

    if (isPlayerOne) {
      currentScore += randomNumber + randomNumber2;
      let current = document.querySelectorAll('.score-box')[0];
      current.textContent = currentScore;
      if ((randomNumber + randomNumber2)===12) {
        currentScore=0;
        current.textContent = currentScore;
        isPlayerOne = !isPlayerOne
      }
      if (totalScorePlayerOne > targetScore) {
        prompt('playerTwo wins the game 🤴')
        current[0].textContent =0;
        current[1].textContent =0;
         currentScore = 0 ;
         document.querySelectorAll('.score')[0].textContent =0;
         document.querySelectorAll('.score')[1].textContent =0;
         isPlayerOne = !isPlayerOne
         document.getElementById("gameMenu").style.display = "show";
      }
    } 
    else {
      currentScore += randomNumber + randomNumber2;
      let current = document.querySelectorAll('.score-box')[1];
      current.textContent = currentScore;
      if ((randomNumber + randomNumber2)===12) {
        currentScore=0;
        current.textContent = currentScore;
        isPlayerOne = !isPlayerOne
      }
      if (totalScorePlayerTwo > targetScore) {
        prompt('playerOne wins the game 🤴')
        current[0].textContent =0;
        current[1].textContent =0;
         currentScore = 0 ;
         document.querySelectorAll('.score')[0].textContent =0;
         document.querySelectorAll('.score')[1].textContent =0;
         isPlayerOne = !isPlayerOne
         document.getElementById("gameMenu").style.display = "show";
      }
    }
  });

  // hold event 
holdBtn.addEventListener("click", function() {
if (isPlayerOne) {
    totalScorePlayerOne += currentScore;
    document.querySelectorAll('.score')[0].textContent = totalScorePlayerOne;

    
}else {
    totalScorePlayerTwo += currentScore;
    document.querySelectorAll('.score')[1].textContent = totalScorePlayerTwo;

}
let current = document.querySelectorAll('.score-box')
   current[0].textContent =0;
   current[1].textContent =0;
    currentScore = 0 ;
    isPlayerOne = !isPlayerOne
})

newGame.addEventListener("click", function() {
  let current = document.querySelectorAll('.score-box')
   current[0].textContent =0;
   current[1].textContent =0;
    currentScore = 0 ;
    document.querySelectorAll('.score')[0].textContent =0;
    document.querySelectorAll('.score')[1].textContent =0;
    isPlayerOne = !isPlayerOne
})
