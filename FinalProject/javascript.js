/* This line gets all the HTML elements with class="light" and assigns them to a variable called LIGHTS. */
var LIGHTS = document.getElementsByClassName("light");

/* This defines a function which turns off every light by removing the "on" class from the HTML elements.*/
function allOff() {
  for (var i=0; i<LIGHTS.length; i = i+1) {
    LIGHTS[i].classList.remove("on");
  }
}

/* This defines a function which first turns off every light and then immediately turns one on.*/
function switchLight(lightNumber) {
  allOff();
  var light = LIGHTS[lightNumber];
  light.classList.add("on");
}

/* Function to move object across screen */
var imgObj = null;
            
function init(){
imgObj = document.getElementById('myImage');
imgObj.style.position= 'relative'; 
imgObj.style.left = '0px'; 
}
            
function moveRight(){
    imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
}
            
window.onload =init;