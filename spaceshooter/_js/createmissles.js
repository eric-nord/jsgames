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