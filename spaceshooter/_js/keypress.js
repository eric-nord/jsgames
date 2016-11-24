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