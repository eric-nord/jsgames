class Enemy {
  constructor() {
    this.hitpoint = 1;
    this.x = 50;
    this.y = Math.random() * game.height - game.height / 2;
    var enemyi = new Image();
    enemyi.src = "_img/enemy.png";
    this.image = enemyi;
    this.speed = -0.5;
  }
}