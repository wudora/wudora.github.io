const boardHeight = 20;
const boardWidth = 25;
const gameBoard = document.getElementById('game-board');
let board = [];
let carX = 0;
let carY = 0;
const car = document.getElementById('car');
const discPost = document.getElementById('discPost');
const projectTitle = document.getElementById('projectTitle');
const ogTitle = projectTitle.innerText;
const projectText = document.getElementById('projectText');
const ogText = projectText.innerText;
const go = document.getElementById('go');
const ss = document.getElementById('ss');

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
    ss.style.visibility = 'hidden';
    if (car.style.transform == 'rotate(90deg)' || car.style.transform == 'rotate(0deg)') {
        disc.style.transform = 'rotate(-70deg)';
    } else {
        disc.style.transform = 'rotate(70deg)';
    }
    if (id == "w2") {
        projectTitle.innerText = 'OH NO!\nYOU CRASHED!';
        projectText.innerText = "now you have to witness a discussion post :(";
        discPost.innerText = "Week 2\n\n\nIt is interesting how Carrión discusses the deceivingly simple concept of Mail Art using such an in-depth analysis of its qualifications and features. The emphasis he places on the importance of its principles while also stating the harsher realities, such as the cost and process of sending mail, is very meaningful as Mail Art becomes Mail Art through intention and following the system which includes such realities. His discussion between the concept of receiving mail versus the content of mail received is another interesting feature of this reading that I have not considered deeply. The difference in perception of receiving a letter from a significant other and the police is a simple yet intriguing idea.\n\nWhat do you think the purpose of Mail Art is and why might artists want to send Mail Art rather than a postcard?\n\nWhat does it mean when Carrión says stating 'I am a mail artist' almost means 'The other artists are no artists at all'?";
    } else if (id == "w3") {
        projectTitle.innerText = 'OH NO!\nYOU CRASHED!';
        projectText.innerText = "now you have to witness a discussion post :(";
        discPost.innerText = "Week 3\n\n\nI found the personification to be a very thoughtful and creative way to consider the multiple facets of website composition. The bird images were an interesting addition to the reading and I am somewhat confused on its purpose, but enjoyed them nonetheless. As for essay 10, the methods that the writer uses to prevent linear thinking are very ridiculous in my opinion and I do not really understand the effectiveness of the actions. For example, always reading two books at the same time does not necessarily prevent the cultivation of a single line of thought.\n\nWhy do you think the author included bird images for some of the quotations shared?\n\nDo you think Édouard U's methods for preventing linear constriction are effective and how?";
    } else if (id == "w4") {
        projectTitle.innerText = 'OH NO!\nYOU CRASHED!';
        projectText.innerText = "now you have to witness a discussion post :(";
        discPost.innerText = "Week 4\n\n\nGeocities as a concept is very interesting and must have a very novel concept when it was first established. I really like how they had neighborhoods for similar pages and different communities as if there were actual cities and thought it was kind of sad how the public perception of using a certain platform can have such a large impact. Learning about the clear images used to map out graphics on a page was also very interesting in comparison the features used in website development today.\n\nDo you think you would have used Geocities to include 1MB of information on a site or Tripod which is more socially acceptable but only allows for 100 KB?\n\nWhat do you think makes social media platforms so much more successful than personal website pages?";
    } else if (id == "w6") {
        projectTitle.innerText = 'OH NO!\nYOU CRASHED!';
        projectText.innerText = "now you have to witness a discussion post :(";
        discPost.innerText = "Week 6\n\n\nThe concept of alt-text is really interesting as a component of accessibility and a way share to certain information. I am especially fond of the idea of alt-text being like poetry and the more subjective commentary one might include to convey particular aspects of an image. The phrasing and way an image is described can have such an impact of the perception of the visually impaired and I really appreciated learning about this concept through this reading.\n\nIn what situations do you think alt-text should be more subjective or objective?\n\nDo you think the voice used to narrate the text has an impact on one's mental depiction of an image from its description?";
    } else if (id == "w8") {
        projectTitle.innerText = 'OH NO!\nYOU CRASHED!';
        projectText.innerText = "now you have to witness a discussion post :(";
        discPost.innerText = "Week 8\n\n\nI have never really considered the dominance of English in programming languages and its impact prior to this reading. With the prevalence of technology around the world, it is hard to believe that most code is written in a singular language with such few exceptions. The design of the Arabic writing system was also very interesting to learn about with its complexity and challenges in digital representation.\n\nDo you think there needs to be a wider variety of languages available for use by programmers and why do you think English is so favored?\n\nWhy do you think graphic design firms lack the diversity or awareness to improve their created fonts and what do you think they could do to be more inclusive?";
    } else if (id == "w9") {
        projectTitle.innerText = 'OH NO!\nYOU CRASHED!';
        projectText.innerText = "now you have to witness a discussion post :(";
        discPost.innerText = "Week 9\n\n\nThe progression of designs throughout time as concepts become more complex is very interesting to see, especially with well-known designs such as the Mickey Mouse designs. The concepts and progressions of the new modernisms is fascinating to learn about and I really enjoyed looking at the representations of the signs involved with the different types. The diagram with what signifiers and signified components are included in each was a very helpful visual.\n\nWhich of the Mickey Mouse designs on page 20 is your favorite and why?\n\nWhat do you think the future of modernism will look like?";
    } else if (id == "w11") {
        projectTitle.innerText = 'OH NO!\nYOU CRASHED!';
        projectText.innerText = "now you have to witness a discussion post :(";
        discPost.innerText = "Week 11\n\n\nBoth of Frenkel's works mentioned in the reading are very interesting and I especially find the sinister components of the Bodies Missing project to be thought-provoking as it hold a significant meaning in a creative way. In general, it is really to see how the advancement of technologies can influence creative endeavors and what people create with new medium and capabilities. The String Games is an interesting art concept on its own with the use of participants and string on a large scale but its inclusion of transmission technology truly elevates its execution, especially for its time.\n\nIf you conducted a work like Frenkel's String Games what activity would you have participants do and why?\n\nWhich mode of play do you think is the most impactful on the effect of the String Games? Play, movement, or real space?";
    } else if (id == "w12") {
        projectTitle.innerText = 'OH NO!\nYOU CRASHED!';
        projectText.innerText = "now you have to witness a discussion post :(";
        discPost.innerText = "Week 12\n\n\nI really liked seeing the different connections made between physical components and their translation to digital components with the concept of a post. The section regarding smooth flow confused me a little as I am not really sure what they are trying to say about such a representation of things on the internet with the idea of 'clear substrate'. I think the reading's commentary on surveillance and the perception of things on the internet is profound as well and I am particularly interested in the concept of deepfakes and  smart devices being linked with trust issues.\n\nWhat do you think is meant by the idea of 'clear substrate' in the smooth flow paradigm?\n\nWhat are your thoughts on the digital representation of a post compared to the original concept of a post and how successful do you think the transition was?";
    } else if (id == "w13") {
        projectTitle.innerText = 'OH NO!\nYOU CRASHED!';
        projectText.innerText = "now you have to witness a discussion post :(";
        discPost.innerText = "Week 13\n\n\nThis reading was very thought-provoking and creatively intertwined technical and historical concepts. It did a great job introducing and connecting computer-related terms with historical happenings. The drawings were also super fun and kept the story well-paced through some of the more confusing fantastical parts.\n\nHow do you think the drawings contributed to the story and why?\n\nWhat do you think they mean when they say 'another way is always possible' at the end of the story?";
    } else if (id == "w14") {
        projectTitle.innerText = 'OH NO!\nYOU CRASHED!';
        projectText.innerText = "now you have to witness a discussion post :(";
        discPost.innerText = "Week 14\n\n\nThis reading addresses a lot of interesting points regarding art and literature on the internet regarding how it is used and what its purpose is. I disagree with the idea that art on the internet is just documentation of art as it can truly exist in many forms such as graphic design or online publications that might not be available in a physical copy. The concept of the internet being a source of documentation is very true though as so much information can be found with a simple google search and I also like the concept of archives not only bringing the past to the present but also the present to the future.\n\nDo you think true art and literature exist on the internet?\n\nWhy might someone say it doesn't? What does it mean when they say the algorithmic gaze is the spectator of the internet?";
    }
}

function moveCar(row, col) {
    const temp = board[row][col];
    if (temp.classList.contains("disc")){
        displayDiscussion(temp);
    }
    else {
        discPost.innerText = "";
        if (row == 3 && col == 7) {
            ss.style.visibility = 'visible';
            ss.src = "images/s1a1.png";
            document.getElementById("flag1").src = "images/grayflag.png";
            go.style.visibility = 'visible';
            projectTitle.innerText = 'SECTION 1 ASSIGNMENT 1';
            projectText.innerText = "ASCII Art:\n Neko Atsume";
            go.href = "https://codepen.io/Dora-Wu-the-sans/pen/mdoxyaZ?editors=1100";
        } else if (row == 2 && col == 14) {
            ss.style.visibility = 'visible';
            ss.src = "images/s1a2.png";
            document.getElementById("flag2").src = "images/grayflag.png";
            go.style.visibility = 'visible';
            projectTitle.innerText = 'SECTION 1 ASSIGNMENT 2';
            projectText.innerText = "CSS Still Life";
            go.href = "https://codepen.io/Dora-Wu-the-sans/pen/MWxrxyg?editors=1100";
        } else if (row == 4 && col == 21) {
            ss.style.visibility = 'visible';
            ss.src = "images/s1f.png";
            document.getElementById("flag3").src = "images/grayflag.png";
            go.style.visibility = 'visible';
            projectTitle.innerText = 'SECTION 1\nFINAL PROJECT';
            projectText.innerText = "Decision Maker";
            go.href = "decision/index.html";
        } else if (row == 10 && col == 18) {
            ss.style.visibility = 'visible';
            ss.src = "images/s2a1.png";
            document.getElementById("flag4").src = "images/grayflag.png";
            go.style.visibility = 'visible';
            projectTitle.innerText = 'SECTION 2 ASSIGNMENT 1';
            projectText.innerText = "Web Ring:\nDecision Maker";
            go.href = "decision/index.html";
        } else if (row == 9 && col == 11) {
            ss.style.visibility = 'visible';
            ss.src = "images/s2a2.png";
            document.getElementById("flag5").src = "images/grayflag.png";
            go.style.visibility = 'visible';
            projectTitle.innerText = 'SECTION 2 ASSIGNMENT 2';
            projectText.innerText = "Smiski Collection";
            go.href = "smiski/index.html";
        } else if (row == 10 && col == 4) {
            ss.style.visibility = 'visible';
            ss.src = "images/s2f.png";
            document.getElementById("flag6").src = "images/grayflag.png";
            go.style.visibility = 'visible';
            projectTitle.innerText = 'SECTION 2\nFINAL PROJECT';
            projectText.innerText = "Eye Clock";
            go.href = "https://editor.p5js.org/wudora/sketches/NEC-FDB6b";
        } else if (row == 16 && col == 2) {
            ss.style.visibility = 'visible';
            ss.src = "images/s3a1.png";
            document.getElementById("flag7").src = "images/grayflag.png";
            go.style.visibility = 'visible';
            projectTitle.innerText = 'SECTION 3 ASSIGNMENT 1';
            projectText.innerText = "Outfit Selector";
            go.href = "closet/index.html";
        } else if (row == 16 && col == 9) {
            ss.style.visibility = 'visible';
            ss.src = "images/s3a2.png";
            document.getElementById("flag8").src = "images/grayflag.png";
            go.style.visibility = 'visible';
            projectTitle.innerText = 'SECTION 3 ASSIGNMENT 2';
            projectText.innerText = "IFTTT Applet:\nInstagram Post Sharer";
            go.href = "s3a2/index.html";
        } else if (row == 17 && col == 18) {
            ss.style.visibility = 'visible';
            ss.src = "images/s3f.png";
            document.getElementById("flag9").src = "images/grayflag.png";
            go.style.visibility = 'visible';
            projectTitle.innerText = 'SECTION 3\nFINAL PROJECT';
            projectText.innerText = "Generative Art:\nCharacters to Color";
            go.href = "s3f/index.html";
        } else if (row == 17 && col == 24 || row == 16 && col == 24) {
            ss.style.visibility = 'hidden';
            projectTitle.innerText = 'CONGRATS!';
            projectText.innerText = "you finished!";
        } else {
            ss.src = "images/arrows.png";
            projectTitle.innerText = ogTitle;
            projectText.innerText = ogText;
            go.style.visibility = 'hidden';
            ss.style.visibility = 'visible';
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