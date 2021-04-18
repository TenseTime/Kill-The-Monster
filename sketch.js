const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var flag = 0;


function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
	world = engine.world;
  ground1 = new Ground(1000,500,2000,100);
  box = new Block(640,200,40,40);
  box1 = new Block(680,200,40,40);
  box2 = new Block(720,200,40,40);
  box3 = new Block(760,200,40,40);

  box110 = new Block(640,260,40,40);
  box11 = new Block(680,260,40,40);
  box21 = new Block(720,260,40,40);
  box31 = new Block(760,260,40,40);

  box12 = new Block(640,310,40,40);
  box112 = new Block(680,310,40,40);
  box212 = new Block(720,310,40,40);
  box312 = new Block(760,310,40,40);

  box13 = new Block(640,360,40,40);
  box113 = new Block(680,360,40,40);
  box213 = new Block(720,360,40,40);
  box313 = new Block(760,360,40,40);
  
  box133 = new Block(640,400,40,40);
  box2133 = new Block(720,400,40,40);
  box3133 = new Block(760,400,40,40);

  b20 = new Block(600,300,1,1);

  b = new Block(640,450,40,40);
  b1 = new Block(720,450,40,40);
  b2 = new Block(760,450,40,40);

  //godzilla = createSprite(1000,500,100,100);
  
  superhero = new Hero(300,300,100,100);

  monster = new Monster(1000,300,100,100);
  Engine.run(engine);
}

function draw() {
  background(255);
  ground1.display();
  box.display();
  box1.display();
  box2.display();
  box3.display();
  box110.display();
  box11.display();
  box21.display();
  box31.display();
  box12.display();
  box112.display();
  box212.display();
  box312.display();
  box13.display();
  box113.display();
  box213.display();
  box313.display();
  box133.display();
  box2133.display();
  box3133.display();
  b.display();
  b1.display();
  b2.display();
  superhero.display();
  monster.display();

  var crash = Matter.SAT.collides(superhero.body,monster.body);
  if(crash.collided){
    flag=1
  }
  if(flag ===1){
    fill("red");
    textSize(20);
    stroke("red");
    strokeWeight(2);
    textFont("Cursive");
    text("YOU STARTED A FIGHT WITH THE MONSTER NOOOO", 500,50);
  }
}

function mouseDragged(){
  Matter.Body.setPosition(superhero.body,{x:mouseX, y:mouseY});
}

