noseX=0;
noseY=0;
Xcordinate=0;
Ycordinate=0;
diffrence=0;
leftwristX=0;
rightwristX=0;


function setup(){

    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,550);
    canvas.posiition(560,150);

    poseNet=ml5.poseNet(video,modelloaded);
    pose.on('poses',gotposes);
}

function draw(){
    document.getElementById("Name_size").innerHTML="Naman"+diffrence+"px";
    background("#808080");
    textsize('text to be displayed',Xcordinate,Ycordinate,);
    fill("purple");
}

function modelloaded(){
    console.log('model is Initiliazed')
}

function gotposes(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("nosex="+noseX+"nosey="+noseY);
        leftwristX=results[0].pose.leftWrist.x;
        rightwristX=results[0].pose.rightWrist.x;
        diffrence=floor(leftwristX-rightwristX)
        console.log("rightwristX"+rightwristX+"leftwristX"+leftwristX+"diffrence"+diffrence);
        console.log("Xcordinate"+Xcordinate+"Ycordinate"+Ycordinate);
    }
}