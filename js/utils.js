// utils.js
export function operate(a, b, operation) {
    const operations = {
        "+": (x, y) => x + y,
        "-": (x, y) => x - y,
        "*": (x, y) => x * y,
        "/": (x, y) => x / y,
    };

    const func = operations[operation];
    if (func) {
        return func(a, b);
    } else {
        console.error("Invalid operator: " + operation);
    }
}
