class Enemy {
  constructor(hitpoints, width, img, speed, type) {
    this.hitpoint = hitpoints;
    this.width = width;
    this.img = img;
    this.speed = speed;
    this.type = type;
    
    //Sets a random height for new enemy on construction
    this.height = Math.random() * game.height - game.height / 2;
  }
}