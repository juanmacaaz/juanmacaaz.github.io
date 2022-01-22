var backgroundSketch = function (p) {
    const Boxes = [];

    class Box {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.x_angle = p.random(0, 360);
            this.y_angle = p.random(0, 360);
            this.rotateXSpeed = p.random(-0.01, 0.01);
            this.rotateYSpeed = p.random(-0.01, 0.01);
            this.size = p.random(20, 50);
        }
    }
    
    p.setup = function() {
        var canvas = p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
        canvas.parent('glcanvas');
        p.frameRate(23);
        for (var i = 0; i < 100; i++) {
            Boxes.push(new Box(p.random(-p.width / 2, p.width / 2), p.random(-p.height / 2, p.height / 2)));
        }
        p.noFill();
    }
    
    function step_box(box_obj) {
        box_obj.x_angle += box_obj.rotateXSpeed;
        box_obj.y_angle += box_obj.rotateYSpeed;
    }
    
    function draw_box(box_obj) {
        let distance = Math.hypot(box_obj.x + ((p.windowWidth / 2) - p.mouseX), box_obj.y + ((p.windowHeight / 2) - p.mouseY));
        let size = 5;
        if (distance < 200) {
            size = (255 - distance) / 20;
        }
        p.push();
        p.stroke(9);
        p.translate(box_obj.x, box_obj.y, 0);
        p.rotateY(box_obj.x_angle);
        p.rotateX(box_obj.y_angle);
        p.box( box_obj.size + size);
        p.pop();
    }
    
    p.draw = function() {
        p.background(20, 20, 20);
        for (var i = 0; i < Boxes.length; i++) {
            draw_box(Boxes[i]);
        }
    
        for (var i = 0; i < Boxes.length; i++) {
            step_box(Boxes[i]);
        }
    }
}

var myp5Blue = new p5(backgroundSketch);