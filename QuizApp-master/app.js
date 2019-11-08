function populate() {
  // Will Check Are we in Question no 1 or Last Question
  if (quiz.isEnded()) {
    showScores();
  } else {
    //Show Question

    var element = document.getElementById("question");
    element.innerHTML = quiz.getQuestionIndex().text;

    //Show Choices

    var choices = quiz.getQuestionIndex().choice;

    for (i = 0; i < choices.length; i++) {
      var element = document.getElementById("choice" + i);
      element.innerHTML = choices[i];
      guess("btn" + i, choices[i]);
    }
    showProgress();
  }
}

function showProgress() {
  var currentQuestionNumber = quiz.questionIndex + 1;
  var element = document.getElementById("progress");
  element.innerHTML =
    "Quesion " + currentQuestionNumber + " of " + quiz.questions.length;
}

function guess(id, guess) {
  var button = document.getElementById(id);
  button.onclick = function() {
    quiz.guess(guess);
    populate();
  };
}
function showScores() {
  var gameOverHtml = "<h1>Result</h1>";
  gameOverHtml += "<h2 id='score'>Your Score is " + quiz.score + "</h2>";
  var element = document.getElementById("quiz");

  element.innerHTML = gameOverHtml;
}
//A Question Constructor Which Accepts A Question , Options And Correct Answer
function Question(text, choice, answer) {
  this.text = text;
  this.choice = choice;
  this.answer = answer;
}

Question.prototype.correctAnswer = function(choice) {
  return choice === this.answer;
};

// Step : 2
var questions = [
  new Question(
    "Which is not An Object Oriented Programming Language ? ",
    ["C", "C++", "Java", "C"],
    "C"
  ),
  new Question(
    "Which Language is Used for styling the webpages ? ",
    ["HTML", "CSS", "Java", "Jquery"],
    "CSS"
  ),
  new Question(
    "THere are _ main components in OOP Language ? ",
    ["1", "2", "3", "4"],
    "4"
  ),
  new Question(
    "Which Language is used for Web apps ? ",
    ["PHP", "PYthon++", "Java", "All"],
    "All"
  ),
  new Question(
    "Which is MVC ? ",
    ["Language", "Library", "Framework", "All"],
    "Framework"
  )
];

// A Quiz Contructor Accepts A array Which Contains List of Object
function Quiz(questions) {
  this.score = 0;
  this.questions = questions;
  this.questionIndex = 0;
}

Quiz.prototype.isEnded = function() {
  return this.questions.length === this.questionIndex;
};

Quiz.prototype.guess = function(answer) {
  if (this.getQuestionIndex().correctAnswer(answer)) {
    this.score++;
  }
  this.questionIndex++;
};
Quiz.prototype.getQuestionIndex = function() {
  return this.questions[this.questionIndex];
};

var quiz = new Quiz(questions);

//Renders the Data
populate();
