// theory about dom
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent= '🎉Correct Number!';

document.querySelector('.number').textContent=13;
document.querySelector('.score').textContent=25;

document.querySelector('.guess').value=23;


*/

// create the number random
let secretNumber=Math.trunc(Math.random()*20)+1;

// function create mess
const displayMessage=(mess) => {
    document.querySelector('.message').textContent=mess;
}


const displayBodyMessage=(mess) => {
    document.querySelector('.bodymessage').textContent=mess;
}

const setBackgroundColor=(color) => {
    document.querySelector('body').style.backgroundColor=color;
}


// load the hightscore 
document.addEventListener('DOMContentLoaded', function () {
    const storedHighScore = localStorage.getItem('highscore');
    if (storedHighScore) {
        document.querySelector('.highscore').textContent = storedHighScore;
    }
});

// event click into check
document.querySelector('.check').addEventListener('click', function () {
    // create a variable 
    let guess = Number(document.querySelector('.guess').value);
    let scoredisplay = document.querySelector('.score');
    let highScore=document.querySelector('.highscore');

    if (!guess) {
        displayMessage('🔕 No Number!');
        setBackgroundColor('#DC143C');
        displayBodyMessage('PLEASE ENTER THE NUMBER❗');
        document.querySelector('.number').textContent=secretNumber;
    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number!');
        setBackgroundColor('#60b347');
        document.querySelector('.number').style.width='30rem';
        displayBodyMessage('YOU WIN🧨');
        document.querySelector('.number').textContent=secretNumber;

        if (scoredisplay.textContent > highScore.textContent) {
            highScore.textContent = scoredisplay.textContent;
        }
        // Save the updated highScore to localStorage
        if (scoredisplay.textContent == 20) {
            displayBodyMessage("YOU ARE VERY LUCKY⭐");
            highScore.textContent = 0;
        }
        localStorage.setItem('highscore', highScore.textContent);

    } else {
        if(scoredisplay.textContent>1) {
            displayMessage((guess>secretNumber)?'📉 Too High!' : '📈 Too Low!');
            scoredisplay.textContent--;
        }
         else {
            scoredisplay.textContent = 0;
            displayMessage('📛 You lost the game!');
            setBackgroundColor('#DC143C');
            displayBodyMessage('TRY AGAIN❗');
    }
    }
});

// EVENT click into again
document.querySelector('.again').addEventListener('click', function() {
    secretNumber=Math.trunc(Math.random()*20)+1;
    document.querySelector('.number').textContent=secretNumber;

    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = isNaN;
    document.querySelector('.score').textContent=20;

    setBackgroundColor('#222');
    document.querySelector('.number').style.width='15rem';

    displayBodyMessage('Guess My Number');
    displayMessage('Start guessing...');

});

