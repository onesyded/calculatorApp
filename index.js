let curerent_input = "0";
let previous_input = " ";
let operator = " ";
const screen = document.getElementById("screen");
function appendNumber(num) {
    curerent_input = curerent_input + num;
    screen.textContent = curerent_input;
}
function appendOperator(op) {
    curerent_input = previous_input;
    operator = op;
    screen.textContent = operator;
}