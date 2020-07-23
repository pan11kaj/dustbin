class Ground{

    constructor(){
    var options={
        isStatic:true
    }

    this.body = Bodies.rectangle(400,600,700,10,options);
    this.x = 400;
    this.y = 600;
    this.width = 900;
    this.height = 10;
    
    World.add(world,this.body);
    
    }
    display(){
       
        fill("red");
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        
        
        
        }}
        
        
        
        








