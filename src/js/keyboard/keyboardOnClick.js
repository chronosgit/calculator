import removeTrailingZeros from "./removeTrailingZeros.js";
import getNumberWithChangedSign from "./getNumberWithChangedSign.js";

// Setup

const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

let firstNumber = "0";
let secondNumber = "";
let operation = "";
let didTypeSecondNumber = false;
let finishedOperation = false;

const primaryDisplay = document.querySelector(".numbers_box_result");
const secondaryDisplay = document.querySelector(".numbers_box_operation");

// Functions

const clearEverything = () => {
    firstNumber = "0";
    secondNumber = "";
    operation = "";

    secondaryDisplay.textContent = "Hidden";
    secondaryDisplay.classList.add("hidden");
    primaryDisplay.textContent = firstNumber;
};

const resolveNumber = (n) => {
    if(operation === "") {
        secondaryDisplay.textContent = "";

        if(!finishedOperation) {
            firstNumber = removeTrailingZeros(firstNumber + n);
        } else {
            finishedOperation = true;
            firstNumber = removeTrailingZeros(n);
        }

        primaryDisplay.textContent = firstNumber;
    } else {
        if(didTypeSecondNumber) {
            secondNumber = removeTrailingZeros(secondNumber + n);
        } else {
            didTypeSecondNumber = true;
            secondaryDisplay.textContent = firstNumber + " " + operation;
            secondNumber = removeTrailingZeros(n);
        }

        primaryDisplay.textContent = secondNumber;
    }
}

const changeSign = () => {
    if(operation === "") {
        firstNumber = getNumberWithChangedSign(firstNumber);

        primaryDisplay.textContent = firstNumber;
    } else {
        secondNumber = getNumberWithChangedSign(secondNumber);

        primaryDisplay.textContent = secondNumber;
    }
};

const handleBackspace = () => {
    if(operation === "") {
        if(firstNumber.length === 1) {
            firstNumber = "0";
        } else {
            firstNumber = firstNumber.slice(0, firstNumber.length - 1);
        }

        primaryDisplay.textContent = firstNumber;
    } else {
        if(secondNumber.length === 1) {
            secondNumber = "0";
        } else {
            secondNumber = secondNumber.slice(0, secondNumber.length - 1);
        }

        primaryDisplay.textContent = secondNumber;
    }
};

const resolveOperation = (op) => {
    operation = op;

    if(!didTypeSecondNumber) {
        secondNumber = firstNumber;
    }

    secondaryDisplay.classList.remove("hidden");
    secondaryDisplay.textContent = firstNumber + " " + operation;
};

const makeResult = () => {
    if(secondNumber === "" || operation === "") return;

    const a = parseInt(firstNumber);
    const b = parseInt(secondNumber);
    let result = "";

    secondaryDisplay.textContent = `${firstNumber} ${operation} ${secondNumber} =`;

    switch(operation) {
        case "%":
            result = a % b;
            
            break;
        case "÷":
            if(secondNumber === "0") {
                result = "Division by zero is impossible";
            } else {
                result = a / b;
            }

            break;
        case "x":
            result = a * b;

            break;
        case "-":
            result = a - b;

            break;
        case "+":
            result = a + b;

            break;
        default:
            console.log("Invalid operation");
    }

    operation = "";
    firstNumber = result;
    secondNumber = "";
    didTypeSecondNumber = false;
    finishedOperation = true;

    primaryDisplay.textContent = result;
};

// Main

const keyboardOnClick = (e) => {
    const triggerEl = e.target;

    if(triggerEl.className === "keyboard") return;

    const text = triggerEl.textContent;

    if(numbers.includes(text)) {
        resolveNumber(text);
    } else if(text === "C") {
        clearEverything();
    } else if(text === "+/-") {
        changeSign();
    } else if(text === "=") {
        makeResult();
    } else if(text === "⌫") {
        handleBackspace();  
    } else {
        resolveOperation(text);
    }
};

export default keyboardOnClick;