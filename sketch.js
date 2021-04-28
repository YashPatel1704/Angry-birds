const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var box;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var object_options ={
        isStatic: true
    }
var boxoptions={
    restitution:1.5
}
   object= Bodies.rectangle(200,390,400,20,object_options);
    World.add(world,object);
    box=Bodies.rectangle(200,100,50,50,boxoptions);
    World.add(world,box);

   


    console.log(object);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(object.position.x,object.position.y,400,20);
    rect(box.position.x,box.position.y,50,50);
}
