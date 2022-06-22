leftWristx = 0;
rightWristx = 0;
difference = 0;


function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550, 450);
    canvas.position(560, 150);
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function draw(){
    background("#ff0303");
    textSize(difference);
    fill("white");
    text("Lalit kedar", 250, 250);
    document.getElementById("text_size").innerHTML = "Font Size Of The Text Is = " + difference + "Px";
}

function modelLoaded(){
    console.log("PoseNet Is Initialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristx = results[0].pose.leftWrist.x;
        rightWristx = results[0].pose.rightWrist.x;
        difference = floor(leftWristx - rightWristx);
    }
}