function setup() {
	createCanvas(800,600); 
}

function draw() {
	background(255, 204, 0);
	textSize(32);
	fill(255, 204, 0);
	text(hour(), 10, 30);
	fill(100);
	text(minute(), 10, 60);
	fill(0);
	text(second(), 10, 90);
	console.log(minute()); 
}
