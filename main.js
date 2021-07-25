song="";
leftwristX=0;
leftwristY=0;
rightwristX=0;
rightwristY=0;
scoreleftwrist=0;
function preload(){
    song=loadSound("music2.mp3");
}

function setup(){
    Canvas=createCanvas(500,600);
    Canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modelloaded);
    pose.on('pose',gotposes);
}

function draw(){
    image(video,0,0,500,600);
    fill("#ff0000");
    stroke("#ff0000");
    if(scoreleftwrist>0.2){


    circle(leftwristX,leftwristY,20);
    NumberleftwristY=Number(leftwristY);
    remove_decimal=floor(NumberleftwristY);
    volume=remove_decimal/500;
    document.getElementById("volume").innerHTML=volume;
    song.setvolume(volume);

    }
}

function modelloaded(){
    console.log('model is Initialised')
}

function play(){
    song.play();
    song.setvolume(1);
    song.rate(1);
    }

    function gotposes(reults){
        if(results.length>0){
            console.log(results);
scoreleftwrist=results[0].pose.keypoints[9].score;
console.log("scoreleftwrist="+scoreleftwrist);
            leftwristX=results[0].pose.leftWrist.x;
            leftwristY=results[0].pose.leftWrist.y;
            console.log("leftwristX="+leftwristX+",leftwristY="+leftwristY);

            rightwristX=results[0].pose.rightWrist.x;
            rightWristY=results[0].pose.rightWrist.y;
            console.log("rightwristY="+rightwristX+"rightwristY="+rightwristY);


        }
            
    }
    
    