var numone = document.getElementById("input1").value;
var numtwo = document.getElementById("input2").value;
var num1parsed = parseInt(numone);
var num2parsed = parseInt(numtwo);
var answer = 0;
function addition() {
  answer = num1parsed + num2parsed;
  console.log(answer);
}
var answer1 = (document.getElementById("answer").innerHTML = answer);
