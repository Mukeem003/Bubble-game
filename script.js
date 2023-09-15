var timer=60;
var score=0;
var hitrn=0;

function increaseScore(){
    score+=10;
    document.querySelector(".scoreval").textContent=score;
}

function getNewHit() {
     hitrn = Math.floor(Math.random()*10);
    document.querySelector(".hitval").textContent= hitrn;
}

function makeBubble(){
    clutter="";
for (var i=0 ; i<=150; i++ ){
    var random=Math.floor(Math.random()*10)
    clutter += `<div id="bubble">${random}</div>`;
}
document.querySelector('#bottom').innerHTML=clutter;
}

function runTimer(){
    var timerint=setInterval(function(){
        if (timer>0){
            timer--;
            document.querySelector(".timerval").textContent=timer;
        } else {
            clearInterval(timerint);
            document.querySelector(".pbtm").innerHTML=`<h1>Game Over <br>s your total score ${score}</h1>`;
        }
        
    },1000);
}

document.querySelector(".pbtm")
.addEventListener("click",function(dets){
    var clickednum=Number(dets.target.textContent); 
    if (clickednum=== hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }

});
makeBubble();
runTimer();
getNewHit();
 