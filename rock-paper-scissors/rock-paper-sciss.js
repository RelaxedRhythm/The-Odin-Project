let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    loses: 0,
    ties: 0
} /*||= default operators property of booleans if 1st not true (falsy)then the 2nd one operates*/
/*if(score===null){
 score={
     wins:0,
     loses:0,
     ties:0
 }
}*/
let result = '';


updateScore();

let isautoplaying = false;
let intervalId;

document.querySelector('.resetScore').addEventListener('click', () => {
    resetScore();
})

function resetScore() {

    score.wins = 0;
    score.loses = 0;
    score.ties = 0;
    localStorage.removeItem('score')
    updateScore();
}

autoplayButton = document.querySelector('.autoplay-button')
function autoplay() {
    if (!isautoplaying) {
        intervalId = setInterval(() => {
            const playerMove = pickComputerMove()
            playGame(playerMove);
        }, 1000);
        isautoplaying = true;
        autoplayButton.innerHTML = 'Stop Playing';
    }
    else {
        clearInterval(intervalId);
        isautoplaying = false;
        autoplayButton.innerHTML = 'AutoPlay Again'
    }
};

autoplayButton.addEventListener('click', () => {
    autoplay();
})

document.querySelector('.js-rock').addEventListener('click', () => {
    playGame('rock');
})

document.querySelector('.js-paper').addEventListener('click', () => {
    playGame('paper');
})

document.querySelector('.js-scissor').addEventListener('click', () => {
    playGame('scissors');
})


document.body.addEventListener('keydown', (event) => {
    if (event.key === 'r') {
        playGame('rock');
    }
    else if (event.key === 'p') {
        playGame('paper');
    }
    else if (event.key === 's') {
        playGame('scissors');
    }
    else if (event.key === 'a') {
        autoplay();
    }
    else if (event.key === 'Backspace') {
        resetScore();
    }
})



function playGame(playerMove) {
    let computerMove = pickComputerMove();

    if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'lose';
        }
        else if (computerMove = 'paper') {
            result = 'win';
        }
        else if (computerMove === 'scissors') {
            result = 'tie';
        }
    }
    else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'win';
        }
        else if (computerMove === 'paper') {
            result = 'tie';
        }
        else if (computerMove === 'scissors') {
            result = 'lose';
        }
    }
    else if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'tie';
        }
        else if (computerMove = 'paper') {
            result = 'lose';
        }
        else if (computerMove === 'scissors') {
            result = 'win';
        }
    }
    if (result === 'win') {
        score.wins += 1;
    }
    else if (result === 'lose') {
        score.loses += 1;
    }
    else if (result === 'tie') {
        score.ties += 1;
    }
    localStorage.setItem('score', JSON.stringify(score));/*json used to convert score obj to string as locallstorage only suppprts strings*/

    document.querySelector('.js-result').innerHTML = `You 
            <img src="${playerMove}-emoji.png" class="move-icon">
            <img src="${computerMove}-emoji.png" class="move-icon">
            Computer`;


    updateScore();
}


function updateScore() {
    document.querySelector('.js-score').innerHTML = `wins: ${score.wins}, loses: ${score.loses}, ties: ${score.ties}`;
}


function pickComputerMove() {
    let computerMove = '';
    const random = Math.random();

    console.log(random);
    if (random >= 0 && random < 1 / 3) {
        computerMove = 'rock';
    }
    else if (random >= 1 / 3 && random < 2 / 3) {
        computerMove = 'paper';
    }
    else if (random >= 2 / 3 && random < 1) {
        computerMove = 'scissors';
    }
    console.log(computerMove);

    return computerMove;
}