function setup() {
createCanvas(windowWidth,windowHeight);
background(0);
frameRate(30);
}


function draw() {

  //variables
  var lato = width/50;
  var diametro = 320+ random(0,40);
  var R = random(255);
  var G = random(0);
  var B = random(255);

for(var x = 0; x < width; x += lato){
    for(var y = 0; y < height; y += lato){

//press to become a trapper - background color
if (mouseIsPressed) {
  //epilectic
  fill(R,G,B);
  //still epilectic but with the square grid
  //-->//fill (random(255),0,random(255));
} else {
  fill(random(255));
}

//the grid of squares is made of
rect(x,y,lato,lato);

//circle in the centre
ellipseMode(CENTER);
fill(255);
noStroke();
ellipse(width/2,height/2,diametro);

//text settings
textAlign(CENTER,CENTER);
textFont('georgia');
fill(R,G,B);
noStroke();
textSize(35);

//press to become a trapper - text
if (mouseIsPressed){
      text("RO$A LA",width/2, height/2-30);
      text("MIA $ODA",width/2, height/2+30);
    } else {

      //instructions on the pointer
      push();
      noStroke();
      textFont('georgia');
      fill(0);
      textSize(15);
      text("click to SKRT SKRT",mouseX+90, mouseY);
      pop();

      fill(0);
    text('DROG* / MODA', width/2, height/2);
  }

//press to become a trapper - background text
if (mouseIsPressed){
    fill(240,0,140);
    textSize(20);
    text ('SKRT',random(width), random(height));
    fill(255);
}

    }
  }
}
