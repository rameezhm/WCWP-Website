//define the sliders and output values for all the sliders
var slider1 = document.getElementById("slider1");
var outputValue1 = document.getElementById("slider-val1");
outputValue1.innerHTML =  slider1.value + "%";

var slider2 = document.getElementById("slider2");
var outputValue2 = document.getElementById("slider-val2");
outputValue2.innerHTML =  slider2.value + "%";

var slider3 = document.getElementById("slider3");
var outputValue3 = document.getElementById("slider-val3");
outputValue3.innerHTML =  slider3.value + "%";

//add the slider handler functions
slider1.oninput = function() {
    outputValue1.innerHTML =  this.value + "%";
}

slider2.oninput = function() {
    outputValue2.innerHTML =  this.value + "%";
}

slider3.oninput = function() {
    outputValue3.innerHTML =  this.value + "%";
}

