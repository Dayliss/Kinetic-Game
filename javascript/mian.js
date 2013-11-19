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

var base = 30;

var playerBody = new Kinetic.Polygon({
  points: [[-base*9/8,0],[base*9/8,-base],[base*9/8,base]],
  fill: 'green',
  stroke: 'black',
  strokeWidth: 5
});

var text = new Kinetic.Text({
  x: 10,
  y: 10,
  fontFamily: 'Calibri',
  fontSize: 24,
  text: '',
  fill: 'black'
});

var border = new Kinetic.Rect({
  x: 0,
  y: 0,
  width: stage.getWidth(),
  height: stage.getHeight(),
  stroke: 'black',
  strokeWidth:2
});

player.add(playerBody);

layer.add(player);
layer.add(text);
layer.add(border);

stage.add(layer);
