// Main Screen
let mainScreen = document.querySelector('.main');
let startBtn = document.querySelector('#btn-start');
let timerElement = document.querySelector('.timer');

// Questions Screen
let questionScreen = document.querySelector('#questions-section');
let questionElement = document.querySelector('#question-title');
let choicesElement = document.querySelector('#choices');

let questionNumber = 0;
let currentQuestion;
let time = 120; 


// Final Score Screen
let scoreScreen = document.querySelector('#end-screen');
let finalScoreElement = document.querySelector('#final-score');
let initialsInput = document.querySelector('#initials');
let submitInitial = document.querySelector('#submit');




// Main Screen
function startQuiz() {
    mainScreen.classList.add('hide')
    questionScreen.classList.remove('hide')


    timer()
    getQuestion()
}




startBtn.addEventListener("click", function(event) {
    event.preventDefault()
    startQuiz()
})



















// Questions Screen
function timer() {
    let timer = setInterval(function() {
        timerElement.innerHTML = `Time: ${time}`;
        time--;
        if (time < 0) {
            clearInterval(timer);
        }
    }, 1000)
}


function getQuestion() {


    currentQuestion = questions[questionNumber].title
    questionElement.textContent = currentQuestion

    for (let i = 0; i < questions[questionNumber].choices.length; i++) {
        let choices = document.createElement("button")
        choicesElement.append(choices)
        choices.classList.add("optionBtn")
        choices.textContent = `${i + 1}. ${questions[questionNumber].choices[i]}`
    }





}




getQuestion()

















// Final Score Screen