var b = 0;

function setup() {
	canvas = createCanvas(295, 295);
	canvas.parent("canvas");
}

function draw() {
	//background(255-mouseX,255-mouseY,255-b);
	background(150);
	for(var r = 0;r < 255; r+=20) {
		for(var g = 0;g < 255; g+=20) {
			fill(r, g, b);
			noStroke();
			rect(r, g, 20, 20);
		}
	}
	fill(mouseX, mouseY, b);
	rect(260, 260, 35, 35);
	for(var i = 0;i < 255;i += 10) {
		fill(0, 0, i);
		rect(260, i, 35, 10);
	}
	fill(0);
	rect(260, b-10, 35, 5);
	rect(constrain(mouseX,3,257)-3,constrain(mouseY,3,257)-3,6,6);
	textSize(15);
	text(constrain(round(mouseX),0,255) +"," + constrain(mouseY,0,255) + "," + constrain(b,0,255),10,280);
	if(mouseX >= 260 && mouseY <= 255 && mouseIsPressed && mouseX <= 295 && mouseY >= 0) {
		b = mouseY;
	}
}
