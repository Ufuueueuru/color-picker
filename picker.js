var b = 0;

function setup() {
	canvas = createCanvas(295, 295);
	canvas.parent("canvas");
}

function draw() {
	//background(255-mouseX,255-mouseY,255-b);
	background(150);
	for(var r = 0;r < 255; r+=8) {
		for(var g = 0;g < 255; g+=8) {
			fill(r, g, b);
			noStroke();
			rect(r, g, 8, 8);
		}
	}
	fill(mouseX, mouseY, b);
	rect(260, 260, 35, 35);
	for(var i = 0;i < 255;i += 8) {
		fill(0, 0, i);
		rect(260, i, 35, 8);
	}
	fill(0);
	rect(260, b-8, 35, 8);
	rect(constrain(mouseX,5,255)-5,constrain(mouseY,5,255)-5,5,5);
	textSize(15);
	text(constrain(mouseX,0,255) +"," + constrain(mouseY,0,255) + "," + constrain(b,0,255),10,280);
	if(mouseX >= 260 && mouseY <= 255 && mouseIsPressed && mouseX <= 295 && mouseY >= 0) {
		b = mouseY;
	}
}
