class Iron{

constructor(x, y, width, height){

var options= {

'resitution': 0.8, 
'density': 5, 
'friction': 0.3
}
this.body= Bodies.rectangle(x, y, width, height, options);
this.width= width; 
this.height= height; 

World.add(world, this.body);
}
display(){

var pos= this.body.position; 
var angle= this.body.angle; 

push()
rectMode(CENTER);
translate(pos.x, pos.y);
rotate(angle);
fill("orange");
stroke("red"); 
strokeWeight(4);
rect(0, 0, this.width, this.height);
pop()
}
}