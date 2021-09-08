var x, y;

class Ball{
  constructor (x, y, vx, vy, w, h){
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.width = w;
    this.height = h;
  }

}

var ball1 = new Ball(0,0,5,4,40,40)

drawball(){
   
  ellipse(this.x,this.y,this.height,this.width);
    fill('red');
    this.x = this.x + this.x;
    this.y = this.y + this.y;
  
  if(this.x <= 25 || this.x > 475){
    this.vx = this.vx * -1;
  }

  if(this.y <= 25 || this.y > 375){
    this.vy = this.vy * -1;
  }
}

function setup() {
	createCanvas(500, 400);

  xe = 25;
  ye = 25;
  vxe = 1;
  vye = 2;
  xr = 0;
  yr = 0;
  vxr = 5;
  vyr = 3;
}

function draw() {
	background('black');
  
  ellipse(xe,ye,50,50);
    fill('red');
    xe = xe + vxe;
    ye = ye + vye;
  
  rect(xr,yr,50,50);
    fill('blue');
    xr = xr + vxr;
    yr = yr + vyr;


  if(xe <= 25 || xe > 475){
    vxe = -vxe;
  }

  if(ye <= 25 || ye > 375){
    vye = -vye;
  }
  
  if(xr <= 0 || xr > 450){
    vxr = -vxr;
  }

  if(yr <= 0 || yr > 350){
    vyr = -vyr;
  }
}
