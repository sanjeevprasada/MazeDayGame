var canvas = document.getElementById("layer2");
var context;
var canv = document.getElementById('map');
var ctx = canv.getContext('2d');
var gx = 475;
var gy = 475;
var g2x = 175;
var g2y = 475;
var g2mx = 10;
var g2my = 4;
var gmy = 4;
var ddx = 520;
var ddy = 485;
var action = false;
var ddmvx = 0;
var ddmyx = 0;
var intrvlID = 0;
var pan = 0.0;
var pI = 0.1;
var steps = new Howl({
		src: ['footsteps2.mp3'],
		html5: true,
		loop: true,
		volume: 1.0, 
		sprite: {
			walk: [0,6000]
		}
	});

function init(){
	context = canvas.getContext("2d");
	map();
	intrvlID = setInterval(draw,100);
}
function dareD(){
	context.beginPath();
	context.rect(ddx,ddy,10,10);
	context.fillStyle = 'blue';
	context.fill();
	context.closePath();
}
function guard(x,y){
	context.beginPath();
	context.rect(x,y,10,10);
	context.fillStyle = 'red';
	context.fill();
	context.closePath();
}

function guard2(x,y){ //guard2 is a circle
	context.beginPath();
	var radius = 5;
	context.arc(x,y, radius, 0, 2*Math.PI, false);
	context.fillStyle = 'red';
	context.fill();
	context.closePath();
}
function map(){
  ctx.beginPath();
  ctx.moveTo(100,100);
  ctx.lineTo(500,100);
  ctx.lineTo(500,500);
  ctx.lineTo(100,500);
  ctx.lineTo(100,100);
  ctx.moveTo(500,500);

  
  ctx.lineTo(505,500); //stairs setup
  ctx.lineTo(505,470);
  ctx.moveTo(510,470);
  ctx.lineTo(510,500);
  ctx.moveTo(515,470);
  ctx.lineTo(515, 500);
  ctx.moveTo(520, 470);
  ctx.lineTo(520, 500);
  ctx.moveTo(525, 470);
  ctx.lineTo(525, 500);
  ctx.lineTo(500,500);
  ctx.moveTo(525, 470);
  ctx.lineTo(500,470);


  /*ctx.lineTo(400,50);
  ctx.lineTo(400,100);
  ctx.lineTo(500,100);
  ctx.lineTo(500,50);

  ctx.moveTo(100,150);
  ctx.lineTo(200,150);
  ctx.lineTo(200,200);
  ctx.lineTo(400,200);
  ctx.lineTo(400,150);
  ctx.lineTo(550,150);
  ctx.lineTo(550,50);
  ctx.lineTo(500,50);

  ctx.moveTo(100,100);
  ctx.lineTo(100,150);
  */

  ctx.stroke();
  ctx.closePath();  
}

function onKeyDown(e){
	if (e.keyCode == 32){
		action = true;
	}
}
function onKeyUp(e){
	if (e.keyCode == 32) {
		action = false;
	}
}
$(document).keydown(onKeyDown);
$(document).keyup(onKeyUp);

function clear(){
	context.clearRect(0,0,canvas.width,canvas.height);
}
function footsteps(){
	
}

function draw(){
	clear();
	guard(gx,gy);
	guard2(g2x, g2y);
	dareD();
	context.strokeText("Chancellor Office", 100, 150);
	if (action && ddx == 520){
		//play a sound when dareD actually starts moving
		if(gy < 420 || g2x > 200){
			ddmvx = -20;
			//ddmyx = -10;
		}else{
			clearInterval(intrvlID);
			alert('Game Over. The guard spotted you');
			steps.stop();
		}	
	} else if (action && ddx < 150){
		//play a sound when dareD actually starts moving
		ddmyx = -20;
	}
	if( gy + gmy < 250 || gy + gmy > 500 ){
		gmy = gmy * -1;
		pI = -pI;
	}

	if (g2y + g2my > 500 || g2y + g2my < 0){
		g2my = g2my * -1;
	}
	if(ddx+ddmvx <= 120) {
		//clearInterval(intrvlID);
		ddmvx = 0;
		//steps.stop();
	}

	if(ddy + ddmyx <100){
		ddmyx = 0;
	}
	pan += pI;
	steps.stereo(-1.0,id);
	ddx += ddmvx;
	ddy += ddmyx;
	gy += gmy;
	g2y += g2my;
}
var id = steps.play('walk');
init();


