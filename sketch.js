const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var ground;

var particles = [];
var plinkos = [];
var divisions = [];


var divisionHeight = 300;;

function setup() {
  createCanvas(480, 800);
 
  engine = Engine.create();
	world = engine.world;


  ground = new Ground(400,790,800,20);
  
  for (var k = 0; k <= width; k = k + 80)
  {
    divisions.push(new Divisions(k, height - divisionHeight/2,10,divisionHeight));
  }

  
   

   for (var j = 40; j <= width; j=j+50)
   {

    plinkos.push(new Plinko(j,75));
   }


    for (var j = 15; j <= width-10; j=j+50) 
    {
 
     plinkos.push(new Plinko(j,175));

    }

     for (var j = 40; j <= width; j=j+50) 
     {
  
      plinkos.push(new Plinko(j,275));
     }


      for (var j = 15; j <= width; j=j+50) 
     {
  
      plinkos.push(new Plinko(j,375));
 }
}


function draw() {
  //background(41,55,73);
  background(0,14,52);
  Engine.update(engine);
  ground.display();

  for ( var j = 0; j < divisions.length; j++)
  {
    divisions[j].display();
  }
  
  for ( var m = 0; m < plinkos.length; m++)
  {
    plinkos[m].display();
  }
  
  for ( var m = 0; m < particles.length; m++)
  {
    particles[m].display();
  }

  if(frameCount%90 === 0)
  {
  for (var k =0; k <= width; k = k +300)
  {
    particles.push(new Particle(k,50));
  }
  
  }
 // drawSprites();
 
}
