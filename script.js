//Locating all buttons and timer
var startButton = document.querySelector("#startQuiz");
//console.log("startButton");
var backButton = document.querySelector("#goBack");
// console.log("backButton");
var enter = document.querySelector("enterHighScore");
var highScoresText = document.querySelector("#initialsText");
//console.log("text area");
var clearButton = document.querySelector("#clearScores");
// console.log("clearButton");
var clock = document.getElementById("timer");
// console.log("clock running");
var mainEl = document.getElementById("main");
var questionSec = document.createElement("section");
var questionContainer = document.getElementById("questions");
var pulledQuestion = document.getElementById("questionTitle");
var choice1 = document.getElementById("choice1");
var choice2 = document.getElementById("choice2");
var choice3 = document.getElementById("choice3");
var choice4 = document.getElementById("choice4");
var feedBack = document.getElementById("feedback");
var highScores = document.getElementById("highScoresList");



var myQuestions = [
   {
      question: "What is a sequence of instructions that performs a specific task, packaged as a unit?",
      choices: ["Variable", "Function", "Loop", "If Statement"],
      answer: "Function"
   },
   {
      question: "Each element in an array has a numbered position known as it's...",
      choices:["parameter", "list", "iterator variable", "index"],
      answer: "index"
   },
   {  question:"The values that are passed to the function when it is called are...",
      choices: ["returns", "arguements", "arrays","swtich statements"],
      answer:"arguements"
   },
   {
      question:"Which loop is best to use when you need to perform a task for every item in a list, or when the order of things must be maintained?",
      choices: ["For each loop", "While loop","For loop","Loop loop"],
      answer: "For each loop"
   }
];

//Global variables
var i = 0;
var feed = "Wrong!"
var secondsLeft = 40
var answer = myQuestions[i].answer


// Start button is clicked to start quiz
startButton.addEventListener("click", function(){
   startQuiz();
});

// Timer Function
function setTime() {
   var timerInterval = setInterval(function() {
      secondsLeft--;
      clock.textContent = secondsLeft
      if(secondsLeft === 0){
         window.open("index2.html", "_self");
      };
   },1000)
};

// Once start button is clicked the quiz starts, the first question replaces the code quiz instructions, & the timer starts
function startQuiz() {
      mainEl.setAttribute("class","container");
      mainEl.append(questionSec);
      questionContainer.removeAttribute("class");
      setTime();
      getQuestion();
   };

// Question function for
function getQuestion() {
   var currentQuestion = myQuestions[i];
   pulledQuestion.textContent = currentQuestion.question;
   var firstChoice = myQuestions[i];
   choice1.textContent = firstChoice.choices[0];
   var secondChoice = myQuestions[i];
   choice2.textContent = secondChoice.choices[1];
   var thirdChoice = myQuestions[i];
   choice3.textContent = thirdChoice.choices[2];
   var fourthChoice = myQuestions[i];
   choice4.textContent = fourthChoice.choices[3];
   };

// Event Listeners for when a choice is clicked the next question and/or feedback will appear
   choice1.addEventListener ("click", function (event) {
       //  console.log(event.target.textContent);
       var answer = myQuestions[i].answer
       if (answer === event.target.textContent) {
          nextQuestion();
       } else {
          showFeedback();
          nextQuestion();
       };
     }); 
    choice2.addEventListener ("click", function (event) {
      var answer = myQuestions[i].answer
      if (answer === event.target.textContent) {
         nextQuestion();
      } else {
         showFeedback();
         nextQuestion();
      };
    });
    choice3.addEventListener ("click", function (event) {
      var answer = myQuestions[i].answer
      if (answer === event.target.textContent) {
         nextQuestion();
      } else {
         showFeedback();
         nextQuestion();
      };
    });
    choice4.addEventListener ("click", function (event) {
      var answer = myQuestions[i].answer
      if (answer === event.target.textContent) {
         nextQuestion();
      } else {
         showFeedback();
         nextQuestion();
      };
    });

// Function to show next question
function nextQuestion() {
      i++;
      getQuestion();
};

// When wrong answer is clicked 
function showFeedback() {
   feedBack.textContent = feed
    if (feed) {
   secondsLeft -= 10;
    };
};


//Code for index2.html

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
  // If scores were retrieved from localStorage, update the scores array to it
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
