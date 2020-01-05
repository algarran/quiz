
var startBtn = document.getElementById('start');

var submitBtn = document.getElementById('Submit');

var questionsNo = 0;

//click to start quiz
startBtn.addEventListener('click', startQuiz);
startBtn.addEventListener('click', startTimer);

function startQuiz() {
    displayQuiz(questionsNo);
};

//generate questions
function displayQuiz(questionsNo) {

    //empty out quiz intro
    $("#start").click(function () {
        $("#quizIntro").empty();
    });

    questions[questionsNo].title, questions[questionsNo].choices;

    // here we need to add loop to iterate through questions


    var questionTitle = document.createElement("div")
    questionTitle.innerHTML = questions[questionsNo].title
    document.getElementById("quizContainer").appendChild(questionTitle);
    var title = questions[questionsNo].title
    var choices = questions[questionsNo].choices

    for (var i = 0; i < choices.length; i++) {
        var answerTitle = document.createElement("button")
        answerTitle.innerHTML = choices[i]
        document.getElementById("quizContainer").appendChild(answerTitle);
    };

    //creates next question button
    var nextQuestion = document.createElement("button");
    nextQuestion.innerHTML = " Next Question ";
    document.body.appendChild(nextQuestion);

    // questionsNo++;

    // here we need an if else statement for correct and wrong answers. 
    // correct answer iterates to the next question and wrong answer subtracts 2 seconds from timer.

    // if(){
    //     else(){

    //     }
    // }

    // add submit button and store score in local data and post to highscores table


};



//timer
function startTimer() {
    var seconds = 70, $seconds = document.querySelector('#countdown');
    (function countdown() {
        $seconds.textContent = "Time Left: " + seconds + (seconds == 1 ? '' : 's')
        if (seconds-- > 0) setTimeout(countdown, 750)
    })();
};