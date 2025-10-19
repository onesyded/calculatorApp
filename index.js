let current_input = "0";
let previous_input = " ";
let operator = " ";
let shouldclear = true;
const screen = document.getElementById("screen");

function appendNumber(num) {
    if (shouldclear) {
        current_input = num;
        shouldclear = false;
    }
    
    else{
        current_input+= num;
    }
    updateScreen()

}
function appendOperator(op) {
    previous_input=current_input;
    operator = op;
    current_input = operator;
    shouldclear = true;
    updateScreen()
}
function updateScreen() {
   screen.textContent = current_input; 
}
function calculate() {
    switch (operator) {
        case '+':
           current_input = Number(previous_input) + Number(current_input); 
            break;
        case '-':
            current_input = Number(previous_input) - Number(current_input);
            break;
        case 'x':
            current_input= Number(previous_input) * Number(current_input);
            break;
        case '/':
            current_input = Number(previous_input) / Number(current_input);
        default:
            break;
    }
    updateScreen()
}

function clearscreen() {
    previous_input = "";
    current_input = "0";
    operator = "";
    shouldclear = true;
    updateScreen()
}