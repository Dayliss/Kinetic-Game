
border.on('mousemove',function() {
  var mousePos = stage.getPointerPosition();
  player.setRotation(Math.atan2(player.getY() - mousePos.y,player.getX() - mousePos.x) + Math.PI/6);
  layer.draw();
  line.setPoints([[player.getX(),player.getY()],[mousePos.x,mousePos.y]]);
});

var line = new Kinetic.Line({
  points: [[player.getX(),player.getY()]],
  stroke: 'black',
  strokeWidth: rad/10,
});

layer.add(line);
