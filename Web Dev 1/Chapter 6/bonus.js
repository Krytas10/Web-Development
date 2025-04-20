
let correctColor; 
let lives = 3; 
let score = 0; 
let correctIndex; 


const rgbValue = document.getElementById('rgb-value');
const livesDisplay = document.getElementById('lives');
const colorOptions = document.getElementById('color-options').children;
const feedback = document.getElementById('feedback');
const scoreDisplay = document.getElementById('score');
const replayBtn = document.getElementById('replay-btn');


startGame();


function startGame() {
   
    lives = 3;
    score = 0;
    livesDisplay.textContent = `Lives: ${lives}`;
    scoreDisplay.textContent = '';
    feedback.textContent = '';
    replayBtn.style.display = 'none'; 
    colorOptions[0].style.pointerEvents = 'auto'; 
    colorOptions[1].style.pointerEvents = 'auto';
    colorOptions[2].style.pointerEvents = 'auto';
    generateNewRound(); 
}


function generateNewRound() {
    
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    correctColor = `rgb(${r}, ${g}, ${b})`;

    
    rgbValue.textContent = correctColor;

    
    const colors = [];
    colors.push(correctColor);

    
    for (let i = 0; i < 2; i++) {
        const rMod = (r + Math.floor(Math.random() * 100 + 50)) % 256;
        const gMod = (g + Math.floor(Math.random() * 100 + 50)) % 256;
        const bMod = (b + Math.floor(Math.random() * 100 + 50)) % 256;
        colors.push(`rgb(${rMod}, ${gMod}, ${bMod})`);
    }

    
    for (let i = colors.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [colors[i], colors[j]] = [colors[j], colors[i]];
    }

    
    correctIndex = colors.indexOf(correctColor);

    
    for (let i = 0; i < colorOptions.length; i++) {
        colorOptions[i].style.backgroundColor = colors[i];
    }
}


function checkGuess(index) {
    if (index === correctIndex) {
       
        feedback.textContent = 'Correct!';
        feedback.style.color = '#2ecc71'; 
        score += 10; 
        setTimeout(() => {
            feedback.textContent = '';
            generateNewRound(); 
        }, 1000);
    } else {
       
        feedback.textContent = 'Incorrect!';
        feedback.style.color = '#e63946'; 
        lives -= 1; 
        livesDisplay.textContent = `Lives: ${lives}`;

        if (lives === 0) {
            
            setTimeout(() => {
                feedback.textContent = 'Game Over!';
                scoreDisplay.textContent = `Final Score: ${score}`;
                colorOptions[0].style.pointerEvents = 'none'; 
                colorOptions[1].style.pointerEvents = 'none';
                colorOptions[2].style.pointerEvents = 'none';
                replayBtn.style.display = 'block'; 
            }, 1000);
        } else {
            
            setTimeout(() => {
                feedback.textContent = '';
                generateNewRound(); 
            }, 1000);
        }
    }
}