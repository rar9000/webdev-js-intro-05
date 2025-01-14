"use strict";

const todos = [
    "Wash the dishes",
    "Clean the gutters",
    "Mow the yard",
    "Do some coding",
    "Rake the leaves",
];

// Declare mutable variables
let shiftValue;
let popValue;

// DOM element references
const answerOneEl = document.getElementById("answer-one");
const answerTwoEl = document.getElementById("answer-two");
const answerFourEl = document.getElementById("answer-four");
const answerFiveEl = document.getElementById("answer-five");
const answerSixEl = document.getElementById("answer-six");
const submissionBtn = document.getElementById("submission-btn");

function updateAnswerOne() {
    answerOneEl.innerText = todos; 
}

function updateAnswerTwo() {
    answerTwoEl.innerText = todos[2]; // "Mow the yard"
}

function removeLastValue() {
    popValue = todos.pop(); // "Rake the leaves"
}

function updateAnswerFour() {
    removeLastValue();
    answerFourEl.innerText = todos; // "Wash the dishes", "Clean the gutters", "Mow the yard", "Do some coding"
}

function reverseTodoList() {
    todos.reverse(); // Reverse the array
}

function updateAnswerFive() {
    reverseTodoList();
    answerFiveEl.innerText = todos; // "Do some coding", "Mow the yard", "Clean the gutters", "Wash the dishes"
}

function removeFirstValue() {
    shiftValue = todos.shift(); // "Do some coding"
}

function addShiftAndPopValues() {
    todos.push(shiftValue, popValue); 
}

function updateAnswerSix() {
    addShiftAndPopValues();
    answerSixEl.innerText = todos; // "Mow the yard", "Clean the gutters", "Wash the dishes", "Do some coding", "Rake the leaves"
}

function render() {
    updateAnswerOne();
    updateAnswerTwo(); 
    updateAnswerFour(); 
    updateAnswerFive(); 
    removeFirstValue(); 
    updateAnswerSix();
}

submissionBtn.addEventListener("click", function () {
    render();
});