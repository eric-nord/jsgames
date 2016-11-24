class Enemy {
  constructor(hitpoints, img, xPosition, speed) {
    this.hitpoints = hitpoints;
    this.xPosition = xPosition;
    this.img = img;
    this.speed = speed;
    
    
    //Holds and array of missels
    this.missle = [];
    
    //Sets a random height for new enemy on construction
    this.yPosition = Math.random() * game.height - game.height / 2;
    console.log(this);
  }
}

class SpaceShip extends Enemy {
  constructor (color){
    this.color = color;
  }
}