
function myFunction1(){
var x = document.getElementById("de").value;
var y = document.getElementById("para").value;
y = (x*(9/5))+32;
document.getElementById("para").value = y;
}


function myFunction2(){
var x = document.getElementById("de").value;
var y = document.getElementById("para").value;
x = (y - 32)*(5/9);
document.getElementById("de").value = x;
}
var name1=$(".tempDe1").options[$(".tempDe1").selectedIndex].value;
alert('a');