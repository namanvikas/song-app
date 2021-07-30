song="";
leftwristX=0;
leftwristY=0;
rightwristX=0;
rightwristY=0;
scoreleftwrist=0;
scorerightwrist=0
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
    circle(rightwristX,rightwristY,20);
    if(rightwristY>0 && rightwristY<=100){
        document.getElementById("speed").innerHTML="speed:0.5x";
        song.rate(0.5);
    }
    else if(rightwristY>100 && rightwristY<=200){
        document.getElementById("speed").innerHTML="speed:1x";
        song.rate(1);
    }

    else if(rightwristY>200 && rightwristY<=300){
        document.getElementById("speed").innerHTML="speed:1.5x";
        song.rate(1.5);
    }
    else if(rightwristY>300 && rightwristY<=400){
        document.getElementById("speed").innerHTML="speed:2x";
        song.rate(2);
    }
    else if(rightwristY>400 && rightwristY<=500){
        document.getElementById("speed").innerHTML="speed:2.5x";
        song.rate(2.5);
    }
}
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
scorerightwrist=results[0].pose.keypoints[10].score;
console.log("scoreleftwrist="+scoreleftwrist+"scorerightwrist="+scorerightwrist);
            leftwristX=results[0].pose.leftWrist.x;
            leftwristY=results[0].pose.leftWrist.y;
            console.log("leftwristX="+leftwristX+",leftwristY="+leftwristY);

            rightwristX=results[0].pose.rightWrist.x;
            rightWristY=results[0].pose.rightWrist.y;
            console.log("rightwristY="+rightwristX+"rightwristY="+rightwristY);


        }
            
    }
    
    