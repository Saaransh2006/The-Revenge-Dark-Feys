//Declaring the variables.
var stone,sling,stand1,stand2,stonePos,bgImg,bgVar,attackImg,loading2,completed;
var giveUp,GiveUpImg,stage,variable,bgm,title,titleVar,loading1,bgImg2,bgBlur,backgroundImg;
var playVar,play,storyVar,story,instructions,instructionsVar,score,attack,sprite4;

//Declaring the constants.
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

//Function for preloading.
function preload() {
  //Loading images and sounds to variables.
  GiveUpImg = loadImage("GiveUp.png");
  attackImg = loadImage("attack.png");
  loading1 = loadImage("loading1.png");
  loading2 = loadImage("loading2.png");
  completed = loadImage("completed.png");
  bgImg = loadImage("background.jpg");
  bgImg2 = loadImage("background3.gif");
  bgBlur = loadImage("background2.jpg");
  title = loadImage("title.png");
  play = loadImage("play.png");
  instructions = loadImage("instructions.png");
  story = loadImage("story.png");
  bgm = loadSound("bgMusic.mp3");
  backgroundImg = loadImage("bg2.jpg");
}

//Function for setting up.
function setup() {
  //Looping the background music.
  bgm.loop();

  //Creating the canvas area.
  createCanvas(1350,700);

  //Creating an engine in the variable 'engine'.
  engine = Engine.create();
  //Storing engine's world in the variable world.
  world = engine.world;
  
  //Setting values for 4 variables.
  stage = 1;
  variable = 1;
  stonePos = 1;
  score = 0;

  //Creating the bodies.
  stone = new Stone(120,210);
  sling = new SlingShot(stone.body,{x:120,y:210});
  stand1 = new Ground(700,300,350,20);
  stand2 = new Ground(1100,500,300,20);
  //Level1 boxes
  //First line
  box1 = new Box(610,290);
  box2 = new Box(640,290);
  box3 = new Box(670,290);
  box4 = new Box(700,290);
  box5 = new Box(730,290);
  box6 = new Box(760,290);
  box7 = new Box(790,290);
  //Second line
  box8 = new Box(640,250);
  box9 = new Box(670,250);
  box10 = new Box(700,250);
  box11 = new Box(730,250);
  box12 = new Box(760,250);
  //Third line
  box13 = new Box(670,210);
  box14 = new Box(700,210);
  box15 = new Box(730,210);
  //Top box
  box16 = new Box(700,170);
  //Level2 boxes
  //First line
  box17 = new Box(1010,490);
  box18 = new Box(1040,490);
  box19 = new Box(1070,490);
  box20 = new Box(1100,490);
  box21 = new Box(1130,490);
  box22 = new Box(1160,490);
  box23 = new Box(1190,490);
  //Second line
  box24 = new Box(1040,450);
  box25 = new Box(1070,450);
  box26 = new Box(1100,450);
  box27 = new Box(1130,450);
  box28 = new Box(1160,450);
  //Third line
  box29 = new Box(1070,410);
  box30 = new Box(1100,410);
  box31 = new Box(1130,410);
  //Top box
  box32 = new Box(1100,370);

  //Creating a sprite for the variable 'attack'.
  attack = createSprite(1220,80,40,20);
  //Adding image to it.
  attack.addImage(attackImg);
  //Adjusting its size.
  attack.scale = 0.4;
  //Making it invisible.
  attack.visible = false;

  //Creating a sprite for the variable 'giveUp'.
  giveUp = createSprite(1220,80,40,20);
  //Adding image to it.
  giveUp.addImage(GiveUpImg);
  //Adjusting its size.
  giveUp.scale = 0.4;
  //Making it invisible.
  giveUp.visible = false;

  //Creating a sprite for debugging.
  sprite4 = createSprite(675,350,20,20);
  //Giving it an x velocity.
  sprite4.velocityX = -12;
  //Making it invisible.
  sprite4.visible = false;

  //Creating a sprite for the variable 'bgVar'.
  bgVar = createSprite(675,350,1350,700);
  //Adding image to it.
  bgVar.addImage(bgImg);
  //Making it invisible.
  bgVar.visible = false;

  //Creating a sprite for the variable 'titleVar'.
  titleVar = createSprite(350,100,300,50);
  //Adding image to it.
  titleVar.addImage(title);
  //Adjusting its size.
  titleVar.scale = 0.3;
  //Creating a sprite for the variable 'storyVar'.
  storyVar = createSprite(350,250,100,10);
  //Adding image to it.
  storyVar.addImage(story);
  //Adjusting its size.
  storyVar.scale = 0.3;
  //Creating a sprite for the variable 'instructionsVar'.
  instructionsVar = createSprite(350,350,100,10);
  //Adding image to it.
  instructionsVar.addImage(instructions);
  //Adjusting its size.
  instructionsVar.scale = 0.3;
  //Creating a sprite for the variable 'playVar'.
  playVar = createSprite(350,450,100,10);
  //Adding image to it.
  playVar.addImage(play);
  //Adjusting its size.
  playVar.scale = 0.3;

  //Running the previously created engine.
  Engine.run(engine);  
}

//Draw loop function.
function draw() {
  //Setting rect mode as CENTER.
  rectMode(CENTER);
  //Setting ellipse mode as RADIUS.
  ellipseMode(RADIUS);
  //Setting background color to backgroundImg's value.
  background(backgroundImg);

  //Changing variable's value as per the different conditions.
  if(box1.body.position.y > 300 && box2.body.position.y > 300 && box3.body.position.y > 300 && box4.body.position.y > 300 && box5.body.position.y > 300 && box6.body.position.y > 300 && box7.body.position.y > 300 && box8.body.position.y > 300 && box9.body.position.y > 300 && box10.body.position.y > 300 && box11.body.position.y > 300 && box12.body.position.y > 300 && box13.body.position.y > 300 && box14.body.position.y > 300 && box15.body.position.y > 300 && box16.body.position.y > 300 && box17.body.position.y > 500 && box18.body.position.y > 500 && box19.body.position.y > 500 && box20.body.position.y > 500 && box21.body.position.y > 500 && box22.body.position.y > 500 && box23.body.position.y > 500 && box24.body.position.y > 500 && box25.body.position.y > 500 && box26.body.position.y > 500 && box27.body.position.y > 500 && box28.body.position.y > 500 && box29.body.position.y > 500 && box30.body.position.y > 500 && box31.body.position.y > 500 && box32.body.position.y > 500) {
    variable = 3;
    //Destroying giveUp sprite.
    giveUp.destroy();
  }
  else if(box1.body.position.y > 300 && box2.body.position.y > 300 && box3.body.position.y > 300 && box4.body.position.y > 300 && box5.body.position.y > 300 && box6.body.position.y > 300 && box7.body.position.y > 300 && box8.body.position.y > 300 && box9.body.position.y > 300 && box10.body.position.y > 300 && box11.body.position.y > 300 && box12.body.position.y > 300 && box13.body.position.y > 300 && box14.body.position.y > 300 && box15.body.position.y > 300 && box16.body.position.y > 300) {
    variable = 2;
  }
  else {
    variable = 1;
  }

  //Changing stonePos's value as per the different conditions.
  if(stone.body.position.x < 240 && stone.body.position.x > 0 && stone.body.position.y < 420 && stone.body.position.y > 0) {
    stonePos = 2;
  }
  else {
    stonePos = 1;
  }

  //Assigning functions when stage's value is 1.
  if(stage === 1) {
    //Creating 3 sprites for different backgrounds.
    //Adding images to them.
    //Giving them a lifetime.
    var sprite3 = createSprite(675,350,1350,700);
    sprite3.addImage(completed);
    sprite3.lifetime = 3;
    var sprite2 = createSprite(675,350,1350,700);
    sprite2.addImage(loading2);
    sprite2.lifetime = 3;
    var sprite1 = createSprite(675,350,1350,700);
    sprite1.addImage(loading1);
    sprite1.lifetime = 3;

    //Destroying sprite 1 and 2 as per sprite4's x position.
    if(sprite4.x < 250) {
      sprite1.destroy();
    }
    if(sprite4.x < 0) {
      sprite2.destroy();
    }

    //Changing stage's value to 2 when enter is pressed.
    if(keyDown(ENTER)) {
      stage = 2;
      //Setting volume for bgm.
      bgm.setVolume(0.1);
      //Playing bgm.
      bgm.play();
      //Destroying sprite3.
      sprite3.destroy();
    }
  }

  //Assigning functions when stage's value is 2.
  else if(stage === 2) {
    //Destroying sprite4.
    sprite4.destroy();

    //Making 5 sprites visible.
    bgVar.visible = true;
    titleVar.visible = true;
    playVar.visible = true;
    storyVar.visible = true;
    instructionsVar.visible = true;
    //Setting bgVar's y position to 350.
    bgVar.y = 350;

    //Changing stage's value to 2.5 when mouse is pressed over storyVar.
    if(mousePressedOver(storyVar)) {
      stage = 2.5;
    }
    //Changing stage's value to 2.8 when mouse is pressed over instructionsVar.
    if(mousePressedOver(instructionsVar)) {
      stage = 2.8;
    }
    //Changing stage's value to 3 when mouse is pressed over playVar.
    if(mousePressedOver(playVar)) {
      stage = 3;
    }
  }

  //Assigning functions when stage's value is 2.5.
  else if(stage === 2.5) {
    //Setting background color to black.
    background("black");
    //Making bgVar visible.
    bgVar.visible = true;
    //Changing image of bgVar.
    bgVar.addImage(bgImg2);
    //Setting bgVar's y value to 100.
    bgVar.y = 100;

    //Making 4 sprites invisible.
    instructionsVar.visible = false;
    storyVar.visible = false;
    playVar.visible = false;
    titleVar.visible = false;

    //Changing stage's value to 2 and bgVar's image when left arrow is pressed. 
    if(keyDown(LEFT_ARROW)) {
      stage = 2;
      bgVar.addImage(bgImg);
    }
  }

  //Assigning functions when stage's value is 2.5.
  else if(stage === 2.8) {
    //Setting background color to black.
    background("black");
    //Making bgVar visible.
    bgVar.visible = true;
    //Changing image of bgVar.
    bgVar.addImage(bgImg2);
    //Setting bgVar's y value to 100.
    bgVar.y = 100;

    //Making 4 sprites invisible.
    instructionsVar.visible = false;
    storyVar.visible = false;
    playVar.visible = false;
    titleVar.visible = false;

    //Changing stage's value to 2 and bgVar's image when left arrow is pressed. 
    if(keyDown(LEFT_ARROW)) {
      stage = 2;
      bgVar.addImage(bgImg);
    }
  }

  //Assigning functions when stage's value is 3.
  else if(stage === 3) {
    //Destroying 4 variables and making 1 variable invisible.
    instructionsVar.destroy();
    storyVar.destroy();
    playVar.destroy();
    titleVar.destroy();
    bgVar.visible = false;

    //Displaying all the bodies.
    stone.display();
    stand1.display();
    stand2.display();
    fill(rgb(random(0,255), random(0,255), random(0,255)));
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    fill(rgb(random(0,255), random(0,255), random(0,255)));
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    fill(rgb(random(0,255), random(0,255), random(0,255)));
    box13.display();
    box14.display();
    box15.display();
    fill(rgb(random(0,255), random(0,255), random(0,255)));
    box16.display();
    fill(rgb(random(0,255), random(0,255), random(0,255)));
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    fill(rgb(random(0,255), random(0,255), random(0,255)));
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    fill(rgb(random(0,255), random(0,255), random(0,255)));
    box29.display();
    box30.display();
    box31.display();
    fill(rgb(random(0,255), random(0,255), random(0,255)));
    box32.display();

    //Calling the score function for all the boxes.
    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();
    box19.score();
    box20.score();
    box21.score();
    box22.score();
    box23.score();
    box24.score();
    box25.score();
    box26.score();
    box27.score();
    box28.score();
    box29.score();
    box30.score();
    box31.score();
    box32.score();

    //Making giveUp and attack sprite visible.
    giveUp.visible = true;
    attack.visible = true;

    //Displaying text for info.
    fill("white");
    textSize(20);
    textStyle(BOLD);
    textFont("georgia");
    text("TIP: You can use stones by pressing the 'Enter' key.",25,70);
    text("Enemies left:  " + (640-score),25,100);
    fill("white");
    textSize(18);
    textFont("segoe script");
    textAlign(CENTER);
    text("Level 1 Wall",700,305);
    text("Level 2 Wall",1100,505);

    //Changing stage's value to 4 when mouse button is pressed over giveUp sprite or attack sprite.
    if(mousePressedOver(giveUp) || mousePressedOver(attack)) {
      stage = 4;
      //Stop playing the bgm.
      bgm.stop();
    }
  }

  //Assigning functions when stage's value is 4.
  if(stage === 4) {
    //Changing backgroundImg's value to black.
    backgroundImg = "black";
    //Making bgVar visible.
    bgVar.visible = true;
    //Adding image to bgVar.
    bgVar.addImage(bgBlur);
  }
  //Displaying the sprites.
  drawSprites();

  //Displaying text when stage's value is 2.5.
  if(stage === 2.5) {
    fill("red");
    textAlign(CENTER);
    textSize(20);
    textFont("segoe script");
    text("Narrator: Have you ever wondered why some people see ghosts, or unknown creatures having supernatural powers. Well,",675,210);
    text("these creatures that people see and are afraid of are actually 'Dark Feys', an unknown species that have lived like",675,240);
    text("us, from the starting, even before when the humans were born on earth. They lived inside the earth, in a place they",675,270);
    text("called 'Moors', where humans can't reach. They are far ahead in science from the humans {which is the reason for",675,300);
    text("their supernatural powers}. But when human activities affected the Earth and caused Earthquakes, increase in the",675,330);
    text("temperatures inside the earth, these creatures began to extinct; which ultimately forced them to leave Moors and come",675,360);
    text("to land. In the present era, Dark Feys live in secluded areas like old palaces, forests and old bungalows, so that no",675,390);
    text("human can harm them. When humans try to enter these secluded areas these creatures scare them and force them to leave.",675,420);
    text("This story is set in 1678. Connall, a Dark Fey is angry with a human leader, Percival, as he has killed Connall's whole",675,480);
    text("family and now only his brother, Borra is left, who is in Percival's captivity. Connall's powers were taken by the Dark",675,510);
    text("Fey Government in 1597 when he was found guilty. Connall, who was declared to Life Imprisonment in 1597, has",675,540);
    text("escaped the prison and is all set to take revenge and free Borra from the human leader Percival.",675,570);
    fill("white");
    textStyle(BOLD);
    textFont("courier new");
    textSize(20);
    text("(Press left arrow key to go back to the Home Page)",675,600);
  }

  //Displaying text when stage's value is 2.8.
  else if(stage === 2.8) {
    fill("red");
    textAlign(CENTER);
    textSize(20);
    textFont("segoe script");
    text("You'll play this game as Connall. As Connall's supernatural powers were taken, he only has his muscular powers and",675,310)
    text("his Dark Sword to break the security walls, get into the palace and succeed in his mission. You need to throw big",675,340);
    text("hexagonal shaped stones towards the walls to get into the palace. Drag and release the stone towards the walls with",675,370);
    text("the help of your mouse to destroy the walls. There are two levels, If you destroy level 1 walls, you can get into",675,400);
    text("prison and free Borra. If you destroy both level 1 and level 2 walls, you can get into the main palace and kill Percival.",675,430);
    text("You can quit anytime if you think you are not capable of destroying the walls by clicking on the 'GIVE UP' button at",675,460);
    text("the top right of the screen. There a total of 640 enemy forces guarding the palace. As you destroy the walls, the enemies",675,490);
    text("will also get killed. Once all the enemy forces are killed, the 'GIVE UP' button will change to 'ATTACK' button. Click on",675,520);
    text("'ATTACK' and complete your mission.",675,550)
    fill("white");
    textStyle(BOLD);
    textFont("courier new");
    textSize(20);
    text("(Press left arrow key to go back to the Home Page)",675,600);
  }

  //Displaying different texts under different conditions when stage's value is 4.
  else if(stage === 4) {
    //Making 2 sprites invisible.
    giveUp.visible = false;
    attack.visible = false;

    if(box1.body.position.y > 300 && box2.body.position.y > 300 && box3.body.position.y > 300 && box4.body.position.y > 300 && box5.body.position.y > 300 && box6.body.position.y > 300 && box7.body.position.y > 300 && box8.body.position.y > 300 && box9.body.position.y > 300 && box10.body.position.y > 300 && box11.body.position.y > 300 && box12.body.position.y > 300 && box13.body.position.y > 300 && box14.body.position.y > 300 && box15.body.position.y > 300 && box16.body.position.y > 300 && box17.body.position.y > 500 && box18.body.position.y > 500 && box19.body.position.y > 500 && box20.body.position.y > 500 && box21.body.position.y > 500 && box22.body.position.y > 500 && box23.body.position.y > 500 && box24.body.position.y > 500 && box25.body.position.y > 500 && box26.body.position.y > 500 && box27.body.position.y > 500 && box28.body.position.y > 500 && box29.body.position.y > 500 && box30.body.position.y > 500 && box31.body.position.y > 500 && box32.body.position.y > 500) {
      if(variable === 3) {
        fill("red");
        textSize(35);
        textFont("segoe print");
        textAlign(CENTER);
        textStyle(BOLD);
        text("Borra: Well done Brother! Our mission was",675,220);
        text("successful!! Percival is dead.",675,260);
        textFont("courier new");
        textSize(20);
        text("(Press 'Ctrl + R' to restart)",675,320);
      }
    }
    else if(box1.body.position.y > 300 && box2.body.position.y > 300 && box3.body.position.y > 300 && box4.body.position.y > 300 && box5.body.position.y > 300 && box6.body.position.y > 300 && box7.body.position.y > 300 && box8.body.position.y > 300 && box9.body.position.y > 300 && box10.body.position.y > 300 && box11.body.position.y > 300 && box12.body.position.y > 300 && box13.body.position.y > 300 && box14.body.position.y > 300 && box15.body.position.y > 300 && box16.body.position.y > 300) {
      if(variable === 2) {
        fill("red");
        textSize(35);
        textFont("segoe print");
        textAlign(CENTER);
        textStyle(BOLD);
        text("Borra: Thanks a lot for saving me from that",675,220);
        text("evil human, brother. But our revenge won't be",675,260);
        text("complete until Percival dies.",675,300)
        text("{Better luck next time}",675,360)
        textFont("courier new");
        textSize(20);
        text("(Press 'Ctrl + R' to restart)",675,420); 
      } 
    }
    else if(box1.body.position.y < 500 || box2.body.position.y < 500 || box3.body.position.y < 500 || box4.body.position.y < 500 || box5.body.position.y < 500 || box6.body.position.y < 500 || box7.body.position.y < 500 || box8.body.position.y < 500 || box9.body.position.y < 500 || box10.body.position.y < 500 || box11.body.position.y < 500 || box12.body.position.y < 500 || box13.body.position.y < 500 || box14.body.position.y < 500 || box15.body.position.y < 500 || box16.body.position.y < 500 || box17.body.position.y < 500 || box18.body.position.y < 500 || box19.body.position.y < 500 || box20.body.position.y < 500 || box21.body.position.y < 500 || box22.body.position.y < 500 || box23.body.position.y < 500 || box24.body.position.y < 500 || box25.body.position.y < 500 || box26.body.position.y < 500 || box27.body.position.y < 500 || box28.body.position.y < 500 || box29.body.position.y < 500 || box30.body.position.y < 500 || box31.body.position.y < 500 || box32.body.position.y < 500) {
      if(variable === 1) {
        fill("red");
        textSize(35);
        textFont("segoe print");
        textAlign(CENTER);
        textStyle(BOLD);
        text("You failed! Percival has killed Borra.",675,220);
        text("Better luck next time.",675,260);
        textFont("courier new");
        textSize(20);
        text("(Press 'Ctrl + R' to restart)",675,320);
      }
    }
  }
}

//keyPressed function.
function keyPressed() {
  //Repositioning the stone when enter is pressed.
  if(keyCode === 13) {
    sling.reposition(stone.body);
    Body.setPosition(stone.body,{x:120,y:210});
  }
}

//mouseDragged function.
function mouseDragged() {
 //Setting stone's positions equal to mouse's positions under certain conditions.
 if(stage === 3 && stonePos === 2) {
    Body.setPosition(stone.body,{x:mouseX,y:mouseY});
  }
}

//mouseReleased function.
function mouseReleased() {
  if(stage === 3 && stonePos === 2) {
    //Calling the 'fly' function for sling under certain conditions.
    sling.fly();
  }
}
