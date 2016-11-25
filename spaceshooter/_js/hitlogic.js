/*
 * Need to re-write collision detection in a much easier way:
 * Circle collision may be of particular interest
 * @see: https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
 */

function gameLogic() {
  
  //for loop on enemies
  for (var hitbox_i = 0; hitbox_i < enemys.length; hitbox_i++) {
    //for loop on missles
    for (var hitbox_a = 0; hitbox_a < missles.length; hitbox_a++) {
      
      //if missle.x - enemy.x <= 24 AND y - y <= 18 AND y - y >= -10
      if (Math.abs(missles[hitbox_a].x - enemys[hitbox_i].x) <= 24 && missles[hitbox_a].y - enemys[hitbox_i].y <= 18 && missles[hitbox_a].y - enemys[hitbox_i].y >= -10) {
        enemys.splice(hitbox_i, 1);
        missles.splice(hitbox_a, 1);
      }
    }

    for (var hitbox_c = 0; hitbox_c < missles2.length; hitbox_c++) {
      if (Math.abs(missles2[hitbox_c].x - enemys[hitbox_i].x) <= 24 && missles2[hitbox_c].y - enemys[hitbox_i].y <= 18 && missles2[hitbox_c].y - enemys[hitbox_i].y >= -1) {
        enemys.splice(hitbox_i, 1);
        missles2.splice(hitbox_c, 1);
      }

    }

    if (Math.abs(main_x - enemys[hitbox_i].x) <= 24 && main_y - enemys[hitbox_i].y <= 18 && main_y - enemys[hitbox_i].y >= -1) {
      enemys.splice(hitbox_i, 1);
      deadblue = true;
    }
    if (Math.abs(main_x2 - enemys[hitbox_i].x) <= 24 && main_y2 - enemys[hitbox_i].y <= 18 && main_y2 - enemys[hitbox_i].y >= -1) {
      enemys.splice(hitbox_i, 1);
      deadbrown = true;
    }
  }
  for (var hitbox_o = 0; hitbox_o < bosses.length; hitbox_o++) {
    if (Math.abs(main_x - bosses[hitbox_o].x) <= 24 && main_y - bosses[hitbox_o].y <= 40 && main_y - bosses[hitbox_o].y >= -1) {
      main_y = 40;
      main_x = -40;
      deadblue = true;
    }
    if (Math.abs(main_x2 - bosses[hitbox_o].x) <= 24 && main_y2 - bosses[hitbox_o].y <= 40 && main_y2 - bosses[hitbox_o].y >= -1) {
      main_y2 = 40;
      main_x2 = -45;
      deadbrown = true;
    }
    for (var hitbox_s = 0; hitbox_s < missles.length; hitbox_s++) {
      if (Math.abs(missles[hitbox_s].x - bosses[hitbox_o].x) <= 30 && missles[hitbox_s].y - bosses[hitbox_o].y <= 40 && missles[hitbox_s].y - bosses[hitbox_o].y >= -1) {
        bossHp -= 1;
        missles.splice(hitbox_s, 1);
      }
    }
    for (var hitbox_n = 0; hitbox_n < missles.length; hitbox_n++) {
      if (Math.abs(missles2[hitbox_n].x - bosses[hitbox_o].x) <= 30 && missles2[hitbox_n].y - bosses[o].y <= 40 && missles2[hitbox_n].y - bosses[hitbox_o].y >= -1) {
        bossHp -= 1;
        missles2.splice(hitbox_n, 1);
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