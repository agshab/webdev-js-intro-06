"use strict";

const submissionBtn = document.getElementById("submission-btn");
const evenOrOddElement = document.getElementById("even-or-odd");
const sumTheNumbersElement = document.getElementById("sum-the-numbers");
const createNumberArrayElement = document.getElementById("create-number-array");

function evenOrOdd() {
    const num = 3; // The number to check
    if (num % 2 === 0) {
        evenOrOddElement.textContent = "Even"; // Set the text content to "Even" if num is even
    } else {
        evenOrOddElement.textContent = "Odd"; // Set the text content to "Odd" if num is odd
    }
}

function sumTheNumbers() {
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        sum += i; // Add each number to sum
    }
    sumTheNumbersElement.textContent = sum; // Display the sum in the element
}

function createNumberArray() {
    const numberArray = [];
    for (let i = 1; i <= 10; i++) {
        numberArray.push(i); // Add each number from 1 to 10 to the array
    }
    createNumberArrayElement.textContent = numberArray.join(', '); // Display the array as a comma-separated string
}

function render() {
    evenOrOdd();
    sumTheNumbers();
    createNumberArray();
}

submissionBtn.addEventListener("click", function () {
    render(); // Call the render function when the button is clicked
});
