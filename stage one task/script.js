const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
let score = 0;
let targetColor;

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function updateColorBox() {
    targetColor = getRandomColor();
    document.getElementById('colorBox').style.backgroundColor = targetColor;
}

function generateColorOptions() {
    const optionsContainer = document.getElementById('colorOptions');
    optionsContainer.innerHTML = '';
    colors.sort(() => Math.random() - 0.5);
    colors.forEach(color => {
        const button = document.createElement('button');
        button.style.backgroundColor = color;
        button.className = 'color-option';
        button.setAttribute('data-testid', 'colorOption');
        button.onclick = () => checkGuess(color);
        optionsContainer.appendChild(button);
    });
}

function checkGuess(color) {
    const gameStatus = document.getElementById('gameStatus');
    if (color === targetColor) {
        score++;
        gameStatus.innerText = 'Correct!';
        gameStatus.style.color = 'green';
    } else {
        gameStatus.innerText = 'Wrong! Try again.';
        gameStatus.style.color = 'red';
    }
    document.getElementById('score').innerText = `Score: ${score}`;
    setTimeout(() => {
        gameStatus.innerText = '';
        updateColorBox();
        generateColorOptions();
    }, 2000);
}

function startNewGame() {
    score = 0;
    document.getElementById('score').innerText = `Score: ${score}`;
    document.getElementById('gameStatus').innerText = '';
    updateColorBox();
    generateColorOptions();
}

document.getElementById('newGameButton').onclick = startNewGame;

// Initialize the game
startNewGame();