var text1;
var text2;
var text3;

var gameState = 0;
var count = 30;

//var boat;
var Lionfish;
var Bluering;
var humanst;
var humanfa;
var humansw;
var ocean;
var stonefish;
var srake;
var thegreatbarr;

//var boatIMG
var LionfishIMG;
var BlueringIMG;
var humanstIMG;
var humanfaIMG;
var humanswIMG;
var oceanIMG;
var stonefishIMG;
var srakeIMG;
var thegreatbarrIMG;
var fish;

function preload(){
    LionfishIMG = loadImage("images/Lionfish.png");
    BlueringIMG = loadImage("images/Blue Ringed Octopus.png");
    humanfaIMG = loadImage("images/humanfa.png");
    humanstIMG = loadImage("images/humanst.png");
    humanswIMG = loadImage("images/humansw.png");
    oceanIMG = loadImage("images/ocean.png");
    stonefishIMG = loadImage("images/stonefish.png");
    srakeIMG = loadImage("images/water animal.png");
    thegreatbarrIMG = loadImage("images/The great barracuda.png");
    //boatIMG = loadImage("images/boat.png");
}


function setup(){
    createCanvas(displayWidth-20,displayHeight-166);
    ocean = createSprite(displayWidth/2-20,displayHeight/2-100,1200,400);
    ocean.scale = 5;
    ocean.addImage("ocean",oceanIMG);
    ocean.x = ocean.width/2;
    

    humanst = createSprite(displayWidth/2+70,displayHeight/2-100,50,50);
    humanst.addImage("humanst",humanstIMG);

    humanfa = createSprite(displayWidth/2+70,displayHeight/2-100,50,50);
    humanfa.addImage("humanfa",humanfaIMG);
    humanfa.visible = false;

    humansw = createSprite(displayWidth/2-30,displayHeight/2-100,50,50);
    humansw.addImage("humansw",humanswIMG);
    humansw.visible = false;

    /*boat = createSprite(displayWidth/4,displayHeight/2-100,50,50);
    boat.addImage("boat",boatIMG);
    boat.visible = false;*/

    text1 = createElement('h1');
    text1.html("Hey you friend has invited you to a part on a yacht<br>*Press W to cotinue*");
    text1.position(200,200);
    text2 = createElement('h2');

    text3 = createElement('h3');
    
    
}

function draw(){
    background("white");
    
    if(gameState === 0){
        if(keyDown("W")){
            ocean.velocityX = -5;
            text1.hide();
            humanst.visible = false;
            humanfa.visible = true;
            text2.html("You are losing you balance be carefull<br>*!!!press E to cotinue!!!*");
            text2.position(200,200);
            //boat.visible = false;
        }
    
        if(keyDown("E")){
            text2.hide();
            text3.html("you losed your balance when you boat was at high speed swim forward to find your boat and becarefull<br>because Lionfish has found you<br>**Press up arrow to go up and down arrow to go down**<br>*Press R to start game*");
            text3.position(200,200);
            AquaLife();
            humanfa.visible = false;
            humansw.visible = true;
            //boat.visible = false;
        }
    
        if(keyDown("R")){
            text3.hide();
            spawnfish();
            //boat.visible = false;
        }
    
        if(keyDown("UP_ARROW")){
            humansw.y -= 2;
            Lionfish.y = humansw.y;
            //boat.visible = false;
        }
    
        if(keyDown("DOWN_ARROW")){
            humansw.y += 2;
            Lionfish.y = humansw.y;
            //boat.visible = false;
        }
    
       if(ocean.x<300){
            ocean.x = displayWidth/2;
            //boat.visible = false;
        }

        /*if(humansw.isTouching(boat)){
            count = count-1;
            //boat.visible = true;
            text("Congratulations you have safely reached your boat,#Keep It Up#<br>Click reset to play the game again.")*/


    }  
    
    drawSprites();
}


function AquaLife(){
        Lionfish = createSprite(humansw.x-500,humansw.y,50,50);
        Lionfish.addImage("Lionfish",LionfishIMG);
        console.log("not following");
        Lionfish.scale = 0.2;

}

function spawnfish(){
    if (frameCount % 60 === 0){
      fish = createSprite(displayWidth,Math.round(random(200,800)),10,40);
      fish.velocityX = -10;
      
       
       var rand = Math.round(random(1,4));
       switch(rand) {
         case 1: fish.addImage(thegreatbarrIMG);
                 break;
         case 2: fish.addImage(srakeIMG);
                fish.scale = 0.4;
                 break;
         case 3: fish.addImage(stonefishIMG);
                fish.scale = 0.2;
                 break;
         case 4: fish.addImage(BlueringIMG);
                fish.scale = 0.2;
                 break;
         default: break;    
       }
    }
}
