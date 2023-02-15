var qS = document.querySelector("#qS");
var result = document.getElementById('ntax');
result.value = 0;
var resultp = document.getElementById('ptax');
resultp.value = 0;

function give() {
  result.value = "You gave " + Math.round((qS.value * 7) / 10);
  resultp.value = "You gave " + Math.round((qS.value * 6) / 10) + " in Pls Donate";
}

function recive() {
  result.value = "You need " + Math.round((qS.value * 10) / 7);
  resultp.value = "You need " + Math.round((qS.value * 10) / 6) + " in Pls Donate";
}