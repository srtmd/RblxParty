var qS = document.querySelector("#qS");
var result = document.getElementById('ntax');
result.innerHTML = 0;
var resultp = document.getElementById('ptax');
resultp.innerHTML = 0;

function give() {
  result.innerHTML = "você deu " + Math.round((qS.value * 7) / 10);
  resultp.innerHTML = "você deu " + Math.round((qS.value * 6) / 10);
}

function recive() {
  result.innerHTML = Math.round((qS.value * 10) / 7) + " para " + qS.value;
  resultp.innerHTML = Math.round((qS.value * 10) / 6) + " para " + qS.value;
}