var stage = new Kinetic.Stage({
  container: 'container',
  width: 578,
  height: 363
});

var layer = new Kinetic.Layer();

var player = new Kinetic.Group({
  x: 100,
  y: 100
});

var rad = 50;

var playerBody = new Kinetic.RegularPolygon({
  x:0,
  y:0,
  sides:3,
  radius: rad,
  fill: 'green',
  stroke: 'black',
  strokeWidth: rad/10
});

/*
var playerBody = new Kinetic.Circle({
  x: 0,
  y: 0,
  radius: rad,
  fill: 'green',
  stroke: 'black',
  strokeWidth: rad/10
});
*/

var text = new Kinetic.Text({
  x: 10,
  y: 10,
  fontFamily: 'Calibri',
  fontSize: 24,
  text: '',
  fill: 'black'
});

/*
var playerArrow = new Kinetic.Line({
  points: [[0,0],[-rad+1,0],[-rad*2/3+1,-rad/4],[-rad+1,0],[-rad*2/3+1,rad/4]],
  stroke: 'black',
  strokeWidth: rad/10,
  lineJoin: 'round',
  lineCap: 'round'
});
*/

var border = new Kinetic.Rect({
  x: 0,
  y: 0,
  width: stage.getWidth(),
  height: stage.getHeight(),
  stroke: 'black',
  strokeWidth:2
});

player.add(playerBody);
//player.add(playerArrow);

layer.add(player);
layer.add(text);
layer.add(border);

stage.add(layer);
