var qS = document.querySelector("#qS");
var result = document.getElementById('ntax');
result.innerHTML = 0;
var resultp = document.getElementById('ptax');
resultp.innerHTML = 0;

function give() {
  result.innerHTML = "you gave " + Math.round((qS.value * 7) / 10);
  resultp.innerHTML = "you gave " + Math.round((qS.value * 6) / 10);
}

function recive() {
  result.innerHTML = Math.round((qS.value * 10) / 7) + " to " + qS.value;
  resultp.innerHTML = Math.round((qS.value * 10) / 6) + " to " + qS.value;
}