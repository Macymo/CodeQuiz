//Locating all buttons and timer
var startButton = document.querySelector("#start-quiz");
   //console.log("startButton");
var clearButton = document.querySelector("#clearScores");
   //console.log("clearButton");
var backButton = document.querySelector("#goBack");
   //console.log("backButton");
//button for submitting initials 
/*
var submitButton = document.querySelector("#submit");
console.log(submitButton); 
*/
var clock = document.querySelector("#timer");
   console.log("clock running");
   
//Event listeners for buttons to be clicked
startButton.addEventListener("click", function() {
    console.log("startButton");
});
clearButton.addEventListener("click", function() {
   //console.log("clearButton");
});
backButton.addEventListener("click", function() {
   //console.log("backButton");//
});
/*
submitButton.addEventListener("click", function() {
   console.log("submitButton");
});
*/