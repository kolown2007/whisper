
let sounds =[];
let myDiv;
let mic;
let vol;



function preload(){

 for (let i = 0; i<14; i++){
 sounds[i]=loadSound(`./assets/${i}.mp3`); 

  }
}


function setup() {

  createCanvas(windowWidth,windowHeight)
 mic =  new p5.AudioIn();

 mic.start();

  var myDiv = createDiv('click to start audio');
	
  myDiv.position(0, 0);
  var mySynth = new p5.MonoSynth();
  
  
	// This won't play until the context has started
	mySynth.play('A6');
  
	// click to start audio
	userStartAudio().then(function() {
    myDiv.remove();
    
  });


  fft = new p5.FFT(.8, 128);
  fft.setInput(mic);

}



function draw() {
  background(0)

  // vol = mic.getLevel();

  // var d = map(vol, 0, 1, 0, 10);


  // translate(d, 0, 0);
  // //normalMaterial();
  // stroke(255);
  // noFill()
  // push();
  // // rotateZ(frameCount*d);
  // // rotateX(frameCount*d);
  // rotateY(frameCount*.01);
  // sphere(250,6,5);

  // pop();

  const data = fft.analyze();

  for (let i = 0; i <25; i++) {
      const x = map(i, 0, 25, 0, windowWidth);
      const y = map(data[i], 0, 255, 190, 10);
      ellipse(x, y, 30, 30);
  }


}



function a(){

 random(sounds).play()
}


function keyPressed(){
  a();
}

///////


