/**
 * @author: Malsha Ekanayake
 **/

var boy = document.getElementById("boy");/*boy kiyl variable ekkin store krgtta*/
 idleImageNumber=0;
 idleAnimationNumber=0;

function idleAnimation(){


     idleImageNumber = idleImageNumber +1;

     if (idleImageNumber == 10){
         idleImageNumber = 1;
     }

boy.src = "assets/images/png/idle_("+ idleImageNumber +").png";
}


function idleAnimationStart(){
     idleAnimationNumber = setInterval(idleAnimation,200);
 }
runImageNumber =0;
runAnimationNumber = 0;

function runAnimation(){

    runImageNumber = runImageNumber + 1;

    if (runImageNumber == 11) {
        runImageNumber = 1;
    }

    boy.src = "assets/images/png/Run (" + runImageNumber + ").png";
}

function runAnimationStart(){
    runAnimationNumber = setInterval(runAnimation,100);
    clearInterval(idleAnimationNumber);

}

function keyCheck(event){
    // alert(event.which);
    // enter = 13

    var keyCode = event.which;
    if (keyCode == 13){
        if(runAnimationStart ==0){

            runAnimationStart();

        }
    }

    if(moveBackgroundAnimationId == 0){
        moveBackgroundAnimationId = setInterval(moveBackground,100);

    }
}

var backgroundImagePositionX = 0;
var moveBackgroundAnimationId = 0;


function moveBackground(){

    backgroundImagePositionX = backgroundImagePositionX - 20;

    document.getElementById("background").style.backgroundPositionX = backgroundImagePositionX + "px";

}