let myCanvas = document.getElementById("circleCanvas");
let ctx = myCanvas.getContext("2d");
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;
       

class Circle {
    constructor(x, y, r, startAngle, endAngle, fillColor){
        this.x = x;
        this.y = y;
        this.r = r;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.fillColor = fillColor;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.r,this.startAngle,this.endAngle );
        ctx.fillStyle = this.fillColor;
        ctx.fill();
    }
}

//function to generate random horizontal coordinate
function randomX (){ 
return Math.floor(Math.random()*window.innerWidth);
} 

//function to generate random vertical coordinate
function randomY (){
    return Math.floor(Math.random()*window.innerHeight); 
} 

//function to generate random radius
function randomR (){
    return Math.floor(Math.random()*50)
}

//function to generate random color
function randomColor (){
    let color="#" + Math.floor(Math.random()*1000000);
    return color;
} 

let x
let y
setInterval(()=>{
const c1 = new Circle(randomX(), randomY(), randomR(), 0, 2 * Math.PI, randomColor());
c1.draw();

// gets cusor position and draws a circle around it
document.onmousemove = function(e){
        x = e.pageX;
        y = e.pageY;
    }
    const c2 = new Circle(x, y, randomR(), 0, 2 * Math.PI, randomColor());
    c2.draw();
},500)
