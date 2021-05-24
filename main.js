song1="";
song2="";

function preload() {
    song1= loadSound("music.mp3");
    song2= loadSound();
}

function setup() {
    canvas=createCanvas(360,350);
    canvas.position(600,300)
    video=createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video,0,0,360,350);
}
