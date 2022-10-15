var currentValue=1; 
var maxValue=8;
var minValue=1;
var tID2;

document.addEventListener('DOMContentLoaded', () => {
  window.onkeydown= function(gfg){
    if(gfg.code == "KeyL") decrease()
    if(gfg.code == "KeyR") increase()
    if(gfg.code == "KeyA") animateContinuesly()
    if(gfg.code == "KeyS") stopAnimateContinuesly()
  };
});


function animateContinuesly(){
	tID2 = setInterval ( () => {
	increase()
}
, 200 );
}

function stopAnimateContinuesly(){
	clearInterval(tID2);
}


function increase(){
 if(currentValue == maxValue){
 	currentValue = minValue
 } else {
 	currentValue = currentValue +1
 }
 setImage(currentValue)
}

function decrease(){
 if(currentValue == minValue){
 	currentValue = maxValue
 } else {
 	currentValue = currentValue -1
 }
 setImage(currentValue)
}

function setImage(value) {
  const image = document.querySelector("#glueck")
  image.src = `images/${value}.png`
}