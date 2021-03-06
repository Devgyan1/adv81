var canvas=document.getElementById("cnvs");
var ctx=canvas.getContext("2d");
color="blue";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(400, 300, 50, 0, 2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", md);
function md(e){
    color=document.getElementById("color").value;
    console.log(color);
    var mousex=e.clientX - canvas.offsetLeft;
    var mousey=e.clientY - canvas.offsetTop;
    console.log("x =" + mousex + ",y =" + mousey);
    circle(mousex, mousey);
}

function circle(mousex, mousey){
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=8;
ctx.arc(mousex, mousey, 50, 0, 2*Math.PI);
ctx.stroke();
}

function clear(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}