class Plinko{
constructor(x,y,r){
    var options={
        isStatic:true
    }
   this.r= r;
    this.body = Bodies.circle(x,y,this.r,options);
    
    World.add(world,this.body);
}
display(){
    fill("white");
    var p= this.body.position;
    ellipseMode(CENTER);
    ellipse(p.x,p.y,this.r*2,this.r*2);
}








}