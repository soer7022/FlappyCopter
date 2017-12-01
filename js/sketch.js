var bird;
var pipes = [];
var score = 0;
var highScore = 0;
var cnv;

function setup() {
    cnv = createCanvas(720, 1152);
    bird = new Bird();
    pipes.push(new Pipe());
}

function draw() {
    background(0);
    bird.show();
    bird.update();

    for(var i = pipes.length-1; i >= 0; i--) {
        pipes[i].show();
        pipes[i].update();

        var hit = pipes[i].hits(bird);

        if (hit === 1) {
            pipes.length = 1;
            score = 0;
        }
        if (hit === 2) {
            score++;
            console.log("Not hit")
        }

        if(pipes[i].x < 0) {
            pipes.splice(i,1)
        }
    }

    if(frameCount % 60 === 0) {
        pipes.push(new Pipe());
    }

    highScore = Math.max(score,highScore);
    document.getElementById("score").innerHTML = "Score: " + score + " High score: " + highScore;
}

function touchStarted() {
    bird.up();
}

function keyPressed() {
    if(key === ' ') {
        bird.up();
    }
}