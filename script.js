function addition() {
  var numone = document.getElementById("input1").value;
  var numtwo = document.getElementById("input2").value;
  var num1parsed = parseInt(numone);
  var num2parsed = parseInt(numtwo);
  var answer = 0;
  answer = num1parsed + num2parsed;
  var answer1 = (document.getElementById("answer").innerHTML = answer);
  console.log(answer);
}

function substraction() {
  var numone = document.getElementById("input1").value;
  var numtwo = document.getElementById("input2").value;
  var num1parsed = parseInt(numone);
  var num2parsed = parseInt(numtwo);
  var answer = 0;
  answer = num1parsed - num2parsed;
  var answer1 = (document.getElementById("answer").innerHTML = answer);
  console.log(answer);
}
function multiply() {
  var numone = document.getElementById("input1").value;
  var numtwo = document.getElementById("input2").value;
  var num1parsed = parseInt(numone);
  var num2parsed = parseInt(numtwo);
  var answer = 0;
  answer = num1parsed * num2parsed;
  var answer1 = (document.getElementById("answer").innerHTML = answer);
  console.log(answer);
}

function division() {
  var numone = document.getElementById("input1").value;
  var numtwo = document.getElementById("input2").value;
  var num1parsed = parseInt(numone);
  var num2parsed = parseInt(numtwo);
  var answer = 0;
  answer = num1parsed / num2parsed;
  var answer1 = (document.getElementById("answer").innerHTML = answer);
  console.log(answer);
}

