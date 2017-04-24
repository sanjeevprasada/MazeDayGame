var canvas = document.getElementById("layer2");
var ctx = canvas.getContext("2d");



var canv = document.getElementById("layer1");
var context = canv.getContext("2d");

function drawMinorGridlines() {
    context.beginPath();
    context.moveTo(650, 170); //testing indicator gridline (black)
    context.lineTo(650, 210);
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();

    var diameter = 360;
    var radius = diameter/2;
    var ticks = 40;
    var tickAngle = 360/ticks;

    context.beginPath();
    context.moveTo(678.15, 172.22); //1
    context.lineTo(675.02, 191.97);
    context.stroke();

    context.moveTo(705.62, 178.81); //2
    context.lineTo(699.44, 197.83);
    context.stroke();

    context.moveTo(731.72, 189.62); //3
    context.lineTo(722.64, 207.44);
    context.stroke();

    context.moveTo(755.80, 204.38); //4
    context.lineTo(744.05, 220.56);
    context.stroke();

    context.moveTo(777.28, 222.72); //5
    context.lineTo(763.14, 236.86);
    context.stroke();

    context.moveTo(795.62, 244.20); //6
    context.lineTo(779.44, 255.95);
    context.stroke();

    context.moveTo(810.38, 268.28); //7
    context.lineTo(792.56, 277.36);
    context.stroke();

    context.moveTo(821.19, 294.38); //8
    context.lineTo(802.17, 300.56);
    context.stroke();

    context.moveTo(827.78, 321.84); //9
    context.lineTo(808.03, 324.97);
    context.stroke();

    context.moveTo(830, 350); //10
    context.lineTo(810, 350);
    context.stroke();

    context.moveTo(827.78, 378.16); //11
    context.lineTo(808.03, 375.03);
    context.stroke();

    context.moveTo(821.19, 405.62); //12
    context.lineTo(802.17, 399.44);
    context.stroke();

    context.moveTo(810.38, 431.72); //13
    context.lineTo(792.56, 422.64);
    context.stroke();

    context.moveTo(795.62, 455.80); //14
    context.lineTo(779.44, 444.05);
    context.stroke();

    context.moveTo(777.28, 477.28); //15
    context.lineTo(763.14, 463.14);
    context.stroke();

    context.moveTo(755.80, 495.62); //16
    context.lineTo(744.05, 479.44);
    context.stroke();

    context.moveTo(731.72, 510.38); //17
    context.lineTo(722.64, 492.56);
    context.stroke();

    context.moveTo(705.62, 521.19); //18
    context.lineTo(699.44, 502.17);
    context.stroke();

    context.moveTo(678.16, 527.78); //19
    context.lineTo(675.03, 508.03);
    context.stroke();

    context.moveTo(650, 530); //20
    context.lineTo(650, 510);
    context.stroke();

    context.moveTo(621.84, 527.78); //21
    context.lineTo(624.97, 508.03);
    context.stroke();

    context.moveTo(594.38, 521.19); //22
    context.lineTo(600.56, 502.17);
    context.stroke();

    context.moveTo(568.28, 510.38); //23
    context.lineTo(577.36, 492.56);
    context.stroke();

    context.moveTo(544.20, 495.62); //24
    context.lineTo(555.95, 479.44);
    context.stroke();

    context.moveTo(522.72, 477.28); //25
    context.lineTo(536.86, 463.14);
    context.stroke();

    context.moveTo(504.38, 455.80); //26
    context.lineTo(520.56, 444.05);
    context.stroke();

    context.moveTo(489.62, 431.72); //27
    context.lineTo(507.44, 422.64);
    context.stroke();

    context.moveTo(478.81, 405.62); //28
    context.lineTo(497.83, 399.44);
    context.stroke();

    context.moveTo(472.22, 378.16); //29
    context.lineTo(491.97, 375.03);
    context.stroke();

    context.moveTo(470, 350); //30
    context.lineTo(490, 350);
    context.stroke();

    context.moveTo(472.22, 321.84); //31
    context.lineTo(491.97, 324.97);
    context.stroke();

    context.moveTo(478.81, 294.38); //32
    context.lineTo(497.83, 300.56);
    context.stroke();

    context.moveTo(489.62, 268.28); //33
    context.lineTo(507.44, 277.36);
    context.stroke();

    context.moveTo(504.38, 244.20); //34
    context.lineTo(520.56, 255.95);
    context.stroke();

    context.moveTo(522.72, 222.72); //35
    context.lineTo(536.86, 236.86);
    context.stroke();

    context.moveTo(544.20, 204.38); //36
    context.lineTo(555.95, 220.56);
    context.stroke();

    context.moveTo(568.28, 189.62); //37
    context.lineTo(577.36, 207.44);
    context.stroke();

    context.moveTo(594.38, 178.81); //38
    context.lineTo(600.56, 197.83);
    context.stroke();

    context.moveTo(621.84, 172.22); //39
    context.lineTo(624.97, 191.97);
    context.stroke();

    





}
drawMinorGridlines();



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
    ctx.moveTo(650, 170); //indicator triangle
    ctx.lineTo(640, 150);
    ctx.lineTo(660, 150);
    ctx.stroke();
    ctx.fill();

    ctx.moveTo(650, 150);
    ctx.lineTo(650, 210); //lock major tickmark 0
    ctx.stroke();

    ctx.moveTo(830,350);
    ctx.lineTo(790, 350); //lock major tickmark 10
    ctx.stroke();

    ctx.moveTo(650, 530);
    ctx.lineTo(650, 490); //lock major tickmark 20
    ctx.stroke();

    ctx.moveTo(470, 350);
    ctx.lineTo(510, 350); //lock major tickmark 30
    ctx.stroke();

    ctx.moveTo(777, 223);
    ctx.lineTo(747, 255); //lock major tickmark 5
    ctx.stroke();

    ctx.moveTo(777, 475);
    ctx.lineTo(747, 445); //lock major tickmark 15
    ctx.stroke();

    ctx.moveTo(523, 475);
    ctx.lineTo(553, 445); //lock major tickmark 25
    ctx.stroke();

    ctx.moveTo(523, 223);
    ctx.lineTo(553, 255); //lock major tickmark 35
    ctx.stroke();

    //drawing numerical indicators for major gridlines
    //0,5,10,15,20,25,30,35 numbers around the lock
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