const Boxes = [];

class Box {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.x_angle = random(0, 360);
        this.y_angle = random(0, 360);
        this.rotateXSpeed = random(-0.01, 0.01);
        this.rotateYSpeed = random(-0.01, 0.01);
        this.size = random(20, 50);
    }
}

function change() {
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    canvas.parent('glcanvas');
    for (var i = 0; i < 100; i++) {
        Boxes.push(new Box(random(-width / 2, width / 2), random(-height / 2, height / 2)));
    }
    noFill();
}

function step_box(box_obj) {
    box_obj.x_angle += box_obj.rotateXSpeed;
    box_obj.y_angle += box_obj.rotateYSpeed;
}

function draw_box(box_obj, max_distance) {
    let distance = Math.hypot(box_obj.x + ((windowWidth / 2) - mouseX), box_obj.y + ((windowHeight / 2) - mouseY));
    let size = 5;
    if (distance < 200) {
        size = (255 - distance) / 20;
    }
    push();
    stroke(9);
    translate(box_obj.x, box_obj.y, 0);
    rotateY(box_obj.x_angle);
    rotateX(box_obj.y_angle);
    box( box_obj.size + size);
    pop();
}

function draw() {
    background(20, 20, 20);
    let max_distance = Math.hypot(width / 2, height / 2);
    for (var i = 0; i < Boxes.length; i++) {
        draw_box(Boxes[i], max_distance);
    }

    for (var i = 0; i < Boxes.length; i++) {
        step_box(Boxes[i]);
    }

    //console.log(mouseX, mouseY);
}