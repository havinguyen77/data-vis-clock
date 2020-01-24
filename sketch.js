function setup() {
	createCanvas(windowWidth,800);
	noCursor(); 
}

function draw() {

  background(0,1,3,25); 
	fill(34,84,56);
    circle(windowWidth/2, 400, 200);
    
    var sec = second(); 
    var min = minute(); 
    var hr = hour(); 
  
    radio(sec); 
    bolt(min); 
    ship(hr); 

  var galaxy = { 
  locationX : random(width*2.5),
  locationY : random(height*2.5),
  size : random(1,5)
}
  ellipse(galaxy.locationX -500 ,galaxy.locationY -500, galaxy.size, galaxy.size);
  ellipse(galaxy.locationX ,galaxy.locationY, galaxy.size, galaxy.size);


}

function radio(sec){
  push(); 
  translate(width/2, height/2);
  for (i = 0; i < sec; i++) {
    rotate(radians(6)); 
    noStroke(); 
    fill(77, 83, 89); 
    rect(0, -270, 5, 50); 
  }
  pop(); 
}

function bolt(min){
  push(); 
  translate(width/2, height/2); 
  for (i = 0; i < min; i++){
      fill(74, 66, 56);
      rotate(radians(70));
      triangle(10 +i, 15+i, 38+i, 20+i, 76+i, 65+i)
  }
  pop();
  
}

function ship(hr){ 
  translate(width/2, height/2); 
  var angle = radians(hr*15-360);
  rotate(angle);
  rotate(radians());
  fill(223, 210, 198); 
  noStroke(); 
  rect(angle, -310, 35, 20);
   
}

