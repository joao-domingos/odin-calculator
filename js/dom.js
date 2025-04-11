import { operate } from './utils.js';

// State variables
let a = "";
let b = "";
let operation = "";
let inputStage = "a"; // can be 'a' or 'b'

const screen = document.getElementsByClassName("screen")[0];

const numeroButtons = document.querySelectorAll(".numeros button");
const operatorButtons = document.querySelectorAll(".operators button");

// Attach click events for number buttons
for (let button of numeroButtons) {
    button.onclick = function () {
        // Append the button value to the screen
        screen.innerText += this.innerText;
        // Append to a or b based on the stage
        if (inputStage === "a") {
            a += this.innerText;
        } else if (inputStage === "b") {
            b += this.innerText;
        }
    }
}

// Attach click events for operator buttons
for (let button of operatorButtons) {
    button.onclick = function () {
        // If equals or clear are pressed, handle them separately
        if (this.innerText === "=") {
            // Convert operands to numbers and perform operation
            const result = operate(parseFloat(a), parseFloat(b), operation);
            screen.innerText = result.toFixed(5);
            // Reset state for next calculation (or store result as new 'a')
            a = result.toString();
            b = "";
            operation = "";
            inputStage = "a";
        } else if (this.innerText.toLowerCase() === "clear") {
            // Clear the screen and reset state
            screen.innerText = "";
            a = "";
            b = "";
            operation = "";
            inputStage = "a";
        } else {
            // Only set the operation if it hasn't been set yet
            if (operation) {
                let result = operate(parseFloat(a), parseFloat(b), operation);
                screen.innerText = result.toFixed(5) + this.innerText;
                a = result.toString();
                b = "";
                operation = this.innerText;
                inputStage = "b";
            }
            else if (!operation) {
                screen.innerText += this.innerText;
                operation = this.innerText;
                inputStage = "b"; // now the user will input the second operand
            }
        }
    }
}
