
class Ball{
  constructor(x, y, w, h, vx, vy,_color){
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.vx = vx;
    this.vy = vy;
    this.color = _color
  }

 draw() {
 fill(this.color)
 ellipse(this.x,this.y,50,50);
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    if(this.x > 500 || this.x < 0){
      this.vx = this.vx * -1;
    }

    if(this.y < 0 || this.y > 400){
      this.vy = this.vy * -1;
    }
  }
}

var ball1, ball2, ball3, ball4, ball5, ball6, ball7, ball8, ball9, ball10;

function setup() {
  createCanvas(500, 400)
  fill("grey");
  ball1 = new Ball(30,200,50,50,5,5,"black")
  ball2 = new Ball(30,200,50,50,65,5,"purple")
  ball3 = new Ball(30,200,50,50,2,6,"pink")
  ball4 = new Ball(30,100,50,50,0.5,2,"turqoise")
  ball5 = new Ball(30,200,50,50,4,2,"black")
  ball6 = new Ball(100,200,50,50,67,8,"blue")
  ball7 = new Ball(30,200,50,50,30,10,"green")
  ball8 = new Ball(30,200,40,50,40,5,"red")
  ball9 = new Ball(30,200,40,50,8,2,"yellow")
}

function draw() {
  background(255);
  ball1.draw();
  ball2.draw();
  ball3.draw();
  ball4.draw();
  ball5.draw();
  ball6.draw();
  ball7.draw();
  ball8.draw();
  ball9.draw();
}