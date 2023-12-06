// /**
//  * @author: Malsha Ekanayake
//  **/
//
// var boy = document.getElementById("boy");/*boy kiyl variable ekkin store krgtta*/
//  idleImageNumber=1;
//  idleAnimationNumber=0;
//
// function idleAnimation(){
//
//
//      idleImageNumber = idleImageNumber +1;
//
//      if (idleImageNumber == 11){
//          idleImageNumber = 1;
//      }
//
// boy.src = "assets/images/png/idle ("+ idleImageNumber +").png";
// }
//
//
// function idleAnimationStart(){
//      idleAnimationNumber = setInterval(idleAnimation,200);
//  }
// runImageNumber =1;
// runAnimationNumber = 0;
//
// function runAnimation(){
//
//     runImageNumber = runImageNumber + 1;
//
//     if (runImageNumber == 11) {
//         runImageNumber = 1;
//     }
//
//     boy.src = "assets/images/png/Run ("+ runImageNumber +").png";
// }
//
// function runAnimationStart(){
//     runAnimationNumber = setInterval(runAnimation,100);
//     clearInterval(idleAnimationNumber);
//
// }
//
//  // --------------jump animation-----------------
//
// jumpImageNumber =1;
// jumpAnimationNumber = 0;
// boyMarginTop = 347;
//
// function jumpAnimation(){
//
//     jumpImageNumber = jumpImageNumber +1;
//
//     if(jumpImageNumber <= 6){
//         boyMarginTop = boyMarginTop -35;
//         boy.style.marginTop = boyMarginTop + "px";
//     }
//
//     if(jumpImageNumber >= 7){
//         boyMarginTop = boyMarginTop + 35;
//         boy.style.marginTop = boyMarginTop + "px";
//     }
//
//     if(jumpImageNumber == 11){
//         jumpImageNumber =1;
//         clearInterval(jumpAnimationNumber);
//         jumpAnimationNumber = 0;
//         runImageNumber = 0;
//         runAnimationStart()
//     }
//
//     boy.src = "assets/images/png/Jump ("+ jumpImageNumber +").png";
//
// }
//
// function jumpAnimationStart(){
//     clearInterval(idleAnimationNumber);
//     runImageNumber =0;
//     clearInterval(runAnimationNumber);
//   jumpAnimationNumber  = setInterval(jumpAnimation,100);
// }
// // --------------------------
//
//
// function keyCheck(event) {
//     // alert(event.which);
//     // enter = 13
//     // space =32
//
//     var keyCode = event.which;
//     if (keyCode == 13) {
//         if (runAnimationStart == 0) {
//
//             runAnimationStart();
//
//         }
//
//
//         if (moveBackgroundAnimationId == 0) {
//             moveBackgroundAnimationId = setInterval(moveBackground, 100);
//
//         }
//
//         // dragon
//
//         if(boxAnimationId==0){
//             boxAnimationId = setInterval(boxAnimation,100);
//
//         }
//
//
//
//         //--------------
//     }
//
//     if (keyCode ==32){
//         if(jumpAnimationNumber ==0){
//             jumpAnimationStart();
//         }
//
//         if (moveBackgroundAnimationId == 0) {
//             moveBackgroundAnimationId = setInterval(moveBackground, 100);
//
//         }
//
//
//
//         if(boxAnimationId==0){
//             boxAnimationId = setInterval(boxAnimation,100);
//
//         }
//
//
//     }
// }
// var backgroundImagePositionX = 0;
// var moveBackgroundAnimationId = 0;
//
// //-----------------score-----------------------
//
// var score =0;
//
// // ---------------------
//
// function moveBackground(){
//
//     backgroundImagePositionX = backgroundImagePositionX - 20;
//
//     document.getElementById("background").style.backgroundPositionX = backgroundImagePositionX + "px";
//
//
//     score = score +1;  // score
//     document.getElementById("score").innerHTML = score;
//
// }
//
// // ---------------obstacles----------------
//
// boxMarginLeft = 1540;
//
// function createBoxes() {
//
//     for (var i = 0; i <= 10; i++) {
//
//         var box = document.createElement("div");
//         box.className = "box";
//         document.getElementById("background").appendChild(box);
//         box.style.marginLeft = boxMarginLeft + "px";
//         box.id = "box" + i;
//
//         // boxMarginLeft = boxMarginLeft + 500;
//
//         if( i < 5){
//             boxMarginLeft = boxMarginLeft + 2000;
//         }
//         if( i >= 5){
//             boxMarginLeft = boxMarginLeft + 1000;
//         }
//     }
// }
//
//     var boxAnimationId = 0;
//
//
//     function boxAnimation(){
//         for (var i = 0; i<10; i++){
//             var box = document.getElementById("box"+i);
//             var currentMarginLeft = getComputedStyle(box).marginLeft;
//             var newMarginLeft = parseInt(currentMarginLeft) - 25;
//             box.style.marginLeft = newMarginLeft + "px";
//
//             // ------------------------ block
//             if (newMarginLeft >= -110 & newMarginLeft <= -100){
//                 if(boyMarginTop > 300) {
//                     clearInterval(boxAnimationId);
//
//                     clearInterval(runAnimationNumber);
//                     runAnimationNumber = -1;
//
//                     clearInterval(jumpAnimationNumber);
//                     jumpAnimationNumber = -1;
//
//                     clearInterval(moveBackgroundAnimationId);
//                     moveBackgroundAnimationId = -1;
//
//       deadAnimationNumber = setInterval(boyDeadAnimation,100); //dead
//                 }
//             }
//
//         }
//     }
//
//     // --------------dead------------------
//
//    deadImageNumber=1;
//     deadAnimationNumber=0;
//
//
// function boyDeadAnimation(){
//         deadImageNumber = deadImageNumber + 1;
//
//     if (deadImageNumber == 11) {
//         deadImageNumber = 10;
//
//         document.getElementById("end").style.visibility = "vidible";
//         document.getElementById("endScore").innerHTML = score;
//     }
//
//         boy.src = "assets/images/png/Dead ("+ deadImageNumber +").png";
//
//
// }
//
// // ------------end---------------
// //  function reload(){
// //     location.reload();
// //  }
// //


// --------------------------------------

$(document).ready(function () {
    idleAnimationStart();
    createBarrier();
    hideComponents();
    removeBlur();
});

let backgroundMusic = new Audio();
backgroundMusic.src = "../assets/audio/happy-sun.mp3";
backgroundMusic.play().then(r => {
    backgroundMusic.loop = true;
});


let jumpTrack = new Audio();
jumpTrack.src = "../assets/audio/cartoon-jump-6462.mp3";

let deadTrack = new Audio();
deadTrack.src = "../assets/audio/welcome-to-hell-103646.mp3";

let flyTrack = new Audio();
flyTrack.src = "../assets/audio/swing-whoosh-110410.mp3";

let winnerTrack = new Audio();
winnerTrack.src = "../assets/audio/winner.mp3";

let gameOverTrack = new Audio();
gameOverTrack.src = "../assets/audio/GameOver.wav";

/***
 * Start Idle Animation
 * */
let idleImageNumber = 1;
let idleAnimationNumber = 0;

function idleAnimation() {
    idleImageNumber++;
    if (idleImageNumber === 11) {
        idleImageNumber = 1;
    }
    $("#girl").attr("src", "../assets/images/png/Idle " + idleImageNumber + ".png");


    // boy.src = "assets/images/png/idle ("+ idleImageNumber +").png";
}

function idleAnimationStart() {
    idleAnimationNumber = setInterval(idleAnimation, 200);
    flyTrack.pause();
    // backgroundMusic.play();
}

/***
 * End  Idle Animation
 * */

/***
 * Start Run Animation
 * */

let runImageNumber = 1;
let runAnimationNumber = 0;

function runAnimation() {
    runImageNumber++;
    if (runImageNumber === 11) {
        runImageNumber = 1;
    }
    $("#girl").attr("src", "../assets/images/png/Run " + runImageNumber + ".png");


}

function runAnimationStart() {
    runAnimationNumber = setInterval(runAnimation, 100);
    clearInterval(idleAnimationNumber);
    flyTrack.pause();
    backgroundMusic.play();
}

/***
 * End Run Animation
 * */

/***
 * Start Move Background
 * */
let backgroundImagePositionX = 0;
let moveBackgroundAnimationId = 0;
let score = 0;

function moveBackground() {
    backgroundImagePositionX = backgroundImagePositionX - 20;
    $("#moveBackground").css("background-position-x", +backgroundImagePositionX + "px");
    score++;
    $("#score").text(score);
    flyTrack.loop;
    if (score >= 320) {
        winResults();
    }
}

/***
 * End Move Background
 * */

/***
 * Start Jump Animation
 * */

let jumpImageNumber = 1;
let jumpAnimationNumber = 0;
let girlMarginTop = 180;

function jumpAnimation() {
    jumpImageNumber++;
    if (jumpImageNumber <= 5) {
        girlMarginTop = girlMarginTop - 60;
        $("#girl").css("top", "" + girlMarginTop + "px");
    }
    if (jumpImageNumber >= 7) {
        girlMarginTop = girlMarginTop + 60;
        $("#girl").css("top", "" + girlMarginTop + "px");
    }

    if (jumpImageNumber === 11) {
        jumpImageNumber = 1;
        clearInterval(jumpAnimationNumber);
        jumpAnimationNumber = 0;
        runImageNumber = 0;
        runAnimationStart();
    }
    $("#girl").attr("src", "../assets/images/png/Jump " + jumpImageNumber + ".png");


}

function jumpAnimationStart() {
    jumpAnimationNumber = setInterval(jumpAnimation, 150);
    runImageNumber = 0;
    clearInterval(idleAnimationNumber);
    clearInterval(runAnimationNumber);
    flyTrack.pause();
}

/***
 * End Jump Animation
 * */

/***
 * Start Fly Animation
 * */

let flyImageNumber = 1;
let flyAnimationNumber = 0;

function flyAnimation() {
    flyImageNumber++;
    if (flyImageNumber === 11) {
        flyImageNumber = 1;
    }
    $("#girl").attr("src", "../assets/images/png/Glide_00 " + flyImageNumber + ".png")


}

function flyAnimationStart() {
    flyAnimationNumber = setInterval(flyAnimation, 100);
    flyTrack.play().then(r => {
        flyTrack.loop = true;
    });
}

/***
 * End Fly Animation
 * */

/***
 * Start Dead Animation
 * */

let deadImageNumber = 1;
let deadAnimationNumber = 0;

function girlDeadAnimation() {
    deadImageNumber++;
    if (deadImageNumber === 11) {
        deadImageNumber = 10;
    }
    setInterval(idleAnimationNumber);
    idleAnimationNumber = 0;
    $("#girl").attr("src", "../assets/images/png/Dead " + deadImageNumber + ".png")


}

/***
 * End Dead Animation
 * */

$(document).on('keypress', function (e) {
    // alert(e.which);
    if (e.keyCode === 13) {
        clearInterval(idleAnimationNumber);
        idleAnimationNumber = 0;

        clearInterval(runAnimationNumber);
        runAnimationNumber = 0;

        if (flyAnimationNumber === 0) {
            runAnimationStart();
        }

        if (moveBackgroundAnimationId === 0) {
            moveBackgroundAnimationId = setInterval(moveBackground, 100)
        }
        if (barrierAnimationId === 0) {
            barrierAnimationId = setInterval(barrierAnimation, 150);
        }
        removeBlur();
    }
    else if (e.keyCode === 32) {
        clearInterval(idleAnimationNumber);
        idleAnimationNumber = 0;

        clearInterval(flyAnimationNumber);
        flyAnimationNumber = 0;

        if (jumpAnimationNumber === 0) {
            jumpAnimationStart();
        }
        if (moveBackgroundAnimationId === 0) {
            moveBackgroundAnimationId = setInterval(moveBackground, 100)
        }
        if (barrierAnimationId === 0) {
            barrierAnimationId = setInterval(barrierAnimation, 150);
        }
        removeBlur();
        jumpTrack.play();

    } else if (e.keyCode === 113) {
        if (flyAnimationNumber === 0) {
            flyAnimationStart();
        }
        clearInterval(idleAnimationNumber);
        idleAnimationNumber = 0;

        clearInterval(jumpAnimationNumber);
        jumpAnimationNumber = 0;

        clearInterval(runAnimationNumber);
        runAnimationNumber = 0;

        removeBlur();
    }
});

$("#btnSound").on('click', function (e) {
    if (!backgroundMusic.paused) {
        backgroundMusic.pause();
        $("#btnSound").removeClass("sound-on");
    } else {
        backgroundMusic.play().then(r => {
            backgroundMusic.loop = true;
        });
        $("#btnSound").addClass("sound-on");
    }
});

function blurComponents() {
    $(".background1").addClass("bgBlur");
    $(".background2").addClass("bgBlur");
    $(".background3").addClass("bgBlur");
    $(".background4").addClass("bgBlur");
}

function removeBlur() {
    $(".background1").removeClass("bgBlur");
    $(".background2").removeClass("bgBlur");
    $(".background3").removeClass("bgBlur");
    $(".background4").removeClass("bgBlur");
}

function pauseAll() {
    clearInterval(idleAnimationNumber);
    idleAnimationNumber = 0;

    if (flyAnimationNumber !== 0) {
        clearInterval(idleAnimationNumber);
        idleAnimationNumber = 0;
    } else {
        idleAnimationStart();
    }

    clearInterval(runAnimationNumber);
    runAnimationNumber = 0;

    clearInterval(barrierAnimationId);
    barrierAnimationId = 0;

    clearInterval(jumpAnimationNumber);
    jumpAnimationNumber = 0;

    clearInterval(moveBackgroundAnimationId);
    moveBackgroundAnimationId = 0;
}

$("#btnPause").on('click', function (e) {
    $("body").css("pointer-events", "none");
    $("#btnPause").css("pointer-events", "none");
    $("#btnResume").css("pointer-events", "auto");
    $("#btnRestart").css("pointer-events", "auto");
    $(document).off("32");
    $(document).off("13");
    pauseAll();

    $("#btnPause").addClass("pause");
    $("#btnResume").removeClass("pause");

    blurComponents();

    $("#pause-bg").css("display", "block");
    $("#titleImg").css("display", "block");

    backgroundMusic.pause();
});

$("#btnResume").on('click', function (e) {
    $("#btnPause").css("pointer-events", "auto");
    $("#btnResume").addClass("pause");
    $("#btnPause").removeClass("pause");
    $(document).on("32");
    $(document).on("13");
    removeBlur();
    hideComponents();
    backgroundMusic.play();
});

function hideComponents() {
    $("#pause-bg").css("display", "none");
    $("#titleImg").css("display", "none");
    $("#gameOver_title-img").css("display", "none");
    $("#gameWin_title-img").css("display", "none");
    $("#btnNext1").css("display", "none");
}

$("#controlsWrapper").hover(function () {
    $("#controlsWrapper").css("cursor", "grab");

}, function () {
    $("#controlsWrapper").css("cursor", "pointer");
});

function game_over() {
    blurComponents();

    $("#gameOverWrapper").css("display", "block");
    $("#gameOver_title-img").css("display", "block");

    backgroundMusic.pause();
    gameOverTrack.play();
    $("#btnSound").removeClass("sound-on");
}

function winResults() {
    blurComponents();
    $("#gameWin_title-img").css("display", "block");
    $(".btnNext").css("display", "block");
    $("#btnPause").css("pointer-events", "none");
    $("#btnResume").css("pointer-events", "none");
    pauseAll();

    backgroundMusic.pause();
    winnerTrack.play();
    $("#btnSound").removeClass("sound-on");
}


