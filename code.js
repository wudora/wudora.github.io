const boardHeight = 20;
const boardWidth = 25;
const gameBoard = document.getElementById('game-board');
let board = [];
let carX = 0;
let carY = 0;
const car = document.getElementById('car');
const projectTitle = document.getElementById('projectTitle');
const ogTitle = projectTitle.innerText;
const projectText = document.getElementById('projectText');
const ogText = projectText.innerText;
const go = document.getElementById('go');

function createBoard() {
    for (let i = 0; i < boardHeight; i++) {
        board[i] = [];
        for (let j = 0; j < boardWidth; j++) {
            if (i == 0 && j == 0) {
                board[0][0] = car;
            }
            else if (i == 3 && j == 5) {
                const s1a1 = document.createElement('img');
                s1a1.id = 's1a1';
                s1a1.src = 'images/cone.png';
                s1a1.classList.add('project');
                gameBoard.appendChild(s1a1);
                board[i][j] = s1a1;
            }
            else if (i == 3 && j == 12) {
                const s1a2 = document.createElement('img');
                s1a2.id = 's1a2';
                s1a2.src = 'images/cone.png';
                s1a2.classList.add('project');
                gameBoard.appendChild(s1a2);
                board[i][j] = s1a2;
            }
            else if (i == 1 && j == 18) {
                const s1f = document.createElement('img');
                s1f.id = 's1f';
                s1f.src = 'images/cone.png';
                s1f.classList.add('project');
                gameBoard.appendChild(s1f);
                board[i][j] = s1f;
            }
            else if (i == 5 && j == 22) {
                const s2a1 = document.createElement('img');
                s2a1.id = 's2a1';
                s2a1.src = 'images/cone.png';
                s2a1.classList.add('project');
                gameBoard.appendChild(s2a1);
                board[i][j] = s2a1;
            }
            else if (i == 10 && j == 15) {
                const s2a2 = document.createElement('img');
                s2a2.id = 's2a2';
                s2a2.src = 'images/cone.png';
                s2a2.classList.add('project');
                gameBoard.appendChild(s2a2);
                board[i][j] = s2a2;
            }
            else if (i == 8 && j == 7) {
                const s2f = document.createElement('img');
                s2f.id = 's2f';
                s2f.src = 'images/cone.png';
                s2f.classList.add('project');
                gameBoard.appendChild(s2f);
                board[i][j] = s2f;
            }
            else if (i == 12 && j == 3) {
                const s3a1 = document.createElement('img');
                s3a1.id = 's3a1';
                s3a1.src = 'images/cone.png';
                s3a1.classList.add('project');
                gameBoard.appendChild(s3a1);
                board[i][j] = s3a1;
            }
            else if (i == 17 && j == 6) {
                const s3a2 = document.createElement('img');
                s3a2.id = 's3a2';
                s3a2.src = 'images/cone.png';
                s3a2.classList.add('project');
                gameBoard.appendChild(s3a2);
                board[i][j] = s3a2;
            }
            else if (i == 15 && j == 18) {
                const s3f = document.createElement('img');
                s3f.id = 's3f';
                s3f.src = 'images/cone.png';
                s3f.classList.add('project');
                gameBoard.appendChild(s3f);
                board[i][j] = s3f;
            }
            else {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                gameBoard.appendChild(cell);
                board[i][j] = cell;
            }
        }
    }
}

function displayProject(project){
    const id = project.id;
    if (car.style.transform == 'rotate(90deg)' || car.style.transform == 'rotate(0deg)') {
        project.style.transform = 'rotate(-70deg)';
    }
    else {
        project.style.transform = 'rotate(70deg)';
    }
    go.style.visibility = 'visible';
    if (id == "s1a1") {
        projectTitle.innerText = 'Section 1 Assignment 1';
        projectText.innerText = "welhbvwlr";
        go.href = "https://codepen.io/Dora-Wu-the-sans/pen/mdoxyaZ?editors=1100";
    }
    else if (id == "s1a2") {
        projectTitle.innerText = 'Section 1 Assignment 2';
        projectText.innerText = "welhbvwlr";
        go.href = "https://codepen.io/Dora-Wu-the-sans/pen/MWxrxyg?editors=1100";
    }
    else if (id == "s1f") {
        projectTitle.innerText = 'Section 1 Final Project';
        projectText.innerText = "welhbvwlr";
        go.href = "decision/index.html";
    }
    else if (id == "s2a1") {
        projectTitle.innerText = 'Section 2 Assignment 1';
        projectText.innerText = "welhbvwlr";
        go.href = "decision/index.html";
    }
    else if (id == "s2a2") {
        projectTitle.innerText = 'Section 2 Assignment 2';
        projectText.innerText = "welhbvwlr";
        go.href = "smiski/index.html";
    }
    else if (id == "s2f") {
        projectTitle.innerText = 'Section 2 Final Project';
        projectText.innerText = "welhbvwlr";
        go.href = "https://editor.p5js.org/wudora/sketches/NEC-FDB6b";
    }
    else if (id == "s3a1") {
        projectTitle.innerText = 'Section 3 Assignment 1';
        projectText.innerText = "welhbvwlr";
        go.href = "closet/index.html";
    }
    else if (id == "s3a2") {
        projectTitle.innerText = 'Section 3 Assignment 2';
        projectText.innerText = "welhbvwlr";
        go.href = "s3a2/index.html";
    }
    else if (id == "s3f") {
        projectTitle.innerText = 'Section 3 Final Project';
        projectText.innerText = "welhbvwlr";
        go.href = "";
    }
}

function moveCar(row, col) {
    const temp = board[row][col];
    if (temp.classList.contains('project')) {
        displayProject(temp);
    }
    else {
        projectTitle.innerText = ogTitle;
        projectText.innerText = ogText;
        go.style.visibility = 'hidden';
        const index1 = Array.from(gameBoard.children).indexOf(car);
        const index2 = Array.from(gameBoard.children).indexOf(temp);
        gameBoard.removeChild(car);
        gameBoard.insertBefore(car, gameBoard.children[index2]);
        gameBoard.removeChild(temp);
        gameBoard.insertBefore(temp, gameBoard.children[index1]);
        board[row][col] = car;
        board[carY][carX] = temp;
        carY = row;
        carX = col;
    }
}

function handleArrowKeys(event) {
    const arrowKey = event.key;
    switch (arrowKey) {
        case 'ArrowUp':
            if(carY > 0) {
                moveCar(carY - 1, carX);
                car.style.transform = 'rotate(180deg)';
            }
            break;
        case 'ArrowDown':
            if(carY < boardHeight - 1) {
                moveCar(carY + 1, carX);
                car.style.transform = 'rotate(0deg)';
            }
            break;
        case 'ArrowLeft':
            if(carX > 0) {
                moveCar(carY, carX - 1);
                car.style.transform = 'rotate(90deg)';
            }
            break;
        case 'ArrowRight':
            if(carX < boardWidth - 1) {
                moveCar(carY, carX + 1);
                car.style.transform = 'rotate(270deg)';
            }
            break;
    }
}

createBoard();
document.addEventListener('keydown', handleArrowKeys);
moveCar(1, 0);
moveCar(2, 0);
moveCar(3, 0);