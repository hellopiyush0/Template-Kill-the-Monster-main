class Fly{

    constructor(bodyA, pointB){

        var options = {

            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 1

        }
        
        this.pointB = pointB
        this.body = Constraint.create(options);
        World.add(world, this.body);

    }

    fly(){

        this.body.bodyA = null;
        
    }

    attach(pointA){

        this.body.bodyA = pointA;
        
    }

    display(){

        if(this.body.bodyA){

            var pointA = this.body.bodyA.position;
            var pointB = this.pointB;

            strokeWeight(0);
            line(pointA.x, pointA.y, pointB.x, pointB.y);

        }
    }
    
}