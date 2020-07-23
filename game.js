alert('Mouse over the circle 30 times in 12 seconds. Ready?');

let score = 0;
const scoreDocument = document.getElementById('score'); 
const player = document.getElementById('player');
let time = 13;
const timeDocument = document.getElementById('time');
let totalPoints = 30;
scoreDocument.innerHTML = 'Score: 0/30'

player.addEventListener('mouseover', () => {
    score++;
    scoreDocument.innerHTML = 'Score: ' + score + '/' + totalPoints;

    randomNum = Math.round(Math.random()*390);
    randomNum2 = Math.round(Math.random()*390);
    player.style.marginTop = randomNum + 'px';
    player.style.marginLeft = randomNum2 + 'px';
    if (score === 30) {
        alert('Won! Again?')
        reset();
    }
})

function subtractTime () {
    time--
    timeDocument.innerHTML = 'Time: ' + time + 's.'
    if (time === 0) {
        alert('You lost :(, try again?');
        reset();
    }
}

setInterval(subtractTime,1000);

function reset () {
    time = 13; 
    score = 0;
    scoreDocument.innerHTML = 'Score: 0/30'
    timeDocument.innerHTML = 'Time: 0s.'
}