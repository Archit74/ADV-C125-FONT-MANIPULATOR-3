difference = 0;
right_wrist_x = 0;
left_wrist_x = 0

function setup()
{
canvas = createCanvas(500, 500);
canvas.position(800, 140);
video = createCapture(VIDEO);
video.size(500, 500)
posenet = ml5.poseNet(video, modelloaded)
posenet.on('pose', gotPoses);
}

function modelloaded() 
{
    console.log("posenet is initialised");
}

function gotPoses(error, results) 
{
    if(error)
    {
        console.log(error);
    }
    else if(results.lenght>0)
    {
console.log(results);
right_wrist_x = results[0].pose.rightWrist.x ;
left_wrist_x  = results[0].pose.leftWrist.x ;
difference = Math.floor(left_wrist_x - right_wrist_x);
    }
}