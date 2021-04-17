var numone = document.getElementById("btn01");
var numtwo = document.getElementById("btn02");
var num1parsed = parseInt(numone);
var num2parsed = parseInt(numtwo);
var answer = 0;
function add() {
  answer = num1parsed + num2parsed;
}
var answerpara = document.CreateElement("p");
var answerstring = document.CreateTextNode(answer);
answerpara.appendChild(answerstring);
