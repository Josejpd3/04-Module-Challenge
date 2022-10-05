// Main Screen
let mainScreen = document.querySelector('.main');
let startBtn = document.querySelector('#btn-start');

// Questions Screen
let questionScreen = document.querySelector('#questions-section');
let questionElement = document.querySelector('#question-title');
let choicesElement = document.querySelector('#choices');

// Final Score Screen
let scoreScreen = document.querySelector('#end-screen');
let finalScoreElement = document.querySelector('#final-score');
let initialsInput = document.querySelector('#initials');
let submitInitial = document.querySelector('#submit');


// Main Screen
function startQuiz() {
    mainScreen.classList.add('hide')
    questionScreen.classList.remove('hide')
    console.log('hello')
}




startBtn.addEventListener("click", function(event) {
    event.preventDefault()
    startQuiz()
})
// Questions Screen





// Final Score Screen