class Enemy {
  constructor() {
    this.image = new Image();
    this.image.src = "_img/enemy.png";
    this.hitpoints = 1;
    this.xPosition = 50;
    this.speed = -0.5;
    
    
    //Holds and array of missels
    this.missle = [];
    
    //Sets a random height for new enemy on construction
    this.yPosition = Math.random() * game.height - game.height / 2;
    //console.log(this);
  }
}