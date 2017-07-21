var inputCheck= document.getElementById("check-amt");
var inputTip = document.getElementById("tip-amt");
var btnCalcCheck = document.getElementById("calc-Check");

var printTip = document.getElementById("print-tip");
var printTot = document.getElementById("print-check-tot");


btnCalcCheck.addEventListener("click",function(){
  printTip.innerText = "Tip: " + inputCheck.value * inputTip.value;
  var checkTotal = (inputCheck.value * inputTip.value) + parseInt(inputCheck.value);
  printTot.innerHTML = "Check Total: " + checkTotal;
});

/*btnGreet2.addEventListener("click",function(){
  printArea.innerText = btnGreet2.value + " " + inputText.value;
});

btnGreet3.addEventListener("click",function(){
  printArea.innerText = btnGreet3.value + " " + inputText.value;
});

btnGreet4.addEventListener("click",function(){
  printArea.innerText = btnGreet4.value + " " + inputText.value;
});
btnClear.addEventListener("click",function(){
  printArea.innerText = " ";
});*/
 