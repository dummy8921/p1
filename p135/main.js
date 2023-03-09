video="";
status="";
function preload()
{
video=createVideo("video.mp4");
video.hide();

}
function setup()
{
canvas=createCanvas(380,380);
canvas.center();
}
function draw()
{
image(video,0,0,480,380);
}
function start()
{
objectDetector=ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML="status is detecting objects";
}
function modelLoaded()
{
console.log("modelLoaded");
status=true;
video.loop()
video.speed(1.5);
video.volume(0);
}