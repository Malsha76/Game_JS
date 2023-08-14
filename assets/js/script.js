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

boy.src = "assets/images/png/Idle__000.png (" + idleImageNumber + ").png";
}


 function idleAnimationStart(){
     idleAnimationNumber = setInterval(idleAnimation,200);
 }