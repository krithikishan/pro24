class Rubber{

constructor(x, y){

var options = {

'restitution': 0.3, 
'friction': 5, 
'density': 2.5

}

this.body= Bodies.circle(x, y, 70, options);
this.radius= 70;

World.add(world, this.body);
}

display(){

var pos= this.body.position; 
var angle= this.body.angle; 

push()
translate(pos.x, pos.y);
rotate(angle);
fill("red");
stroke("pink");
ellipse(0, 0, 70);
pop();
}
}