//Adds together two numbers
function add (a, b) {
    return a + b; 
}

//Subtracts two numbers
function subtract (a, b) {
    return a - b; 
}

//Multiplies two numbers together
function multiply (a, b) {
    return a * b; 
}

//Divides two numbers
function divide (a, b) {
    return a / b; 
}

function increment (n) {
    n++
    return n;
}

function decrement(n) {
    n--
    return n;
}

function makeInt(string) {
    let n = parseInt(string, 10);
    return n;
}

function preserveDecimal(string) {
    let n = parseFloat(string, 10);
    return n;
}