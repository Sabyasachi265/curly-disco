music1 = "";
music2 = "";

leftwristX = 0;
leftwristY = 0;
rightwristX = 0;
rightwristY = 0;

function preload(){
    music1 = loadSound("music.mp3");
    music2 = loadSound("music1.mp3");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses)
}

function modelLoaded(){
    console.log("model loaded")
}

function gotPoses(results){
    if(results.length > 0){
        leftwristX = results[0].pose.leftWrist.x;
        leftwristY = results[0].pose.leftWrist.x;
        console.log("left wrist x = " + leftwristX);
        console.log("left wrist y = " + leftwristY);
        rightwristX = results[0].pose.rightWrist.x;
        rightwristY = results[0].pose.rightWrist.y;
        console.log("right wrist x = " + rightwristX);
        console.log("right wrist y = " + rightwristY);
    }
}

function draw(){
    image(video, 0, 0, 600, 500);
}