class Bubble {
    constructor(x , y , r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }
    bubbleAdd(x, y, r) {
        let random1 = random(0, 255)
        let random2 = random(0, 255)
        let random3 = random(0, 255)
        fill(random1, random2, random3);
        ellipse(x, y, r)
    }
}