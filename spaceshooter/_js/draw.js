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