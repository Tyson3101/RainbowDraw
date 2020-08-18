let bubble = new Bubble(40, 50, 79)

function setup() {
   createCanvas(500, 600)
   background(1)
   createP('Drag Mouse to Draw!')
}

function draw() {
}

function mouseDragged() {
    bubble.bubbleAdd(mouseX, mouseY, 70)
}