class createsnow{
constructor(x,y){

    var option={

        friction:0.001,
        restitution:0.1,
        isStatic:false,
    }

    this.snow=bodies.circle(x,y,5,option)
    this.radius=5
    var rand=Math.round(random(1,2))
    var ing
    if(rand===1){
  ing="snow4.webp"
    }

    else{
        
        ing="snow5.webp"

    }
    this.image=loadImage(ing)
    World.add(world,this.snow)
}
updatey(){
if(this.snow.position.y>height){
    Matter.Body.setPosition(this.snow,{x:random(0,800),y:random(0,800)})
}
  }
showdrop(){
fill ("blue")
imageMode(CENTER)
image(this.image,this.snow.position.x,this.snow.position.y,10,10)
}
}

















