class Enemy {
  constructor() {
    this.hitpoint = 1;
    this.xPosition = 50;
    this.yPosition = Math.random() * game.height - game.height / 2;
    this.img = new Image('_img/enemy.png');
    this.speed = -0.5;
  }
}