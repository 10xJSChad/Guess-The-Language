//Elements
var questionText;
var answerButtons;
var scoreText;

//Languages & questions
var supportedLanguages = ["English", "German", "Spanish", "Icelandic", "Swedish", "Norwegian", "Portuguese", "Italian"];
var questionAndAnswer = ["bunghole", 2];

//Gameplay variables
var correct = 0;
var incorrect = 0;

function getElements(){
    questionText = document.getElementsByClassName("question-text")[0];
    answerButtons = document.getElementsByClassName("answer-button");
    scoreText = document.getElementsByClassName("score-text")[0];
}

function shuffleList(list){
    let newList = []
    while(newList.length < list.length){
        i = Math.floor(Math.random() * (0, list.length));
        if(!newList.includes(i)) newList.push(i);
    }
    for(i=0; i<newList.length; i++){
        newList[i] = list[newList[i]];
    }
    return newList;
}

function choice(list) {
    let index = Math.floor(Math.random() * list.length);
    return list[index];
}

function createQuestion(){
    questionAndAnswer = choice(questionsList);
    displayQuestion();
    updateButtons();
}

function displayQuestion(){
    questionText.innerHTML = questionAndAnswer[1];
}

function updateButtons(){
    let languagesToDisplay = [questionAndAnswer[0]]
    while(languagesToDisplay.length < 4){
        toAdd = choice(supportedLanguages);
        if(!languagesToDisplay.includes(toAdd)) languagesToDisplay.push(toAdd);
    }
    languagesToDisplay = shuffleList(languagesToDisplay);
    for(i = 0; i<answerButtons.length;i++){
        answerButtons[i].innerHTML = languagesToDisplay[i];
        answerButtons[i].value = languagesToDisplay[i];
        answerButtons[i].disabled = false;
    }
}

function updateText(){
    scoreText.innerHTML = ("Correct: " + correct + " | Incorrect: " + incorrect)
}

function greyOutButtonByAnswer(answer){
    for(i = 0; i<answerButtons.length;i++){
        if(answerButtons[i].value == answer) answerButtons[i].disabled = true;
    }
}

function giveAnswer(answer){
    if(answer == questionAndAnswer[0]) {createQuestion(); correct++;}
    else {greyOutButtonByAnswer(answer); incorrect++;}

    updateText();
}

function answerCorrect(){

}

function answerIncorrect(){

}

window.addEventListener('load', function () {
    getElements();
    createQuestion();
})
