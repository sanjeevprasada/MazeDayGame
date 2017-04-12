var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");



var canv = document.getElementById("layer2");
var context = canv.getContext("2d");
context.beginPath();
context.moveTo(650, 170);
context.lineTo(650, 210);
context.strokeStyle = "#FF0000";
context.stroke();

function draw() {
    ctx.beginPath();
    ctx.arc(650, 350, 200, 0*Math.PI, 2*Math.PI);
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.closePath();


    ctx.beginPath();
    ctx.arc(650, 350, 180, 0*Math.PI, 2*Math.PI);
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(650, 170);
    ctx.lineTo(640, 150);
    ctx.lineTo(660, 150);
    ctx.stroke();
    ctx.fill();

    ctx.moveTo(650, 150);
    ctx.lineTo(650, 210); //lock gridline 0
    ctx.stroke();

    ctx.moveTo(830,350);
    ctx.lineTo(790, 350); //lock gridline 10
    ctx.stroke();

    ctx.moveTo(650, 530);
    ctx.lineTo(650, 490); //lock gridline 20
    ctx.stroke();

    ctx.moveTo(470, 350);
    ctx.lineTo(510, 350); //lock gridline 30
    ctx.stroke();

    ctx.moveTo(777, 225);
    ctx.lineTo(747, 255); //lock gridline 5
    ctx.stroke();

    ctx.moveTo(777, 475);
    ctx.lineTo(747, 445); //lock gridline 15
    ctx.stroke();

    ctx.moveTo(523, 475);
    ctx.lineTo(553, 445); //lock gridline 25
    ctx.stroke();

    ctx.moveTo(523, 225);
    ctx.lineTo(553, 255); //lock gridline 35
    ctx.stroke();


    //drawing major gridlines 0,5,10,15,20,25,30,35
    ctx.font = "24px serif";
    ctx.textAlign = "center";
    ctx.strokeText("0", 650, 230);
    ctx.strokeText("5", 737, 270);
    ctx.strokeText("10", 770, 358);
    ctx.strokeText("15", 740, 440);
    ctx.strokeText("20", 650, 485);
    ctx.strokeText("25", 565, 440);
    ctx.strokeText("30", 525, 358);
    ctx.strokeText("35", 564, 270);
}
draw();

//function onKeyDown(e){
//    if (e.keyCode == 38){
//        action = false;
//    }
//}
//function onKeyUp(e){
//    if (e.keyCode == 38) {
//        action = true;
//        currentEndAngle += 0.05
//   }
//}$(document).keydown(onKeyDown);
//$(document).keyup(onKeyUp);