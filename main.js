function setup(){

    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,550);
    canvas.posiition(560,150);

    poseNet=ml5.poseNet(video,modelloaded);
    pose.on('poses'gotposes);
}

function draw(){
    background("#808080");
}

function modelloaded(){
    console.log(model is Initiliazed');
}

function gotposes(results){
    if(results.length>0){
        console.log(results)
    }
}