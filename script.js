//elements for questions screen
let start = document.getElementById("startBtn");
let quiz = document.getElementById("quiz");
let questionsEl = document.getElementById("questionsEl");
let timerEl = document.getElementById("timer");
let choicesEl = document.getElementById("choicesEl");
//feedback right wrong answer (if else statements)
let feedback = document.getElementById("feedback");
let submitbtn = document.getElementById("submitbtn");

//end screen
let intialsElement = document.getElementById("initials");

let runningQuestion = 0;

let timerId;

let score = 0;

let questions = [
  {
    question: "What does HTML stand for?",
    choices: [
      "hyper Text Markup Language",
      "Hyperlinks and Text Markup Languages",
      "Home Tool Markup Language",
      "Hot Text Markup Languages",
    ],
    correct: "hyper Text Markup Language",
  },
  {
    question: "Inside which HTML element do we put the JavaScript? ",
    choices: ["<script> ", "<js> ", "<javascript> ", "<scripting> "],
    correct: "<script> ",
  },
  {
    question:
      'What is the correct JavaScript syntax to change the content of the HTML element?  <p id="demo">This is a demonstration.</p>',

    choices: [
      ' document.getElementByName("p").innerHTML="Hello World!"',
      'document.getElement("p").innerHTML ="Hello World!" ',
      '#demo.innerHTML="Hello World!;',
      'document.getElementById("demo").innerHTML="Hello World!"',
    ],
    correct: 'document.getElementById("demo").innerHTML="Hello World!"',
  },
  {
    question: "Where is the correct place to insert a JavaScript? ",
    choices: [
      "Both the <head> section and the <body> section are correct ",
      "The <body> section ",
      "The <head> section ",
      " The script file",
    ],
    correct: "Both the <head> section and the <body> section are correct ",
  },
  {
    question:
      'What is the correct syntax for referring to an external script called "xxx.js"?',
    choices: [
      '<script sref="xxx.js">',
      '<script name="xxx.js"> ',
      '<script href="xxx.js"> ',
      ' <script src="xxx.js"> ',
    ],
    correct: '<script src="xxx.js"> ',
  },
  {
    question: "The external JavaScript file must contain the <script> tag. ",
    choices: ["True ", "False"],
    correct: "False",
  },
  {
    question: 'How do you write "Hello World" in an alert box? ',
    choices: [
      'alertBox("Hello World");',
      'msgBox("Hello World"); ',
      'alert("Hello World");',
      'msg("Hello World"); ',
    ],
    correct: 'alert("Hello World");',
  },
  {
    question: "How do you create a function in JavaScript? ",
    choices: [
      "function myFunction() ",
      "function:myFunction() ",
      "function = myFunction() ",
      "createfn = myFunction() ",
    ],
    correct: "function myFunction() ",
  },
  {
    question: "How to write an IF statement in JavaScript? ",
    choices: ["if i = 5 then ", "if i == 5 then ", "if i = 5 ", "if (i==5) "],
    correct: "if i == 5 then ",
  },
  {
    question:
      'How to write an IF statement for executing some code if "i" is NOT equal to 5? ',
    choices: ["if (i<>5) ", "if i <> 5 ", "if (i !=5) ", "if i=!5 then "],
    correct: "if (i !=5) ",
  },
  {
    question: "How does a WHILE loop start?",
    choices: [
      "while (i <= 10;i++) ",
      "while i= 1 to 10 ",
      "while (i <= 10) ",
      "while (i ! 10) ",
    ],
    correct: "while (i <= 10) ",
  },
  {
    question: "How does a FOR loop start? ",
    choices: [
      "for (i <= 5;i++) ",
      "(i= 0; i <=5) ",
      " i= 1 to 5",
      "for (i= 0; i <= 5; i++) ",
    ],
    correct: "for (i= 0; i <= 5; i++) ",
  },
  {
    question: "How can you add a comment in a JavaScript? ",
    choices: [
      "<!--This is a comment--> ",
      "//This is a comment",
      "'This is a comment' ",
      "**This is a comment** ",
    ],
    correct: "//This is a comment",
  },
  {
    question: "What is the correct way to write a JavaScript array? ",
    choices: [
      'var colors =(1:"red", 2:"green", 3:"blue") ',
      'var colors =["red", "green", "blue"] ',
      'var colors = "red", "green", "blue" ',
      "colors = red, green, blue",
    ],
    correct: 'var colors =["red", "green", "blue"] ',
  },
  {
    question: "How do you round the number 7.25, to the nearest integer? ",
    choices: [
      "round(7.25) ",
      "rnd(7.25) ",
      "Math.round(7.25) ",
      "Math.rnd(7.25) ",
    ],
    correct: "Math.round(7.25) ",
  },
  {
    question: "How do you find the number with the highest value of x and y?",
    choices: ["Math.ceil(x,y) ", "Math.max(x,y) ", "ceil(x,y) ", "top(x,y) "],
    correct: "Math.max(x,y) ",
  },
  {
    question: "What event occurs when the user clicks on an HTML element? ",
    choices: ["onmouseclick ", "onmouseover ", "onchange ", "onclick "],
    correct: "onclick ",
  },
  {
    question: "Which operator is used to assign a value to a variable?",
    choices: ["x", "-", "*", "="],
    correct: "=",
  },
  {
    question: "JavaScript is the same as Java. ",
    choices: ["True ", "False "],
    correct: "False ",
  },
  {
    question: "What will the following code return: Boolean(10>9) ",
    choices: ["True ", "False", "NaN ", "Greater "],
    correct: "True ",
  },
];

//inital fuction to start quiz

function startquiz() {
  var firstScreen = document.getElementById("start");
  firstScreen.setAttribute("class", "hide");

  questionsEl.removeAttribute("class");

  timerId = setInterval(startTimer, 1000);

  timerEl.textContent = time;

  startQuestion();
}

let time = questions.length * 15;
let lastQuestion = questions.length - 1;

function startQuestion() {
  let quest = questions[runningQuestion];

  var titleEl = document.getElementById("titleEl");
  titleEl.textContent = quest.question;

  choicesEl.innerHTML = "";

  quest.choices.forEach(function (choice, i) {
    var options = document.createElement("button");
    options.setAttribute("class", "choice");
    options.setAttribute("value", choice);

    options.textContent = i + 1 + ". " + choice;

    options.onclick = checkAnswer();

    choicesEl.appendChild(options);
  });
}

var button = document.getElementById("startBtn");
button.addEventListener("click", hideshow, false);

function hideshow() {
  document.getElementById("startBtn").style.display = "block";
  this.style.display = "none";
}

function checkAnswer() {
  if (this.value === questions[runningQuestion].correct) {
    score++;
    feedback.textContent = "Correct";
    //answer is correct
  } else {
    time -= 15;

    if (time < 0) {
      time = 0;
    }
    timerEl.textContent = time;
    feedback.textContent = "Wrong!";
  }

  feedback.setAttribute("class", "feedback");
  setTimeout(function () {
    feedback.setAttribute("class", "feeback hide");
  }, 1000);

  runningQuestion++;

  if (runningQuestion < lastQuestion) {
    startQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  clearInterval(timerId);

  let scoreDis = document.getElementById("scoreContainer");
  scoreDis.removeAttribute("class");

  let finalScore = document.getElementById("finalScore");
  finalScore.textContent = time;

  questionsEl.setAttribute("class", "hide");
}

//score render
function finalScore() {
  scoreDis.style.display = "block";

  let totalScore = Math.round(100 * (score / questions.length));
}

//function to take time away/use clock
function startTimer() {
  time--;
  timerEl.textContent = time;

  if (time <= 0) {
    endQuiz();
  }
}

startBtn.onclick = startquiz;
