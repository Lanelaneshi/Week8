//STEP 4. SOCKET CONNECTION
let socket = io();

//Connect socket client
socket.on('connect', () =>{
    console.log('Connected');
});

//STEP 8. Listen for data form the server
socket.on('data', (data) =>{
    console.log(data);

    //draw with data coming in
   drawObj(data);
});


//p5 code
function setup(){
    createCanvas(windowWidth, windowHeight);
    background(255);

    //assign random values
    r = random(224);
    g = random(170);
    b = random(210);
    size = random(92);
}

function mouseMoved(){
    // fill(0);
    // ellipse(mouseX, mouseY, 10);


    let mousePos = {
        x: mouseX,
        y: mouseY,
        r: r,
        g: g,
        b: b,
        size: size

    }


//STEP5. EMIT DATA TO THE SERVER
socket.emit('data', mousePos);
}

function drawObj(obj){
   
    fill(obj.r, obj.g, obj.b,);
    stroke('rgb(255,255,189)');
    strokeWeight(random(1,15));
    ellipse(obj.x, obj.y, obj.size);

}