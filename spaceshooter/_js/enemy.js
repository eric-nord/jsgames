class Enemy {
  constructor() {
    this.hitpoint = 1;
    this.x = 50;
    this.y = Math.random() * game.height - game.height / 2;
    this.image = new Image();
    this.image.src = "_img/enemy.png";
    this.speed = -0.5;
  }
}