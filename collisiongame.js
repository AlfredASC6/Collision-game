let PosX = 25;
let PosY = 25;
let speed = 5;
let points = 0;
let enemyposX,enemyposY;
let enemywidth = 50, enemyheight = 50;
let Top,Bottom,Left,Right;
let clefairy,togepi;

function setup() {
    createCanvas(500,500);
    background(0);
    rectMode(CENTER);
    enemyposX= random(25,475);
    enemyposY= random(25,475);
    textSize(15);
    // load in images
    clefairy=loadImage("clefairy.png");
    togepi=loadImage("togepi.png");
}
function draw() {
    background(0);
    // // draw enemy
    // fill(255,0,0);
    // rect(enemyposX,enemyposY,enemywidth,enemyheight);
    // // draw myself
    // fill(65,105,225);
    // rect(PosX,PosY,50,50);
    // draw togepi enemy
    image(togepi, enemyposX,enemyposY,enemywidth,enemyheight);
    image(clefairy,PosX,PosY,50,50);
    
    
    if (keyIsDown(LEFT_ARROW)) {
        PosX-=speed;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        PosX+=speed;
    }
    if (keyIsDown(UP_ARROW)) {
        PosY-=speed;
    }
    if (keyIsDown(DOWN_ARROW)) {
        PosY+=speed;
    }
    // restrict within the canvas
    if (PosX<=25 ) {
        PosX=25;
    }
    if (PosX>=475) {
        PosX=475;
    }
    if (PosY<=25) {
        PosY=25;
    }
    if (PosY>=475) {
        PosY=475;
    }
    // knwo my edges
    Left=PosX-25;
    Right = PosX+25;
    Top =PosY-25;
    Bottom= PosY+25;

    // enemy edges
    enemyLeft = enemyposX-25;
    enemyRight = enemyposX+25;
    enemyTop = enemyposY-25;
    enemyBottom = enemyposY+25;

    // detect collision
    if (Left > enemyRight || Right<enemyLeft || Top > enemyBottom || Bottom<enemyTop) {
        // do nothing
    }
    else {
        // there is collision
        //console.log("COLLISION!!!")
        fill(random(255),random(255),random(255));
        text("I'm colliding with the enemy!!!",255,400);
        points++;
        enemyposX= random(25,475);
        enemyposY= random(25,475);
        
    }
    fill(255);
    text("Enemies collected: "+ points,340,25);
}