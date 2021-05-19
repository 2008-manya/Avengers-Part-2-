var canvas = new fabric.Canvas ("myCanvas");
player_x=10;
player_y=10;
block_image_width=30;
block_image_height=30;

var player_object="";
var block_image_object = "";

function player_update()
{
    fabric.Image.fromURL("player.png" , function(IMG){
player_object=IMG;
player_object.scaleToWidth(150);
player_object.scaleToHeight(140);
    player_object.set({
top:player_y,
left:player_x

    });
canvas.add(player_object);
    });
    
    
}

function new_image(get_image){
    fabric.Image.fromURL(get_image ,function(IMG){
        block_image_object=IMG;
    block_image_object.scaleToHeight(block_image_height);
    block_image_object.scaleToWidth(block_image_width);
    block_image_object.set({
        top:player_y,
        left:player_x
    });
    canvas.add(block_image_object);
   });
}

window.addEventListener("keydown" , my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode;
console.log(keyPressed);

if(e.shiftKey ==true&& keyPressed =="89")
{
    console.log("y & shift key pressed together");
    block_image_height=block_image_height+10;
    block_image_width=block_image_width+10;
document.getElementById("current_width").innerHTML=block_image_width;
document.getElementById("current_height").innerHTML=block_image_height;
}

if(e.shiftKey ==true&& keyPressed =="90")
{
    console.log("z & shift key pressed together");
    block_image_height=block_image_height-10;
    block_image_width=block_image_width-10;
document.getElementById("current_width").innerHTML=block_image_width;
document.getElementById("current_height").innerHTML=block_image_height;
}

if(keyPressed=="37"){
    left();
    console.log("left");
}

if(keyPressed=="38"){
    up();
    console.log("up");
}

if(keyPressed=="39"){
    right();
    console.log("right");
}

if(keyPressed=="40"){
    down();
    console.log("down");
}




if(keyPressed=="88"){
    new_image("hulk_body.png");
    console.log("x");
}

if(keyPressed=="66"){
    new_image("spiderman_legs.png");
    console.log("b");
}

if(keyPressed=="86"){
    new_image("hulk_face.png");
    console.log("v");
}

if(keyPressed=="70"){
    new_image("Ironman_face.png");
    console.log("f");
}

if(keyPressed=="76"){
    new_image("hulk_legs.png");
    console.log("l");
}

if(keyPressed=="82"){
    new_image("thor_right_hand.png");
    console.log("r");
}

if(keyPressed=="72"){
    new_image("captain_america_left_hand.png");
    console.log("h");
}


if(keyPressed=="78"){
    new_image("thor_face.png");
    console.log("n");
}

if(keyPressed=="79"){
    new_image("spiderman_right_hand.png");
    console.log("o");
}

if(keyPressed=="80"){
    new_image("ironman_right_hand.png");
    console.log("p");
}

if(keyPressed=="81"){
    new_image("spiderman_face.png");
    console.log("q");
}

if(keyPressed=="83"){
    new_image("thor_left_hand.png");
    console.log("s");
}

if(keyPressed=="84"){
    new_image("Ironman_body.png");
    console.log("t");
}

if(keyPressed=="85"){
    new_image("spiderman_body.png");
    console.log("u");
}

if(keyPressed=="87"){
    new_image("spiderman_left_hand.png");
    console.log("w");
}

if(keyPressed=="77"){
    new_image("hulk_right_hand.png");
    console.log("m");
}

if(keyPressed=="75"){
    new_image("hulk_left_hand.png");
    console.log("k");
}

if(keyPressed=="74"){
    new_image("Ironman_left_hand.png");
    console.log("j");
}

if(keyPressed=="73"){
    new_image("Ironman_legs.png");
    console.log("i");
}

if(keyPressed=="69"){
    new_image("Final_output.png");
    console.log("e");
}

}
