var numone = document.getElementById("btn01");
var numtwo = document.getElementById("btn02");
var num1parsed = parseInt(numone);
var num2parsed = parseInt(numtwo);
int answer = 0;
function add() {
  answer = num1parsed + num2parsed;
}
str answerstring = document.CreateTextNode(answer);
