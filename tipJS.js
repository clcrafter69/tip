var inputCheck= document.getElementById("check-amt");
var inputTip = document.getElementById("tip-amt");
var btnCalcCheck = document.getElementById("calc-Check");

var printTip = document.getElementById("print-tip");
var printTot = document.getElementById("print-check-tot");


btnCalcCheck.addEventListener("click",function(){
  printTip.innerText = "Tip Total: " + (parseFloat(inputCheck.value) * parseFloat(inputTip.value)/100).toFixed(2);
  var checkTotal = (parseFloat(inputCheck.value) + (parseFloat(inputCheck.value) * parseFloat(inputTip.value)/100)).toFixed(2);
  //checkTotal = checkTotal.toFixed(2);
  printTot.innerHTML = "Check Total: " + checkTotal;
});


 