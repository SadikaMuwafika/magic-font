rwX = 0
lwX = 0
difference = 0
function setup(){
    canvas = createCanvas( 500,500)
    canvas.position(200,250)
    camera = createCapture(VIDEO)
    camera.size(300,400)
    camera.position(800,200)
    posenet = ml5.poseNet(camera,modelLoaded)
    posenet.on('pose',gotposes)
}
function draw(){
    background("azure")
    document.getElementById("pixy").innerHTML = "size of the font will be " + difference + " px"
    fill("lightblue")
    stroke("black")
    var mi = document.getElementById("mi").value 
    if(difference <= 130 ){
        textFont("Comic")
        textSize(difference)
    text(mi,50,200)
    }else if(difference > 130 && difference <= 170){
        textFont("Cursive")
        textSize(difference)
    text(mi,50,200)
    }else if(difference > 170 ){
        textFont("Fantasy")
        textSize(difference)
    text(mi,50,200)
    }
    
    
}
function modelLoaded(){
    console.log("model is loaded")
}
function gotposes(result){
    if(result.length > 0){
        //console.log(result)
        lwX = result[0].pose.leftWrist.x
        rwX = result[0].pose.rightWrist.x
        difference = floor(lwX - rwX)
    }
}
