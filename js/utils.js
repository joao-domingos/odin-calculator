var a, b, operation;

function operate(a, b, operation) {
    switch (operation) {
        case "+":
            return add(a, b);
            break;
        case "-":
            return sub(a, b);
            break;
        case "*":
            return multiply(a, b);
            break;
        case "/":
            return divide(a, b);
            break;
        default:
            console.log("invalid operation")
            break;
    }
}

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}