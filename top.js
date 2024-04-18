
let wawe0;
let wawe1;
let wawe2;
let wawe3;
function preload() {
  sand = loadImage('./imgs/sand1.png');
  little_tree = loadImage('./imgs/little_tree.png');
}

function setup() {
  createCanvas(500, 500);
  frameRate(20);
  background(220);
  image(sand, 0, 0);
  image(little_tree, 80, 350);
  image(little_tree, 400, 355);
  // let shade = 0;
  // let tide = 0;
  // wawe0 = new Wave(500,shade,200,tide);
  // wawe0.appear(0);
}

let x = -30;

function draw() {
  // background(220);
  shade = random(0,150);
  tide = random(-100,100);
  wawe1 = new Wave(1,shade,50,tide);
  wawe1.appear(x);
  shade = random(0,100);
  tide = random(-100,100);
  wawe2 = new Wave(2,shade,70,tide);
  wawe2.appear(x+40);
  shade = random(0,100);
  tide = random(-100,100);
  wawe3 = new Wave(4,shade,100,tide);
  wawe3.appear(x+70);
  x=x+7;
  if (x>500){
    x=-30;
    clear();
    setup();
    clearInterval()
  }
}



class Wave{
  constructor(size,shade,transparency,tide){
    this.transparency = transparency;
    this.shade = shade;
    this.pixelSize = 5*size+15+random(-15,15);
    this.tide = tide;
  }
  appear(position){
    noStroke();
    fill(100, 100, 150+this.shade,this.transparency)
    rect(position, 0, this.pixelSize, 250+this.tide);
  }
  TellSize(){
    return this.pixelSize;
  }
  garbagePlay(){

  }
}



