let width = window.innerWidth;
let height = window.innerHeight;
const size = 50;
let x = size / 2;
let y = size / 2;
let colors = [];
let show = false;

const r1 = new Set([4, 10, 11, 14, 15, 18, 19, 20]);
const r2 = new Set([5, 12, 13, 16, 17, 21, 22, 23]);
const g1 = new Set([2, 6, 7, 10, 12, 18, 21, 22]);
const g2 = new Set([3, 8, 9, 11, 13, 20, 20, 23]);
const b1 = new Set([0, 6, 8, 14, 16, 18, 19, 21, 23]);
const b2 = new Set([1, 7, 9, 15, 17, 20, 22]);


function setup() {
    createCanvas(width, height);
    background(255);
    noStroke();
}

function draw() {
    if (show == true) {
        while (y < height) {
            let rand = int(random(0, colors.length));
            fill(colors[rand][0], colors[rand][1], colors[rand][2]);
            ellipse(x, y, size);
            x += size;
            if (x > width) {
                x = size / 2;
                y += size;
            }
        }
    }
}


function generate() {
    width = window.innerWidth;
    height = window.innerHeight;
    createCanvas(width, height);
    colors.length = 0;
    const text = document.getElementById("inputValue").value;
    const letters = text.split('');
    for (let i = 0; i < letters.length; i++) {
        let val = letters[i].charCodeAt() - 65;
        colors[i] = [];
        colors[i][0] = 3 * val;
        colors[i][1] = 3 * val;
        colors[i][2] = 3 * val;
        if (r1.has(val % 24)) {
            colors[i][0] = 255;
        }
        if (g1.has(val % 24)) {
            colors[i][1] = 255;
        }
        if (b1.has(val % 24)) {
            colors[i][2] = 255;
        }
        if (r2.has(val % 24)) {
            colors[i][0] = (255 + colors[i][0]) / 2;
        }
        if (g2.has(val % 24)) {
            colors[i][1] = (255 + colors[i][1]) / 2;
        }
        if (b2.has(val % 24)) {
            colors[i][2] = (255 + colors[i][2]) / 2;
        }
    }
    show = true;
    x = size / 2;
    y = size / 2;
}