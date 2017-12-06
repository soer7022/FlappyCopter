function Pipe() {
    this.top = random(height / 2);
    this.bottom = random(height / 2);
    this.x = width;
    this.w = width / 40;
    this.speed = 5;
    this.highlight = false;
    this.score = 0;
    this.hasBeenHit = false;
    this.red = random(255);
    this.green = random(255);
    this.blue = random(255);

    this.hits = function (bird) {
        if (bird.x > this.x && bird.x < this.x + this.w) {
            if (bird.y < this.top || bird.y > height - this.bottom) {
                this.highlight = true;
                return 1;
            } else {
                if (this.hasBeenHit == false) {
                    this.hasBeenHit = true;
                    return 2;
                }
                return 0;
            }
        }
        this.highlight = false;
        return 0;
    };

    this.show = function () {
        fill(this.red, this.green, this.blue);
        if (this.highlight) {
            fill(255, 0, 0);
        }
        if (this.top > (height / 2) - 10) {
            this.top -= 10
        }
        if (this.bottom > (height / 2) - 10) {
            this.bottom -= 10
        }
        rect(this.x, 0, this.w, this.top);
        rect(this.x, height - this.bottom, this.w, this.bottom);
    };

    this.update = function () {
        this.x -= this.speed;
    }
}