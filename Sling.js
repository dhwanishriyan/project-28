class Sling{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling1 = loadImage('sling1.png');
        this.sling2 = loadImage('sling2.png');
        this.pointB = pointB;
        //create the streatchy line using constraint and options(above)
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        }
        attach(body){
            this.sling.bodyA = body;
        }
        fly(){
            this.sling.bodyA = null;
        }    
    
        display(){
             //images
            image(this.sling1, 235, 390, 15, 60);
            image(this.sling2, 225, 394, 15, 30);
            if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke("#301608");
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            }
        }
    }
    