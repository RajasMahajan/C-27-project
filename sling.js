class Sling{

    constructor(body1,body2,offsetX,offsetY)
    {
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var ops={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX,y:this.offsetY},
        }
        this.Sling=Constraint.create(ops);
        World.add(world,this.Sling);
    }
}