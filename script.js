"use strict";

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

const question = document.querySelector(".question");
const optionsDiv = document.querySelector(".options");
const buttonSubmit = document.querySelector(".button-submit");
const buttonNew = document.querySelector(".button-new");
const scoreText = document.querySelector(".score");
const inputField = document.querySelector(".answer");

function newQuestion() {
  optionsDiv.innerHTML = "";
  inputField.value = "";
  scoreText.textContent = `Poäng: ${score}`;
  randomNum = Math.floor(Math.random() * answers.length);
  currentQuestion = questionsArray[randomNum];
  currentAnswer = answers[randomNum];
  currentOptions = options[randomNum];
  currentOptionsAndAnswer = currentOptions.concat(currentAnswer);
  shuffle(currentOptionsAndAnswer);
  question.textContent = currentQuestion;
  for (let i = 0; i < currentOptionsAndAnswer.length; i++) {
    const newParagraph = document.createElement("p");
    newParagraph.textContent = `${i + 1}: ${currentOptionsAndAnswer[i]}`;
    optionsDiv.appendChild(newParagraph);
  }
}

question.textContent = "Hello World!";

const questions = {
  q1: "Vilket tal svarar på allt?",
  qa1: "42",
  q2: "Vid vilken temperatur kokar vatten?",
  qa2: "373 K",
  q3: "Vad heter datatypen som denna fråga är lagrad i?",
  qa3: "Object",
  q4: "Den fysikaliska definitionen för impuls är...",
  qa4: "Den skillnad i rörelsemängd som ett föremål får vid en stöt",
};

const optionsq1 = ["41", "43", "44", "45"];
const optionsq2 = ["273 K", "0 °F", "32 °F", "100 K"];
const optionsq3 = ["Array", "Tree", "Stack", "Queue"];
const optionsq4 = [
  "Kraften på ett föremål delat med den tid som den verkar",
  "Den kraft som påverkar ett föremål",
  "Den tiden som en kraft verkar på ett föremål",
];

const questionsArray = [
  "Vilket tal svarar på allt?",
  "Vid vilken temperatur kokar vatten?",
  "Vad heter datatypen som denna fråga är lagrad i?",
  "Den fysikaliska definitionen för impuls är...",
];

const answers = [
  "42",
  "373 K",
  "Object",
  "Den skillnad i rörelsemängd som ett föremål får vid en stöt",
];

const options = [optionsq1, optionsq2, optionsq3, optionsq4];

let randomNum,
  currentQuestion,
  currentAnswer,
  currentOptions,
  currentOptionsAndAnswer;

let score = 0;

newQuestion();

question.textContent = currentQuestion;
scoreText.textContent = `Poäng: ${score}`;

buttonSubmit.addEventListener("click", () => {
  const input = inputField.value;
  if (currentOptionsAndAnswer[input - 1] === currentAnswer) {
    alert("Rätt svar!");
    score++;
  } else {
    alert("Fel svar!");
  }
});

buttonNew.addEventListener("click", newQuestion);
