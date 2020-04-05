var highScores = document.getElementById("highScoresList");
var enter = document.querySelector("enterHighScore");
var highScoresText = document.querySelector("#initialsText");
   //console.log("text area");
var clearButton = document.querySelector("#clearScores");
// console.log("clearButton");


var scores = [];

init();

function renderScores() {
  highScores.innerHTML = "";

  // Render a new li for each score
  for (var i = 0; i < scores.length; i++) {
    var high = scores[i];

    var li = document.createElement("li");
    li.textContent = high;
    li.setAttribute("data-index", i);

    highScores.appendChild(li);
  };
};

function init() {
  // Get stored scores from localStorage
  // Parsing the JSON string to an object
  var storedHighScores = JSON.parse(localStorage.getItem("scores"));

  // If scores were retrieved from localStorage, update the todos array to it
  if (storedHighScores !== null) {
    scores = storedHighScores;
  };

  // Render scores to the DOM
  renderScores();
};

function storeScores() {
  // Stringify and set "scores" key in localStorage to scores array
  localStorage.setItem("scores", JSON.stringify(scores));
};
// When form is submitted...
enter.addEventListener("submit", function(event) {
  event.preventDefault();
  
  var scoresText = highScoresText.value.trim();
  // Return from function early if submitted scoresText is blank
  if (scoresText === "") {
    return;
  };

  // Add new scoreText to scores array, clear the input
  scores.push(scoresText);
  highScoresText.value = "";

  // Store updated scores in localStorage, re-render the list
  storeScores();
  renderScores();
});

// When the clear button is clicked...
clearButton.addEventListener("click", function(event) {
  var element = event.target;

  // If that element is a button...
  if (element.matches("click") === true) {
    // Get its data-index value and clears scores from the list
    var index = element.parentElement.getAttribute("data-index");
    scores.splice(index, 1);

    // Store updated scores in localStorage, re-render the list
    storeScores();
    renderScores();
  };
});
