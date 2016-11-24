function pause(e) {
  if (e.keyCode == 222) {
    active = !active;
  }
}

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
     if (sound.paused) {
       sound.play();
    }
    else{
      sound.currentTime = 0
    }
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
