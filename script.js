//Locating all buttons and timer
var startButton = document.querySelector("#startQuiz");
   //console.log("startButton");
var clearButton = document.querySelector("#clearScores");
   // console.log("clearButton");
var backButton = document.querySelector("#goBack");
   // console.log("backButton");
var clock = document.getElementById("timer");
   // console.log("clock running");
var highscoresText = document.querySelector("#initialsText")
   //console.log("text area");
var mainEl = document.getElementById("main");
var questionSec = document.createElement("section");
var questionContainer = document.getElementById("questions");
var pulledQuestion = document.getElementById("questionTitle");
var choice1 = document.getElementById("choice1");
var choice2 = document.getElementById("choice2");
var choice3 = document.getElementById("choice3");
var choice4 = document.getElementById("choice4");
var feedBack = document.getElementById("feedback")

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
var correct = myQuestions.answer
var choose = myQuestions.choices

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

// Event Listeners for when a choice is clicked the next question will appear
   choice1.addEventListener ("click", function () {
      nextQuestion();
    });
    choice2.addEventListener ("click", function () {
      nextQuestion();
    });
    choice3.addEventListener ("click", function () {
      nextQuestion();
    });
    choice4.addEventListener ("click", function () {
      nextQuestion();
    });

// Function to show next question
function nextQuestion() {
      i++;
      getQuestion();
   };

// Trying to loop through my nested array choices and my answer to pull the match for the CORRECT ANSWER CLICKED.
// UNSURE HOW I AM SUPPOSE TO ADD A CLICK EVENT INTO THIS 
   var correct = myQuestions.answer 
   for (var i = 0; i < correct.length; i++){
      for (var j = 0; j <  choose.length; j++){
         if (myQuestions[i]===choose[j]){
       correctAnswer();
       nextQuestion();
         };
      };
   };

// THIS IS FOR A CORRECT ANSWER CLICKED BUT WHAT ABOUT WRONG ANSWER CLICKED
// AFTER A CHOICE IS MADE ON THE 4TH QUESTION I NEED THE HIGHSCORES PAGE TO OPEN

//  function correctAnswer() {
//     if ( ???){
//        nextQuestion();
//     } else if ( ???) {
//        showFeedback();
//     } else {
//       return window.open("index.html", "_self");
//     };
//   };
   
// When wrong answer is clicked 
function showFeedback() {
   feedBack.textContent = feed;
    if (feed) {
   secondsLeft -= 10;
   };
};

