var blueship;
var hasBoss = false;
var main_x = 0, main_y = 0, move_x = 0, move_y = 0; main_x2 = 0, main_y2 = 0, move_x2 = 0, move_y2 = 0; 
var missles = [{ image: new Image(), x: main_x, y: main_y }];
var missles2 = [{ image: new Image(), x: main_x2, y: main_y2 }];
var bossmissles = [{ image: new Image(), x: 50, y: 0 }];
var bossmissles2 = [{ image: new Image(), x: 30, y: -25 }]
var bossmiss;
var bossmiss2;
var brownship;
var bluemissle;
var brownmissle;
var enemys = [];
var boss;
var space; //background
var game; //canvas
var resume;
var exit;
var frameRate = 24;
var speed;
var horizontal;
var speed2;
var horizontal2;
var context;
var x = 0;
var active = false;
var singlePlayer = false;
var coop;
var single;
var blueLifes = 3;
var brownLifes = 3;
var deadblue = false;
var deadbrown = false;
var bossHp = 1000;
var gameOver;
var over = false;
var bosses = [];
var win = false;
var won;
var blue;
var brown;

function moveBlue() {
  if (deadblue === false) {
    if (main_x >= 37 && speed > 0) {
      main_x += 0;
    } else if (main_x <= -62 && speed < 0) {
      main_x += 0;
    } else {
      main_x += move_x;
    }
    if (main_y >= 55 && horizontal > 0) {
      main_y += 0;
    } else if (main_y <= -75 && horizontal < 0) {
      main_y += 0;
    } else {
      main_y += move_y;
    }
  }
}

function moveBrown() {
  if (main_x2 >= 37 && speed2 > 0) {
    main_x2 += 0;
  } else if (main_x2 <= -62 && speed2 < 0) {
    main_x2 += 0;
  } else {
    main_x2 += move_x2;
  }
  if (main_y2 >= 55 && horizontal2 > 0) {
    main_y2 += 0;
  } else if (main_y2 <= -75 && horizontal2 < 0) {
    main_y2 += 0;
  } else {
    main_y2 += move_y2;
  }
}

function gameLoop() {
  single.onclick = function() {
    document.getElementById("start").style.zIndex = "1";
    document.getElementById("single").style.zIndex = "1";
    document.getElementById("co-op").style.zIndex = "1";
    active = !active;
    singlePlayer = true;
    brownLifes = 0;
  };

  coop.onclick = function() {
    document.getElementById("start").style.zIndex = "1";
    document.getElementById("single").style.zIndex = "1";
    document.getElementById("co-op").style.zIndex = "1";
    active = !active;
  };

  exit.onclick = function() {
    window.location.href = "https://static-michaelnowlin5.c9users.io/project/";
  };

  resume.onclick = function() {
    active = !active;
  };

  if (active === false) {
    document.getElementById("resume").style.zIndex = "10";
    document.getElementById("exit").style.zIndex = "10";
  } else {
    document.getElementById("resume").style.zIndex = "2";
    document.getElementById("exit").style.zIndex = "2";
  }

  if (blueLifes >= 1 && win === false || brownLifes >= 1 && win === false) {
    if (active === true) {
      draw();
      moveBlue();
      moveBrown();
      gameLogic();
    }
  }
  if (blueLifes <= 0 && brownLifes <= 0) {
    document.getElementById("gameOver").style.zIndex = "40";
  }
  if (win === true) {
    document.getElementById("win").style.zIndex = "40";
  }
  document.getElementById("bluelifes").innerHTML = "... " + blueLifes;
}

function updatebackground() {
  if (active === true) {
    x -= 1;
    if (Math.abs(x) >= space.width) {
      x = 0;
    }
  }
}

function spawnEnemy() {
  enemys.push(new Enemy());
}

function spawnBoss() {
  over = true;
  boss = new Image();
  boss.src = "_img/boss.png";

  var d = Math.random() * game.height - game.height / 2;
  bosses.push({
    image: boss,
    x: 50,
    y: 0
  });
}

function reviveBlue() {
  if (deadblue === true) {
    blueLifes -= 1;
    //console.log(blueLifes);
    deadblue = false;
  }
}

function reviveBrown() {
  if (singlePlayer === false) {
    if (deadbrown === true) {
      brownLifes -= 1;
      //console.log(brownLifes);
      deadbrown = false;
    }
  }
}

function spawnMissle() {
  if (over === true) {
    createBossMissles();
  }
}

function spawnMissle2() {
  if (over === true) {
    createBossMissles2();
  }
}



function init() {
  brown = document.getElementById("brownLifes");
  blue = document.getElementById("blueLifes");
  won = document.getElementById("win");
  gameOver = document.getElementById("gameOver")
  single = document.getElementById("single");
  coop = document.getElementById("co-op");
  resume = document.getElementById("resume");
  exit = document.getElementById("exit");
  game = document.getElementById("space");
  if (game && game.getContext) {
    context = game.getContext('2d');
    setInterval(spawnEnemy, 1500);
    window.canvas = document.getElementById("space");
    window.ctx_1 = game.getContext("2d");
    setInterval(gameLoop, 1000 / frameRate);
    setInterval(updatebackground, 1000 / frameRate);
    setInterval(reviveBlue, 100000 / frameRate);
    setInterval(reviveBrown, 100000 / frameRate);
    setInterval(spawnBoss, 300000);
    setInterval(over, 300000);
    setInterval(spawnMissle, 100000 / frameRate);
    setInterval(spawnMissle2, 100000 / frameRate);
    window.addEventListener("keydown", keyPressBlue, false);
    window.addEventListener("keyup", keyReleaseBlue, false);
    window.addEventListener("keydown", keyPressBrown, false);
    window.addEventListener("keyup", keyReleaseBrown, false);
    window.addEventListener("keydown", pause, false);
  }
  gameOver.onclick = function() {
    window.location.reload();
  }
  won.onclick = function() {
    window.location.reload();
  }
}

window.addEventListener("load", init, false);