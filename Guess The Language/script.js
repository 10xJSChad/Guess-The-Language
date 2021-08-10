var supportedLanguages = ["English", "German", "Spanish", "Icelandic"];
var questionsList = [
    ["English", "It is a far, far better thing that I do, than I have ever done; it is a far, far better rest I go to than I have ever known"],
    ["English", "All we have to decide is what to do with the time that is given us."],
    ["German", "Nur die Harten kommen in den Garten"],
    ["German", "Alles hat ein Ende, nur die Wurst hat zwei"],
    ["Spanish", "Que si las manos son nuestras, es nuestro lo que nos den"]
];

var questionAndAnswer = ["bunghole", 2];
var questionText;
var answerButtons;

function getElements(){
    questionText = document.getElementById("questionText");
    answerButtons = document.getElementsByClassName("answer-button");
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

function greyOutButtonByAnswer(answer){
    for(i = 0; i<answerButtons.length;i++){
        if(answerButtons[i].value == answer) answerButtons[i].disabled = true;
    }
}

function giveAnswer(answer){
    if(answer == questionAndAnswer[0]) createQuestion();
    else greyOutButtonByAnswer(answer);
}

function answerCorrect(){

}

function answerIncorrect(){

}

window.addEventListener('load', function () {
    getElements();
    createQuestion();
})
