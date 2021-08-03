class SlingShot{
  constructor(bodyA, pointB){
      var options = {
          bodyA: bodyA,
          pointB: pointB,
          stiffness: 1.2,
          length: 400
      }
      
      this.pointB = pointB
      this.sling = Constraint.create(options);
      World.add(world, this.sling);
  }
  
  

  display(){
      
      
          var pointA = this.sling.bodyA.position;
          var pointB = this.pointB;
          push();
          
          stroke('white');
          
              strokeWeight(7);
              line(pointB.x,pointB.y,pointA.x,pointA.y);
              
             
        
          
         
          
          pop();
      }
  }
  

  