function display(val){
  document.getElementById("result").value += val;
}
function myFunction(event){
  if(
    event.key == '0' || event.key == '1' ||
    event.key == '2' || event.key == '3' ||
    event.key == '4' || event.key == '5' ||
    event.key == '6' || event.key == '7' ||
    event.key == '8' || event.key == '9' ||
    event.key == '+' || event.key == '-' ||
    event.key == 'X' || event.key == '÷' ){
    document.getElementById("result").value += event.key;
    }
}
var calc = document.getElementById("calculator");
calc.onkeyup = function(event){
  if(event.keyCode === 13){
    console.log("Enter");
    let resultValue = document.getElementById("result").value;
    console.log(resultValue);
    solve();
  }
}

function solve(){
  let resultValue = document.getElementById("result").value;
  let y = math.evaluate(resultValue);
  document.getElementById("result").value = mathResult;
}

function clear(){
  document.getElementById("result").value = "";
}
