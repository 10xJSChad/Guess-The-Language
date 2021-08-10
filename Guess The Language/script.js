//Elements
var questionText;
var answerButtons;
var scoreText;

//Languages & questions
var supportedLanguages = ["English", "German", "Spanish", "Icelandic", "Swedish", "Norwegian", "Portuguese", "Italian"];
var questionsList = [
    ["Swedish", "Jag vill känna hur slugheten får min hjärna att arbeta"],
    ["Swedish", "Vem har väl förlitat sig på själva skadan"],
    ["Swedish", "Det finns en motvind som jag aldrig känt"],
    ["Norwegian", "Hastverk er ikke bra for Dem. De har god tid! Ta det med ro, nyt dagen og les noen dikt."],
    ["Norwegian", "Bønder sine økser brynte hvor en hær dro frem"],
    ["Icelandic", "Blíndur er bóklaus ma∂ur."],
    ["Icelandic", "Risastór stjarna, miklu stærri en við getum ímyndað okkur"],
    ["Italian", "Si dice sempre il lupo più grande che non è."],
    ["Italian", "La famiglia è la patria del cuore. "],
    ["Portuguese", "Quem vê cara não vê coração"],
    ["Portuguese", "Mais vale um pássaro na mão do que dois voando"],
    ["Portuguese", "Cão que ladra não morde"], 
    ["English", "It is a far, far better thing that I do, than I have ever done; it is a far, far better rest I go to than I have ever known"],
    ["English", "All we have to decide is what to do with the time that is given us."],
    ["German", "Nur die Harten kommen in den Garten"],
    ["German", "Alles hat ein Ende, nur die Wurst hat zwei"],
    ["Spanish", "Que si las manos son nuestras, es nuestro lo que nos den"],
    ["Spanish", "No me pagen porque cante"],
    ["Spanish", "Escucha, yo vengo a cantar"],
    ["Spanish", "Papel contra balas, no puede servir"]
];

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
