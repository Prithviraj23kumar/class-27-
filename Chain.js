class   Chain{
    constructor(objectA,objectB){
        var options = {
            bodyA:objectA,
            bodyB:objectB,
            length:10,
            stiffness:0.04

        }
        this.chain=Matter.Constraint.create(options)
        World.add(world, this.chain);

        
    }
    display(){
        var pointA=this.chain.bodyA.position
        var pointB=this.chain.bodyB.position

        push()
        strokeWeight(4)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        pop()
    }

}