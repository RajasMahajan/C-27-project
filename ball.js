class Ball{

    constructor(x,y,r){
      // ops={
        //    isStatic:true
        //}
        this.body=Bodies.circle(x,y,r);
        World.add(world,this.body);
        
    }
}