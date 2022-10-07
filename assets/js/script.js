// Main Screen
let mainScreen = document.querySelector('#main');
let startBtn = document.querySelector('#btn-start');
let timerElement = document.querySelector('.timer');

// Questions Screen
let questionScreen = document.querySelector('#questions-section');
let questionElement = document.querySelector('#question-title');
let choicesElement = document.querySelector('#choices');
let feedback = document.querySelector('#feedback');

let questionNumber = 0;
let currentQuestion;
let time = 75; 


// Final Score Screen
let scoreScreen = document.querySelector('#end-screen');
let finalScoreElement = document.querySelector('#final-score');
let initialsInput = document.querySelector('#initials');
let submitInitial = document.querySelector('#submit');
let score;




// Main Screen
function startQuiz() {
    mainScreen.classList.add('hide');
    questionScreen.classList.remove('hide');

    timer()
    getQuestion()
}




startBtn.addEventListener("click", function(event) {
    event.preventDefault()
    event.stopPropagation()
    startQuiz()
})



















// Questions Screen
function timer() {
    let timer = setInterval(function() {
        timerElement.innerHTML = `Time: ${time}`;
        time--;
        if ((time < 0) || (questionNumber > 4)) {
            score = time + 1;
            clearInterval(timer);
            endQuiz()
        }
    }, 1000)


}


function getQuestion() {

    let choices = "";

    currentQuestion = questions[questionNumber]
    questionElement.textContent = currentQuestion.title



    for (let i = 0; i < currentQuestion.choices.length; i++) {
        choices = document.createElement("button")
        choicesElement.append(choices)
        choices.classList.add("optionBtn")
        choices.setAttribute('id', i)
        choices.textContent = `${i + 1}. ${currentQuestion.choices[i]}`
        
        choices.addEventListener("click", (event) => {
            event.preventDefault()
            event.stopPropagation()
            checkAnswer(i, currentQuestion.choices)
        })

    }





}




function checkAnswer(i, choices) {
    let givenChoice = choices[i];
    let correctChoice = questions[questionNumber].answer;




    if (givenChoice !== correctChoice) {
        feedback.textContent = "Incorrect!";
        feedback.classList.remove('hide');
        time = time - 10;
    } else {
        feedback.textContent = "Correct!"
        feedback.classList.remove('hide')
    }

    setTimeout(function() {
        questionNumber++;
        resetQuestion()
    }, 1000);
    
    console.log(givenChoice)

}




function resetQuestion() {
    while (choicesElement.firstChild) {
        questionElement.textContent = "";
        choicesElement.removeChild(choicesElement.firstChild);
        feedback.classList.add('hide');
    }
    if (questionNumber <= 4) {
        getQuestion()
    } else {
        endQuiz()
    }
}














// Final Score Screen


function endQuiz() {

    while (choicesElement.firstChild) {
        questionElement.textContent = "";
        choicesElement.removeChild(choicesElement.firstChild);
        feedback.classList.add('hide');
    }

    finalScoreElement.textContent = score;

    scoreScreen.classList.remove("hide")
}




function saveHighscore() {
    // get value of input box - for initials
    let initials = document.getElementById('initials').value;
    // format new score object for current user
    let currentUserScore = {init: initials, score: time};
    // get saved scores from localstorage, or if not any, set to empty array
    let savedScores = JSON.parse(localStorage.getItem("savedScores"));
        // make sure value wasn't empty
    if(initials === ""){
        alert ("You must enter your initials to save your score");
    }
    
    else{
        if (savedScores !== null) {
            savedScores.push(currentUserScore);
            // save to local storage
            localStorage.setItem("savedScores",JSON.stringify(savedScores));
        }
        else{
            savedScores = [currentUserScore];
            localStorage.setItem("savedScores", JSON.stringify(savedScores));
        }
            // redirect to next page
            document.location.href = "../highscores.html";
    }
}


document.querySelector("#submit").addEventListener("click", saveHighscore);