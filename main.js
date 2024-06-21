function preload() {}

function setup() {
  canvas = createCanvas(640, 500);
  canvas.position(400, 210);
  background(200);
  video = createCapture(VIDEO);
  video.hide();
  tint_color = "";
}

function draw() {
  image(video, 50, 60, 540, 380);
  fill("lightgreen");
  rect(20, 20, 600, 20);
  rect(20, 20, 20, 440);
  rect(600, 20, 20, 440);
  rect(20, 460, 600, 20);
  fill("darkgreen")
  rect(15, 15, 70, 70,   5, 5, 20, 5);
  rect(15, 415, 70, 70,   5, 20, 5, 5);
  rect(555, 15, 70, 70,   5, 5, 5, 20);
  rect(555, 415, 70, 70,   20, 5, 5, 5);
}

function take_snapshot() {
  save("student_name.png");
}
