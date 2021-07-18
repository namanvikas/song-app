song="";
function preload(){
    song=loadSound("music2.mp3");
}

function setup(){
    Canvas=createCanvas(500,600);
    Canvas.center();

    video=createCapture(VIDEO);
    video.hise();
}

function draw()[
    image(video,0,0,500,600);
]

function play(){
    song.play();
}