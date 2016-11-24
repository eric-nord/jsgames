//the sprites and missle positions
var blueship;
var hasBoss = false;
var main_x = 0,
  main_y = 0,
  move_x = 0,
  move_y = 0;
var main_x2 = 0,
  main_y2 = 0,
  move_x2 = 0,
  move_y2 = 0;
var missles = [{
  image: new Image(),
  x: main_x,
  y: main_y
}];
var missles2 = [{
  image: new Image(),
  x: main_x2,
  y: main_y2
}];
var bossmissles = [{
  image: new Image(),
  x: 50,
  y: 0
}];
var bossmissles2 = [{
  image: new Image(),
  x: 30,
  y: -25
}]
var bossmiss;
var bossmiss2;
var brownship;
var bluemissle;
var brownmissle;
var enemys = [];
var boss;
//var enemymissle;

//background
var space;
//canvas
var game;
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


function keyPressBlue(e) {

  if (e.keyCode == 68) {
    speed = 1.5;
    move_x = speed;

  }
  if (e.keyCode == 65) {
    speed = -1.5;
    move_x = speed;

  }
  if (e.keyCode == 83) {
    horizontal = 1.5;
    move_y = horizontal;


  }
  if (e.keyCode == 87) {
    horizontal = -1.5;
    move_y = horizontal;


  }
  if (e.keyCode == 32) {
    var sound = document.getElementById("fire");
    sound.play();
    createBlueMissles();

  }
}

function keyReleaseBlue(e) {
  if (e.keyCode == 68) {
    move_x = 0;
  }
  if (e.keyCode == 65) {
    move_x = 0;
  }
  if (e.keyCode == 83) {
    move_y = 0;
  }
  if (e.keyCode == 87) {
    move_y = 0;
  }
}

function keyPressBrown(e) {

  if (e.keyCode == 39) {
    speed2 = 1.5;
    move_x2 = speed2;
  }
  if (e.keyCode == 37) {
    speed2 = -1.5;
    move_x2 = speed2;
  }
  if (e.keyCode == 40) {
    horizontal2 = 1.5;
    move_y2 = horizontal2;
  }
  if (e.keyCode == 38) {
    horizontal2 = -1.5;
    move_y2 = horizontal2;
  }
  if (e.keyCode == 101) {
    var sound = document.getElementById("fire");
    sound.play();
    createBrownMissles();
  }
}

function keyReleaseBrown(e) {
  if (e.keyCode == 39) {
    move_x2 = 0;
  }
  if (e.keyCode == 37) {
    move_x2 = 0;
  }
  if (e.keyCode == 40) {
    move_y2 = 0;
  }
  if (e.keyCode == 38) {
    move_y2 = 0;
  }
}

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

function createBlueMissles() {
  bluemissle = new Image();
  bluemissle.src = "_img/realblue.png";

  missles.push({
    image: bluemissle,
    x: main_x,
    y: main_y
  });
  return bluemissle;


}

function createBrownMissles() {
  brownmissle = new Image();
  brownmissle.src = "_img/red.png";

  missles2.push({
    image: brownmissle,
    x: main_x2,
    y: main_y2
  });
  return brownmissle;
}

function createBossMissles() {
  bossmiss = new Image();
  bossmiss.src = "_img/bossmiss.png";

  bossmissles.push({
    image: bossmiss,
    x: 50,
    y: 0
  });
  return bossmiss;
}

function createBossMissles2() {
  bossmiss2 = new Image();
  bossmiss2.src = "_img/bossmiss.png";

  bossmissles2.push({
    image: bossmiss2,
    x: 30,
    y: -25
  });
  return bossmiss2;
}

function draw() {
  context.save();
  context.clearRect(0, 0, game.width, game.height);

  space = new Image();
  space.src = "_img/background.jpg";
  context.drawImage(space, x, 0);
  context.drawImage(space, space.width + x, 0);


  if (deadblue === false) {
    for (var i = 0; i < missles.length; i++) {
      var bluemiss = missles[i];
      bluemiss.x += 3;
      context.drawImage(bluemiss.image, game.width / 2 + bluemiss.x, game.height / 2 + bluemiss.y);
    }
    missles.splice(0, missles.length - 15);


    blueship = new Image();
    blueship.src = "_img/blue.png";
    context.drawImage(blueship, game.width / 2 + main_x, game.height / 2 + main_y);
  }

  if (over === false) {
    for (var q = 0; q < enemys.length; q++) {
      var ene = enemys[q];
      ene.x -= 0.5;
      context.drawImage(ene.image, ene.x + game.width / 2, ene.y + game.height / 2);
    }
  }
  if (bossHp >= 1) {
    console.log(bossHp);
    for (var g = 0; g < bosses.length; g++) {
      var bos = bosses[g];
      if (bos.x >= -10) {
        bos.x -= 0.3;
      }
      context.drawImage(bos.image, bos.x + game.width / 2, bos.y + game.height / 2);
    }
  } else {
    win = true;
  }
  if (singlePlayer === false) {


    if (deadbrown === false) {
      brownship = new Image();
      brownship.src = "_img/brown.png";
      context.drawImage(brownship, game.width / 2 + main_x2, game.height / 2 + main_y2);

      for (var m = 0; m < missles2.length; m++) {
        var brownmiss = missles2[m];
        brownmiss.x += 3;
        context.drawImage(brownmiss.image, game.width / 2 + brownmiss.x, game.height / 2 + brownmiss.y);
      }
      missles2.splice(0, missles2.length - 15);
    }


  }

  for (var j = 0; j < bossmissles.length; j++) {
    var bosmis = bossmissles[j];
    bosmis.y = Math.cos(bosmis.x) * 13 + 5;
    bosmis.x -= 0.25;
    context.drawImage(bosmis.image, game.width / 2 + bosmis.x, game.height / 2 + bosmis.y);
  }
  bossmissles.splice(0, bossmissles.length - 15);

  for (var f = 0; f < bossmissles2.length; f++) {
    var bosmis2 = bossmissles2[f];
    bosmis2.y = -Math.cos(bosmis2.x) * 13 + 15;
    bosmis2.x -= 0.25;
    context.drawImage(bosmis2.image, game.width / 2 + bosmis2.x, game.height / 2 + bosmis2.y);
  }
  bossmissles2.splice(0, bossmissles2.length - 15);

  context.restore();
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

function pause(e) {
  if (e.keyCode == 222) {
    active = !active;
  }
}

function spawnEnemy() {
  var enemyi = new Image();
  enemyi.src = "_img/enemy.png";
  var c = Math.random() * game.height - game.height / 2;
  enemys.push({
    image: enemyi,
    x: 50,
    y: c
  });
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
    console.log(blueLifes);
    deadblue = false;
  }
}

function reviveBrown() {
  if (singlePlayer === false) {
    if (deadbrown === true) {
      brownLifes -= 1;
      console.log(brownLifes);
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

function gameLogic() {
  for (var i = 0; i < enemys.length; i++) {
    for (var a = 0; a < missles.length; a++) {
      if (Math.abs(missles[a].x - enemys[i].x) <= 24 && missles[a].y - enemys[i].y <= 18 && missles[a].y - enemys[i].y >= -10) {
        enemys.splice(i, 1);
        missles.splice(a, 1);
      }
    }
    for (var c = 0; c < missles2.length; c++) {
      if (Math.abs(missles2[c].x - enemys[i].x) <= 24 && missles2[c].y - enemys[i].y <= 18 && missles2[c].y - enemys[i].y >= -1) {
        enemys.splice(i, 1);
        missles2.splice(c, 1);
      }

    }

    if (Math.abs(main_x - enemys[i].x) <= 24 && main_y - enemys[i].y <= 18 && main_y - enemys[i].y >= -1) {
      enemys.splice(i, 1);
      deadblue = true;
    }
    if (Math.abs(main_x2 - enemys[i].x) <= 24 && main_y2 - enemys[i].y <= 18 && main_y2 - enemys[i].y >= -1) {
      enemys.splice(i, 1);
      deadbrown = true;
    }
  }
  for (var o = 0; o < bosses.length; o++) {
    if (Math.abs(main_x - bosses[o].x) <= 24 && main_y - bosses[o].y <= 40 && main_y - bosses[o].y >= -1) {
      main_y = 40;
      main_x = -40;
      deadblue = true;

    }
    if (Math.abs(main_x2 - bosses[o].x) <= 24 && main_y2 - bosses[o].y <= 40 && main_y2 - bosses[o].y >= -1) {
      main_y2 = 40;
      main_x2 = -45;
      deadbrown = true;
    }
    for (var hitbox_a = 0; hitbox_a < missles.length; hitbox_a++) {
      if (Math.abs(missles[hitbox_a].x - bosses[o].x) <= 30 && missles[hitbox_a].y - bosses[o].y <= 40 && missles[hitbox_a].y - bosses[o].y >= -1) {
        bossHp -= 1;
        missles.splice(hitbox_a, 1);
      }
    }
    for (var hitbox_c = 0; hitbox_c < missles.length; hitbox_c++) {
      if (Math.abs(missles2[hitbox_c].x - bosses[o].x) <= 30 && missles2[hitbox_c].y - bosses[o].y <= 40 && missles2[hitbox_c].y - bosses[o].y >= -1) {
        bossHp -= 1;
        missles2.splice(hitbox_c, 1);
      }
    }
  }

  for (var k = 0; k < bossmissles.length; k++) {
    if (Math.abs(main_x - bossmissles[k].x) <= 24 && main_y - bossmissles[k].y <= 18 && main_y - bossmissles[k].y >= -1) {
      bossmissles.splice(k, 1);
      deadblue = true;
    }
    if (Math.abs(main_x2 - bossmissles[k].x) <= 24 && main_y2 - bossmissles[k].y <= 18 && main_y2 - bossmissles[k].y >= -1) {
      bossmissles.splice(k, 1);
      deadbrown = true;
    }
    // maybe later add some way to have the missles die if hit twice
    // for(var a = 0; a < missles.length; a++){
    //   if(Math.abs(missles[a].x - bosses[o].x) <= 30 && missles[a].y - bosses[o].y <= 40 &&  missles[a].y - bosses[o].y >= -1){
    //       
    //       missles.splice(a,1);
    //   }
  }

  if (hasBoss === true) {
    for (var hitbox_e = 0; hitbox_e < bossmissles2.length; hitbox_e++) {
      if (Math.abs(main_x - bossmissles2[hitbox_e].x) <= 16 && main_y - bossmissles2[hitbox_e].y <= 13 && main_y - bossmissles2[hitbox_e].y >= -1) {
        bossmissles2.splice(hitbox_e, 1);
        deadblue = true;
      }
      if (Math.abs(main_x2 - bossmissles2[e].x) <= 16 && main_y2 - bossmissles2[e].y <= 13 && main_y2 - bossmissles2[e].y >= -1) {
        bossmissles2.splice(e, 1);
        deadbrown = true;
      }
    }
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