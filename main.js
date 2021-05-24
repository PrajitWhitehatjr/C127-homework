leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
song1="";
song2="";

function preload() {
    song1= loadSound("music.mp3");
    song2= loadSound("Spiderman.mp3");
}

function setup() {
    canvas=createCanvas(360,350);
    canvas.position(600,300)
    video=createCapture(VIDEO);
    video.hide();
    classifier=ml5.poseNet(video,modelLoaded);
    classifier.on('pose',gotResults);
}

function modelLoaded() {
    window.alert("Model is loaded!");
}

function draw() {
    image(video,0,0,360,350);
}

function gotResults(results) {
    if (results.length>0) {
       console.log(results) 
       leftWristX=results[0].pose.leftWrist.x;
       leftWristY=results[0].pose.leftWrist.y;
       rightWristX=results[0].pose.rightWrist.x;
       rightWristY=results[0].pose.rightWrist.y;
       console.log("left wrist x= "+leftWristX+" left wrist y= "+leftWristY+" right wrist x= "+rightWristX+" right wrist y= "+rightWristY);
    }
}
