class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
      World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }
   attach(body){
   this.sling.bodyA = body;    
   }
   
    display(){
        image(this.sling1, 200, 25);
        image(this.sling2, 180, 25);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(8);
            stroke(49, 22, 8);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            line(pointA.x - 10, pointA.y, pointB.x - 10, pointB.y);
            image(this.sling3, pointA.x-20, pointA.y-15, 10, 25);
            pop();
            
        }
    }
    
}