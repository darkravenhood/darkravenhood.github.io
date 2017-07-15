// Initialize Firebase
var config = {
  apiKey: "AIzaSyAEe2FEkJZI2UgLVePIFZiuxvTKEbgo6B8",
  authDomain: "collaborative-sketch-e0dc3.firebaseapp.com",
  databaseURL: "https://collaborative-sketch-e0dc3.firebaseio.com",
  projectId: "collaborative-sketch-e0dc3",
  storageBucket: "",
  messagingSenderId: "527750033879"
};
firebase.initializeApp(config);

var pointsData = firebase.database().ref();
var points = [];

function setup() {

  var canvas = createCanvas(400, 400);
  background(255);
  fill(0);
  pointsData.on("child_added", function (point) {
    points.push(point.val());
  });
  canvas.mousePressed(drawPoint);
  canvas.mouseMoved(drawPointIfMousePressed);
}


function draw() { 
   background(255);

  for (var i = 0; i < points.length; i++) {
    var point = points[i];
    ellipse(point.x, point.y, 5, 5);
  }
}
function drawPoint() {
  pointsData.push({x: mouseX, y: mouseY});
}

function drawPointIfMousePressed() {
  if (mouseIsPressed) {
    drawPoint();
  }
}