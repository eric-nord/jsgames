function draw(x,y) {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext('2d');
  ctx.save();
  ctx.clearRect(0,0,500,400);
  ctx.fillStyle=("rgba(0,0,100,1)");
  ctx.fillRect(x,20,50,50);
  ctx.restore();
  x += 2
  var loopTimer = setTimeout('draw('+x+','+y+')',30);
}