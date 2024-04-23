const boardHeight = 20;
const boardWidth = 25;
const gameBoard = document.getElementById('game-board');
const car = document.getElementById('car');
const size = 10;

function createBoard() {
    for (let i = 0; i < boardHeight; i++) {
        for (let j = 0; j < boardWidth; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            gameBoard.appendChild(cell);
        }
    }
    car.style.top = '5vh';
    car.style.left = '5vw';
}

function handleArrowKeys(event) {
    const arrowKey = event.key;
    switch (arrowKey) {
        case 'ArrowUp':
            car.style.top = (car.offsetTop - size) + 'px';
            break;
        case 'ArrowDown':
            car.style.top = (car.offsetTop + size) + 'px';
            break;
        case 'ArrowLeft':
            car.style.left = (car.offsetLeft - size) + 'px';
            break;
        case 'ArrowRight':
            car.style.left = (car.offsetLeft + size) + 'px';
            break;
    }
}

createBoard();
document.addEventListener('keydown', handleArrowKeys);