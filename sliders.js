//define the sliders and output values for all the sliders
var slider1 = document.getElementById("slider1");
var outputValue1 = document.getElementById("slider-val1");
outputValue1.innerHTML =  "-"+slider1.value/10 + "&#176";

var slider2 = document.getElementById("slider2");
var outputValue2 = document.getElementById("slider-val2");
outputValue2.innerHTML =  slider2.value + "%";

var slider3 = document.getElementById("slider3");
var outputValue3 = document.getElementById("slider-val3");
outputValue3.innerHTML =  slider3.value + "%";

var slider4 = document.getElementById("slider4");
var outputValue4 = document.getElementById("slider-val4");
outputValue4.innerHTML =  slider4.value/10 + " Miles Per Day";

var slider5 = document.getElementById("slider5");
var outputValue5 = document.getElementById("slider-val5");
outputValue5.innerHTML =  slider5.value/2 + " Bulbs";


//water cup
var totalWidth = window.innerWidth;
var waterCupCanvas = document.getElementById("waterCup");

//thermostat
var thermostat = document.getElementById("thermostat");

var setThermoSize = function() {
    thermostat.style.height = thermostat.getBoundingClientRect().width+"px";
}
setThermoSize();
//position temperature label
outputValue1.style.position = "relative";
outputValue1.style.top = "33%";

var totalCarbonSaved = 0;
var carbonSavedLabel = document.getElementById("carbonSaved");



//add the slider handler functions
slider1.oninput = function() {
    outputValue1.innerHTML = "-" + (this.value)/10 + "&#176";
    var val = this.value;
    thermostat.style.background = "rgb("+(214-2*val)+", 27, "+parseInt(27+parseInt(val))+ ")";
    updateCarbonSaved();
}

slider2.oninput = function() {
    outputValue2.innerHTML =  this.value + "%";
}

slider3.oninput = function() {
    outputValue3.innerHTML =  this.value + "%";
    updateCarbonSaved();
}

slider4.oninput = function() {
    outputValue4.innerHTML =  this.value/10 + " Miles Per Day";
    updateCarbonSaved();
}

slider5.oninput = function() {
    outputValue5.innerHTML =  parseInt(this.value/2) + " Bulbs";
    updateCarbonSaved();
}

var updateCarbonSaved = function() {
    var co2PerMile = 0.907;
    var co2Saved = slider4.value/10 * co2PerMile;

    var co2PerKWH = 14.867444;
    var KWHforConditioning = 216.89;
    var savingsPerDegree = KWHforConditioning * 0.045 * co2PerKWH;
    var tempSavings = savingsPerDegree * slider1.value/10;

    var trashSavings =  692 * slider3.value/100;

    //how many hours the lights are on a day
    var lightHours = 5;
    var lightSavings = 0.048 * co2PerKWH * slider5.value/2 * lightHours;

    totalCarbonSaved = parseInt((co2Saved + tempSavings + lightSavings)*365 + trashSavings);

    carbonSavedLabel.innerHTML = totalCarbonSaved;
}

//update it initially
updateCarbonSaved();

//resize window function
onresize = function(){
    setThermoSize();
}



