//elements for questions screen
let start = document.getElementById("startBtn");
let quiz = document.getElementById('quiz');
let questionsEl = document.getElementById("questionsEl");

let choicesEl = document.getElementById("choicesEl");

let choice1 = document.getElementById('choice1');
let choice2 = document.getElementById('choice2');
let choice3 = document.getElementById('choice3');
let choice4 = document.getElementById('choice4');
let timerID = document.getElementById('timer');
let scoreDis = document.getElementById('scoreContainer')

let questions = [
    {

        question: "What does HTML stand for?",
        choice1: "hyper Text Markup Language",
        choice2: "Hyperlinks and Text Markup Languages",
        choice3: "Home Tool Markup Language",
        choice4: "Hot Text Markup Languages",
        correct: "choice1"

    },
    {

        question: "Inside which HTML element do we put the JavaScript? ",
        choice1: "<script> ",
        choice2: "<js> ",
        choice3: "<javascript> ",
        choice4: "<scripting> ",
        correct: "choice1 "

    },
    {

        question: "What is the correct JavaScript syntax to change the content of the HTML element?  <p id=\"demo\">This is a demonstration.</p>",

        choice1: " document.getElementByName(\"p\").innerHTML=\"Hello World!\"",
        choice2: "document.getElement(\"p\").innerHTML =\"Hello World!\" ",
        choice3: "#demo.innerHTML=\"Hello World!;",
        choice4: "document.getElementById(\"demo\").innerHTML=\"Hello World!\"",
        correct: "choice4 "

    },
    {

        question: "Where is the correct place to insert a JavaScript? ",
        choice1: "Both the <head> section and the <body> section are correct ",
        choice2: "The <body> section ",
        choice3: "The <head> section ",
        choice4: " The script file",
        correct: " choice1"

    },
    {

        question: "What is the correct syntax for referring to an external script called \"xxx.js\"?",
        choice1: "<script sref=\"xxx.js\">",
        choice2: "<script name=\"xxx.js\"> ",
        choice3: "<script href=\"xxx.js\"> ",
        choice4: " <script src=\"xxx.js\"> ",
        correct: "choice4 "

    },
    {

        question: "The external JavaScript file must contain the <script> tag. ",
        choice1: "True ",
        choice2: "False",
        correct: " choice2"

    },
    {

        question: "How do you write \"Hello World\" in an alert box? ",
        choice1: "alertBox(\"Hello World\");",
        choice2: "msgBox(\"Hello World\"); ",
        choice3: "alert(\"Hello World\");",
        choice4: "msg(\"Hello World\"); ",
        correct: "choice3 "

    },
    {

        question: "How do you create a function in JavaScript? ",
        choice1: "function myFunction() ",
        choice2: "function:myFunction() ",
        choice3: "function = myFunction() ",
        choice4: "createfn = myFunction() ",
        correct: "choice1 "

    },
    {

        question: "How to write an IF statement in JavaScript? ",
        choice1: "if i = 5 then ",
        choice2: "if i == 5 then ",
        choice3: "if i = 5 ",
        choice4: "if (i==5) ",
        correct: "choice2 "

    },
    {

        question: "How to write an IF statement for executing some code if \"i\" is NOT equal to 5? ",
        choice1: "if (i<>5) ",
        choice2: "if i <> 5 ",
        choice3: "if (i !=5) ",
        choice4: "if i=!5 then ",
        correct: "choice3 "

    },
    {

        question: "How does a WHILE loop start?",
        choice1: "while (i <= 10;i++) ",
        choice2: "while i= 1 to 10 ",
        choice3: "while (i <= 10) ",
        choice4: "while (i ! 10) ",
        correct: "choice3 "

    },
    {

        question: "How does a FOR loop start? ",
        choice1: "for (i <= 5;i++) ",
        choice2: "(i= 0; i <=5) ",
        choice3: " i= 1 to 5",
        choice4: "for (i= 0; i <= 5; i++) ",
        correct: "choice4 "

    },
    {
        question: "How can you add a comment in a JavaScript? ",
        choice1: "<!--This is a comment--> ",
        choice2: "//This is a comment",
        choice3: "'This is a comment' ",
        choice4: "**This is a comment** ",
        correct: "choice2 "

    },
    {

        question: "What is the correct way to write a JavaScript array? ",
        choice1: "var colors =(1:\"red\", 2:\"green\", 3:\"blue\") ",
        choice2: "var colors =[\"red\", \"green\", \"blue\"] ",
        choice3: "var colors = \"red\", \"green\", \"blue\" ",
        choice4: "colors = red, green, blue",
        correct: "choice2 "

    },
    {

        question: "How do you round the number 7.25, to the nearest integer? ",
        choice1: "round(7.25) ",
        choice2: "rnd(7.25) ",
        choice3: "Math.round(7.25) ",
        choice4: "Math.rnd(7.25) ",
        correct: "choice3 "

    },
    {

        question: "How do you find the number with the highest value of x and y?",
        choice1: "Math.ceil(x,y) ",
        choice2: "Math.max(x,y) ",
        choice3: "ceil(x,y) ",
        choice4: "top(x,y) ",
        correct: "choice2 "

    },
    {

        question: "What event occurs when the user clicks on an HTML element? ",
        choice1: "onmouseclick ",
        choice2: "onmouseover ",
        choice3: "onchange ",
        choice4: "onclick ",
        correct: "choice4 "

    },
    {

        question: "Which operator is used to assign a value to a variable?",
        choice1: "x",
        choice2: "-",
        choice3: "*",
        choice4: "=",
        correct: "choice4 "

    },
    {

        question: "JavaScript is the same as Java. ",
        choice1: "True ",
        choice2: "False ",
        correct: "False "

    },
    {

        question: "What will the following code return: Boolean(10>9) ",
        choice1: "True ",
        choice2: "False",
        choice3: "NaN ",
        choice4: "Greater ",
        correct: "choice1 "

    },
]



const lastQuestion = questions.length - 1;
let runningQuestion = 0;

//inital fuction to start quiz

function startquiz() {
    
    

    //get start screen by id
    var startscreen = document.getElementById('startBtn');
    

        startQuestion();

}



startBtn.onclick = startquiz;



//render questions
var button = document.getElementById('startBtn')
    button.addEventListener('click',hideshow,false);

    function hideshow() {
        document.getElementById('startBtn').style.display = 'block'; 
        this.style.display = 'none'
    }   
    


function startQuestion() {
    let q = questions[runningQuestion];

    questionsEl.textContent = q.question;
    choice1.textContent = q.choice1;
    choice2.textContent = q.choice2;
    choice3.textContent = q.choice3;
    choice4.textContent = q.choice4;

    

};





//check answer
let score = 0;

function checkAnswer(answer) {
    if (answer === questions[runningQuestion].correct) {
        score++;
        feedback.textContent = "Correct";
        //answer is correct
    }
    else {
        feedback.textContent = "Wrong!";
    }
    
   
   if (runningQuestion < lastQuestion) {
        runningQuestion++;
        startQuestion();

    }
    else {
        finalScore();
    }
}


//score render
function finalScore(){
    scoreDis.style.display = "block";

    let totalScore = Math.round(100 * (score / questions.length));
}





//blank variable for the timer
//time variable 



//selecting start button

//end screen
var intialsElement = document.getElementById("initals");

//feedback right wrong answer (if else statements)
var feedback = document.getElementById('feedback');
var submitbtn = document.getElementById('submitbtn');






//function to take time away/use clock
function starttimer() {


    // questions.length *15;
}

//questionsEl.removeAttribute("class");
    //set interval for timer
    timerVar = setInterval(starttimer, 1000);
    //set timer 
    timerID.textContent = time;
    //call function to start questions


//render end screen
//clear timeer
//time = final score





