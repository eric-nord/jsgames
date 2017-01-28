//Sets paddle default location
paddle1y=paddle2y=40;
paddleWidth=10; //paddle thickness
paddleHeight=100; //Paddle height

ballX=ballY=50;//Paddle height

//x and y velocity
xVelocity=yVelocity=4;
ballDiameter =5;
score1=score2=0;
//ai speed
aiSpeed = 4;


window.onload = function() {
  c = document.getElementById('gc');
  cc = c.getContext('2d');
  setInterval(update, 1000/30);
  
  c.addEventListener('mousemove', function(e) {
    paddle1y = e.clientY-paddleHeight/2
  });
}

function reset() {
  console.log("reset");
  ballY=c.height/2;
  ballX=c.width/2;
  xVelocity=4;
  yVelocity=4;
}

function update() {
  ballX+=xVelocity;
  ballY+=yVelocity;
  
  //Bounce top bottom
  if(ballY<0 && yVelocity<0){
    yVelocity=-yVelocity;
  }
  if(ballY>c.height && yVelocity>0){
    yVelocity=-yVelocity;
  }
  
  //Bounce off paddle or score
  if(ballX<paddleWidth){
    console.log(ballX);
    if(ballY>paddle1y && ballY<paddle1y+paddleHeight){
      xVelocity=-xVelocity;
      dy=ballY-(paddle1y+paddleHeight/2);
      yVelocity = dy*0.3;
      xVelocity++;
    }else{
    score2++;
    reset();
    }
  }
  
  if(ballX>c.width-paddleWidth){
    console.log(c.width);
    console.log(ballX);
    if(ballY>paddle2y && ballY<paddle2y+paddleHeight){
      xVelocity=-xVelocity;
      dy=ballY-(paddle2y+paddleHeight/2);
      yVelocity = dy*0.3;
      xVelocity--;
    }else{
    score1++;
    reset();
    }
  }

  //ai paddle
  if(paddle2y+paddleHeight/2<ballY){
    paddle2y+=aiSpeed;
  }else{
    paddle2y-=aiSpeed;
  }
  //backgorund
  cc.fillStyle='black';
  cc.fillRect(0,0,c.width,c.height);
  
  //paddles
  cc.fillStyle='white';
  cc.fillRect(0,paddle1y,paddleWidth,paddleHeight);
  cc.fillRect(c.width-paddleWidth,paddle2y,paddleWidth,paddleHeight);
  
  //ball
  cc.fillRect(ballX-ballDiameter/2,ballY,ballDiameter,ballDiameter);
  cc.fillText(score1,100,100);
  cc.fillText(score2,c.width-100,100); 
}