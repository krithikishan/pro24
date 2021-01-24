class Sand{

    constructor(x, y){
    
    var options = {
    
    'restitution': 0.3, 
    'friction': 5, 
    'density': 0.5
    
    }
    
    this.body= Bodies.circle(x, y, 20, options);
    this.radius= 20;
    
    World.add(world, this.body);
    }
    
    display(){
    
    var pos= this.body.position; 
    var angle= this.body.angle; 
    
    push()
    translate(pos.x, pos.y);
    rotate(angle);
    fill("brown");
    stroke("orrange");
    ellipse(0, 0, 20);
    pop();
    }
    }