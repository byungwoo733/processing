
// Player Width
var pw;

// Player Height
var ph;

// Ball Position
var x, y, vx, vy;

// Ball Size
var bs;

// score
var score;

// life
var life;

function setup() {
    initializeFields();
    createCanvas(1280, 720);
    rectMode(CENTER);
    // Ball Speed
    x = width / 2;
    y = 0;
    vx = random(-5, 5);
    vy = random(10);
}

function draw() {
    background(0);
    // Ball Speed Add
    x += vx;
    y += vy;
    // Ball Keeping in Screen
    if (x < 0 || x > width) {
        vx = -vx;
    }
    // -> little by little speed control
    if (y < 0) {
        vy = -vy * 1.2;
    }
    // if y > height is the Game Over
    if (y > height) {
        life--;
        if (life == 0) {
            textSize(64);
            // Text Center Position
            textAlign(CENTER, CENTER);
            text("Game Over", width / 2, height / 2);
            // Finish by Game Over
            noLoop();
        }
        x = width / 2;
        y = 0;
        vx = random(-5, 5);
        vy = random(10);
    }
    // Ball Bound
    if (mouseX - pw / 2 < x && mouseX + pw / 2 > x && y > height - 20 - ph / 2 - bs / 2 && y < height - 20 - ph / 2) {
        vy = -vy;
        score++;
    }
    // Ball Shape
    ellipse(x, y, bs, bs);
    rect(mouseX, height - 20, pw, ph);
    textSize(64);
    textAlign(CENTER, CENTER);
    text(score, width / 2, 30);
    textSize(32);
    text("Life: " + life, 150, 30);
}

function initializeFields() {
    pw = 100;
    ph = 20;
    x = 0;
    y = 0;
    vx = 0;
    vy = 0;
    bs = 20;
    score = 0;
    life = 3;
}

