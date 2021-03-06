class DustBin {
    constructor (x,y,width,height) {
        var options = {
            'isStatic': true,
            'restitution':0.3,
            'friction': 0.5,
            'density': 1.2
        }
        this.body= Bodies.rectangle(x,y,width,height, options);
        this.width = width;
        this.height = height;
        this.image= loadImage("dustbin .png");
         World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
         push();
        //translate(pos.x,pos.y);
        //rotate(this.body.angle);
        //rectMode(CENTER);
        //rect(0, 0, this.width, this.height);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y-90,this.width-50,200);
        pop();
      }
}