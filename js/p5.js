const Boxes = [];

class Box {
    constructor (x, y) {
        this.x = x;
        this.y = y;
        this.x_angle = 0;
        this.y_angle = 0;
        this.rotateXSpeed = random(-0.01, 0.01);
        this.rotateYSpeed = random(-0.01, 0.01);
        this.size = random(10, 50);
    }
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

function draw_box(box_obj) {
    push();
    stroke(5);
    translate(box_obj.x, box_obj.y, 0);
    rotateY(box_obj.x_angle);
    rotateX(box_obj.y_angle);
    box(box_obj.size);
    pop();
}

function draw() {
    background(20, 20, 20);
    for (var i = 0; i < Boxes.length; i++) {
        draw_box(Boxes[i]);
    }

    for (var i = 0; i < Boxes.length; i++) {
        step_box(Boxes[i]);
    }
}