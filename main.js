color="red"
width_of_line=1
var mouseevent="empty"

var lastposx,lastposy;
canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
canvas.addEventListener("mousedown",mymousedown)
function mymousedown(e) {
    mouseevent="mousedown"
    color=document.getElementById("color").value 
    width_of_line=document.getElementById("width").value 
}
canvas.addEventListener("mousemove",mymousemove)
function mymousemove(e) {
currentpositionofmousex=e.clientX-canvas.offsetLeft
currentpositionofmousey=e.clientY-canvas.offsetTop
if (mouseevent=="mousedown") {
    

ctx.beginPath()
ctx.strokeStyle=color
ctx.lineWidth=width_of_line
ctx.moveTo(lastposx,lastposy)
ctx.lineTo(currentpositionofmousex,currentpositionofmousey)
ctx.stroke()
}
lastposx=currentpositionofmousex
lastposy=currentpositionofmousey
}
canvas.addEventListener("mouseleave",mymouseleave)
function mymouseleave(e) {
    mouseevent="mouseleave"
}
canvas.addEventListener("mouseup",mymouseup)
function mymouseup(e) {
    mouseevent="mouseup"
}
function clearcanvas(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
}
