nosex=0;
nosey=0;
function preload(){
    imagelip=loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('PoseNet is Initialised');
} 
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x+20;
        nosey=results[0].pose.nose.y+20;
        console.log("nose x = "+nosex);
        console.log("nose y = "+nosey);
    }
}  

function draw(){
    image(video,0,0,300,300);
image(imagelip,nosex,nosey,40,30);
}
function takesnapshot(){
    save('Himani.png');
}