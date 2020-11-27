const Engine=Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var divisionheight=300;
var ground;
var divisions =[];
var plinkos =[];
var particles=[];

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
    world = engine.world;

  ground= new Ground(240,790,480,20);
 
for(var j= 30; j<= width-10 ; j=j+50){
plinkos.push( new Plinko(j,75,10));
}
/*for(var j;j < plinkos.length; j++){
  plinkos[j].display();
}*/
for(var j= 50; j<= width-10 ; j=j+50){
  plinkos.push( new Plinko(j,175,10));
  }
   /*for(var l;l < plinkos.length; l++){
    plinkos[l].display();
  }*/
for(var j= 20; j<= width-10 ; j=j+50){
    plinkos.push( new Plinko(j,275,10));
    }
/*for(var m;m < plinkos.length; m++){
      plinkos[m].display();
    }*/
 for(var j= 10; j<= width-10 ; j=j+50){
      plinkos.push( new Plinko(j,375,10));
      }
  for(var k =0; k<=width ; k =k+80  ){
  divisions.push(new Divisions(k, height-divisionheight/2,10,divisionheight));
}
}

function draw() {
  background("grey"); 
Engine.update(engine);
 ground.display();
 
  for(var i;i < plinkos.length; i++){
        plinkos[i].display();
      }
 
 for(var k ;k < divisions.length; k++){
   divisions[k].display();
 }


   if(frameCount%60===0){
   particles.push(new Particle(random(width/2-10,width/2+10),30,10));
 }
for(var b;b < particles.length; b++){
  particles[b].display();
}
}
