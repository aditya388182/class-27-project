class Roof{

    constructor(x,y,width,height){
        

    this.body = Bodies.rectangle(x,y,width,height,{isStatic : true});
    this.height = height;
    this.width = width;

    World.add(world,this.body);
      }

        display(){
            push();
            rectMode(CENTER);

            fill("white");

            rect(this.body.position.x,this.body.position.y,this.width,this.height);
            pop();
        }



}; 