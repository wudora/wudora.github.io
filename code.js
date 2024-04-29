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
const arrows = document.getElementById('arrows');

function createBoard() {
    for (let i = 0; i < boardHeight; i++) {
        board[i] = [];
        for (let j = 0; j < boardWidth; j++) {
            if (i == 0 && j == 0) {
                board[0][0] = car;
            }
            else if (i == 2 && j == 5) {
                const w2 = document.createElement('img');
                w2.id = 'w2';
                w2.src = 'images/cone.png';
                w2.classList.add('disc');
                gameBoard.appendChild(w2);
                board[i][j] = w2;
            }
            else if (i == 3 && j == 11) {
                const w3 = document.createElement('img');
                w3.id = 'w3';
                w3.src = 'images/cone.png';
                w3.classList.add('disc');
                gameBoard.appendChild(w3);
                board[i][j] = w3;
            }
            else if (i == 2 && j == 21) {
                const w4 = document.createElement('img');
                w4.id = 'w4';
                w4.src = 'images/cone.png';
                w4.classList.add('disc');
                gameBoard.appendChild(w4);
                board[i][j] = w4;
            }
            else if (i == 8 && j == 21) {
                const w6 = document.createElement('img');
                w6.id = 'w6';
                w6.src = 'images/cone.png';
                w6.classList.add('disc');
                gameBoard.appendChild(w6);
                board[i][j] = w6;
            }
            else if (i == 10 && j == 13) {
                const w8 = document.createElement('img');
                w8.id = 'w8';
                w8.src = 'images/cone.png';
                w8.classList.add('disc');
                gameBoard.appendChild(w8);
                board[i][j] = w8;
            }
            else if (i == 9 && j == 4) {
                const w9 = document.createElement('img');
                w9.id = 'w9';
                w9.src = 'images/cone.png';
                w9.classList.add('disc');
                gameBoard.appendChild(w9);
                board[i][j] = w9;
            }
            else if (i == 13 && j == 2) {
                const w11 = document.createElement('img');
                w11.id = 'w11';
                w11.src = 'images/cone.png';
                w11.classList.add('disc');
                gameBoard.appendChild(w11);
                board[i][j] = w11;
            }
            else if (i == 17 && j == 6) {
                const w12 = document.createElement('img');
                w12.id = 'w12';
                w12.src = 'images/cone.png';
                w12.classList.add('disc');
                gameBoard.appendChild(w12);
                board[i][j] = w12;
            }
            else if (i == 16 && j == 15) {
                const w13 = document.createElement('img');
                w13.id = 'w13';
                w13.src = 'images/cone.png';
                w13.classList.add('disc');
                gameBoard.appendChild(w13);
                board[i][j] = w13;
            }
            else if (i == 17 && j == 20) {
                const w14 = document.createElement('img');
                w14.id = 'w14';
                w14.src = 'images/cone.png';
                w14.classList.add('disc');
                gameBoard.appendChild(w14);
                board[i][j] = w14;
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

function displayDiscussion(disc){
    const id = disc.id;
    arrows.style.visibility = 'hidden';
    if (car.style.transform == 'rotate(90deg)' || car.style.transform == 'rotate(0deg)') {
        disc.style.transform = 'rotate(-70deg)';
    } else {
        disc.style.transform = 'rotate(70deg)';
    }
    if (id == "w2") {
        projectTitle.innerText = 'OH NO! You Crashed!';
        projectText.innerText = "Week 2";
    } else if (id == "w3") {
        projectTitle.innerText = 'OH NO! You Crashed!';
        projectText.innerText = "Week 3";
    } else if (id == "w4") {
        projectTitle.innerText = 'OH NO! You Crashed!';
        projectText.innerText = "Week 4";
    } else if (id == "w6") {
        projectTitle.innerText = 'OH NO! You Crashed!';
        projectText.innerText = "Week 6";
    } else if (id == "w8") {
        projectTitle.innerText = 'OH NO! You Crashed!';
        projectText.innerText = "Week 8";
    } else if (id == "w9") {
        projectTitle.innerText = 'OH NO! You Crashed!';
        projectText.innerText = "Week 9";
    } else if (id == "w11") {
        projectTitle.innerText = 'OH NO! You Crashed!';
        projectText.innerText = "Week 11";
    } else if (id == "w12") {
        projectTitle.innerText = 'OH NO! You Crashed!';
        projectText.innerText = "Week 12";
    } else if (id == "w13") {
        projectTitle.innerText = 'OH NO! You Crashed!';
        projectText.innerText = "Week 13";
    } else if (id == "w14") {
        projectTitle.innerText = 'OH NO! You Crashed!';
        projectText.innerText = "Week 14";
    }
}

function moveCar(row, col) {
    const temp = board[row][col];
    if (temp.classList.contains("disc")){
        displayDiscussion(temp);
    }
    else {
        if (row == 3 && col == 7) {
            arrows.style.visibility = 'hidden';
            document.getElementById("flag1").src = "images/grayflag.png";
            go.style.visibility = 'visible';
            projectTitle.innerText = 'Section 1 Assignment 1';
            projectText.innerText = "welhbvwlr";
            go.href = "https://codepen.io/Dora-Wu-the-sans/pen/mdoxyaZ?editors=1100";
        } else if (row == 2 && col == 14) {
            arrows.style.visibility = 'hidden';
            document.getElementById("flag2").src = "images/grayflag.png";
            go.style.visibility = 'visible';
            projectTitle.innerText = 'Section 1 Assignment 2';
            projectText.innerText = "welhbvwlr";
            go.href = "https://codepen.io/Dora-Wu-the-sans/pen/MWxrxyg?editors=1100";
        } else if (row == 4 && col == 21) {
            arrows.style.visibility = 'hidden';
            document.getElementById("flag3").src = "images/grayflag.png";
            go.style.visibility = 'visible';
            projectTitle.innerText = 'Section 1 Final Project';
            projectText.innerText = "welhbvwlr";
            go.href = "decision/index.html";
        } else if (row == 10 && col == 18) {
            arrows.style.visibility = 'hidden';
            document.getElementById("flag4").src = "images/grayflag.png";
            go.style.visibility = 'visible';
            projectTitle.innerText = 'Section 2 Assignment 1';
            projectText.innerText = "welhbvwlr";
            go.href = "decision/index.html";
        } else if (row == 9 && col == 11) {
            arrows.style.visibility = 'hidden';
            document.getElementById("flag5").src = "images/grayflag.png";
            go.style.visibility = 'visible';
            projectTitle.innerText = 'Section 2 Assignment 2';
            projectText.innerText = "welhbvwlr";
            go.href = "smiski/index.html";
        } else if (row == 10 && col == 4) {
            arrows.style.visibility = 'hidden';
            document.getElementById("flag6").src = "images/grayflag.png";
            go.style.visibility = 'visible';
            projectTitle.innerText = 'Section 2 Final Project';
            projectText.innerText = "welhbvwlr";
            go.href = "https://editor.p5js.org/wudora/sketches/NEC-FDB6b";
        } else if (row == 16 && col == 2) {
            arrows.style.visibility = 'hidden';
            document.getElementById("flag7").src = "images/grayflag.png";
            go.style.visibility = 'visible';
            projectTitle.innerText = 'Section 3 Assignment 1';
            projectText.innerText = "welhbvwlr";
            go.href = "closet/index.html";
        } else if (row == 16 && col == 9) {
            arrows.style.visibility = 'hidden';
            document.getElementById("flag8").src = "images/grayflag.png";
            go.style.visibility = 'visible';
            projectTitle.innerText = 'Section 3 Assignment 2';
            projectText.innerText = "welhbvwlr";
            go.href = "s3a2/index.html";
        } else if (row == 17 && col == 18) {
            arrows.style.visibility = 'hidden';
            document.getElementById("flag9").src = "images/grayflag.png";
            go.style.visibility = 'visible';
            projectTitle.innerText = 'Section 3 Final Project';
            projectText.innerText = "welhbvwlr";
            go.href = "s3f/index.html";
        } else if (row == 17 && col == 24 || row == 16 && col == 24) {
            projectTitle.innerText = 'Congrats';
            projectText.innerText = "you finished";
            arrows.style.visibility = 'hidden';
        } else {
            arrows.style.visibility = 'visible';
            projectTitle.innerText = ogTitle;
            projectText.innerText = ogText;
            go.style.visibility = 'hidden';
        }
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