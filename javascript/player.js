
border.on('mousemove',function() {
  var mousePos = stage.getPointerPosition();
  player.setRotation(Math.atan2(player.getY() - mousePos.y,player.getX() - mousePos.x));
  layer.draw();
});

border.on('click',function() {
  playerBody.setFill('red');
});
