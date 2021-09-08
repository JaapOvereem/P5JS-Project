var x, y;

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
