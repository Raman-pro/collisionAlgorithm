var fixedRect, movingRect,sprite3,sprite4;

function setup() {
    createCanvas(1200, 800);
    fixedRect = createSprite(600, 400, 50, 80);
    fixedRect.shapeColor = "green";
    fixedRect.debug = true;
    movingRect = createSprite(400, 200, 80, 30);
    movingRect.shapeColor = "green";
    movingRect.debug = true;
    sprite3=createSprite(800, 400, 80, 30);
    sprite4=createSprite(200, 400, 80, 30)
}

function draw() {
    background(0, 0, 0);
    movingRect.x = World.mouseX;
    movingRect.y = World.mouseY;

    if (collinStatement(movingRect, fixedRect)) {
        movingRect.shapeColor = "red"
        fixedRect.shapeColor="red"
    }else if (collinStatement(movingRect, sprite3)) {
        movingRect.shapeColor = "red"
        sprite3.shapeColor="red"
    } else if (collinStatement(movingRect, sprite4)) {
        movingRect.shapeColor = "red"
        sprite4.shapeColor="red"
    } else {
        movingRect.shapeColor = "green";
        fixedRect.shapeColor = "green";
        sprite3.shapeColor = "green";
        sprite4.shapeColor = "green";
    }
    drawSprites();

}

function collinStatement(sprite1, sprite2) {
    if (sprite1.x - sprite2.x < sprite2.width / 2 + sprite1.width / 2
        && sprite2.x - sprite1.x < sprite2.width / 2 + sprite1.width / 2
        && sprite1.y - sprite2.y < sprite2.height / 2 + sprite1.height / 2
        && sprite2.y - sprite1.y < sprite2.height / 2 + sprite1.height / 2) {
        return true
    } else {
        return false;
    }
}