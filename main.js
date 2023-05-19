function setup(){
    canvas = createCanvas(550,400);

    canvas.position(900, 245);

    video = createCapture(VIDEO);

    final_text_size = 0;

    raw_text_size = 0;

    left_wrist_x = 0;

    right_wrist_x = 0;

video.size(550, 400);

poseNet = ml5.poseNet(video, modelloaded); 

poseNet.on('pose', gotPoses);
}

function preload(){

}

function draw(){
background("lightyellow");
text("ANAY", 50, 200);
textSize(final_text_size);
fill("orange");
}

function modelloaded(){
    console.log("Posenet is Initialized");
}

function gotPoses(error, results){
    if(error){
        console.log(error);
    }

    else{
        console.log(results);
        right_wrist_x = results[0].pose.rightWrist.x;
        left_wrist_x = results[0].pose.leftWrist.x;

        raw_text_size = left_wrist_x - right_wrist_x;
        final_text_size = floor(raw_text_size);
        console.log(final_text_size);

    }
}