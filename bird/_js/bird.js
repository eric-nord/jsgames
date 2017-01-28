/*
Next:
- Do art with Doug
- consolidate draw loops
- get click working on phone right
- build collision detection
- Make person poopy on collision
- High score cookie
- Kids story board levels and add
- bird fly and bird fall
- bird get seeds
*/

var screen_object = function(x,y,xv,yv,img,type,score) {
  this.x = x;
  this.y = y;
  this.xv = xv;
  this.yv = yv;
  this.img = img;
  this.type = type;
  this.score = score;
}

//Load images but to do it better: https://perishablepress.com/3-ways-preload-images-css-javascript-ajax/
var personImg = new Image();
personImg.src = "_img/person.png";
var birdImg = new Image();
birdImg.src = "_img/bird.png";
var poopImg = new Image();
poopImg.src = "_img/poop.png";
var grassImg = new Image();
grassImg.src = "_img/grass.png";


var bird = new screen_object(20,20,0,0,birdImg,"bird", 0);
var projectiles = [];

window.onload = function() {
  c = document.getElementById('gc');
  cc = c.getContext('2d');
  setInterval(update, 1000/30);

  //Doesn't work for mobile
  c.addEventListener('click', function(e) {
    addProjectile("poop");
  });
  
}

var people = [];
function addPerson(){
  people.push(new screen_object(0,400,getRandomInt(2, 5),0,personImg,"person",0));
}

var grassXs = [];
  for (var i = 0; i < 25; i++) { 
    grassXs.push(i*100);
}

function addProjectile(type){
  var projectile = new screen_object(30, 30, 3, 3, poopImg, type, 0);
  projectiles.push(projectile);
  //console.log(projectiles);
}

function updateScreenObjects(){
  projectiles.forEach(function(projectile, index, array){
    if(projectile.x > c.width || projectile.y > c.height){
      //destroy projectile when out of screen
      projectiles.splice(index,1);
      bird.score++;
    }
    projectile.x += 5;
    projectile.y += 5;
   });
  
people.forEach(function(person, index, array){
    if(person.x > c.width || person.y > c.height){
      //destroy when out of screen
      people.splice(index,1);
      //on collision 
      //bird.score++;
      //img change to poopy person
    }
    person.x += person.xv;
  });
}


update = function() {  
  updateScreenObjects(); 
  if (people.length < 3 ){
    addPerson();
  }
  
  cc.border='1px solid #000000';
  cc.fillStyle='#b2eeff';
  cc.fillRect(0,0,c.width,c.height);
  cc.fillStyle='green';
  cc.fillRect(0,c.height*0.90,c.width,c.height*0.10);
  
  //Draw grass
  for (var i = 0; i < grassXs.length; i++) {
    cc.drawImage(grassImg, grassXs[i], 400);
    grassXs[i] += 1;
    if (grassXs[i] >= 2000) {
        grassXs[i] = -100;
    }
  } 
  
  //Draw projectiles
  projectiles.forEach(function(item, index, array){
    cc.drawImage(item.img, item.x, item.y);                    
  });
  
  //Draw people
  people.forEach(function(item, index, array){
    cc.drawImage(item.img, item.x, item.y);                    
  });
  
  //Draw bird
  cc.drawImage(birdImg, 30, 30);
  
   
  
  cc.fillStyle='green';
  cc.fillText("Score: " + bird.score, c.width-100, 30);
  //Border
  cc.lineWidth = 3;
  cc.strokeStyle="black";
  cc.strokeRect(0, 0, c.width, c.height);
  

};

//Helper functions===================================
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
