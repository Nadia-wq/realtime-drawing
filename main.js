nose_x=0;
nose_y=0;
difference=0;
left_wrist_x=0
right_wrist_x=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(500,500)
    canvas=createCanvas(500,400);
    canvas.position(550,170);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('posenet is initialised')
}
function gotPoses(results){
    if(results.length>0){
        console.log(results)
            nose_x=results[0].pose.nose.x;
            nose_y=results[0].pose.nose.y;
            left_wrist_x=results[0].pose.leftWrist.x;
            right_wrist_x=results[0].pose.rightWrist.x;
            difference=floor(left_wrist_x-right_wrist_x);
    }
}
function draw(){
    background('black');
    document.getElementById("square_side").innerHTML="width and height will be= "+difference+"px";
    fill('pink');
    stroke('pink');
    //textSize(difference);
    //text('Someone',nose_x,nose_y)
    //square(nose_x,nose_y,difference);
    circle(nose_x,nose_y,difference)
}