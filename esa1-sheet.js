var tID;

function animateScript() {
var position = 489; 
const  interval = 100; 
tID = setInterval ( () => {
document.getElementById("image").style.backgroundPosition = 
`-${position}px 0px`; 

if (position < 2446) { position = position + 489;}
else { position = 489; }}, interval ); 
}

function stopAnimate() {
clearInterval(tID);
} 