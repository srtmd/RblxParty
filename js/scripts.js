var qS = document.querySelector("#qS");
var result = document.getElementById('ntax');
var resultp = document.getElementById('ptax');
var resultt = document.getElementById('nor');
var generatedlink = document.getElementById('gdl');

function give() {
    //before
  resultt.innerHTML = "You would get:";
  result.innerHTML = Math.round((qS.value * 7) / 10);
  resultp.innerHTML = "or " + Math.round((qS.value * 6) / 10) + " in Pls Donate";
}

function recive() {
    //after
  resultt.innerHTML = "You would need:";
  result.innerHTML = Math.round((qS.value * 10) / 7);
  resultp.innerHTML = "or " + Math.round((qS.value * 10) / 6) + " in Pls Donate";
}
 
function oDon() {
    var val = document.getElementById('le').value;
    if (val === "") {
        alert("put a username first.");
    }else{
        var inva = document.getElementById('le');
        window.open("https://rblx.party/?donate=" + inva.value, "_blank"); 
    }    
}  

function copyLink() {
    var vale = document.getElementById("le");
    if (vale.value === "") {
        alert("put a username first.");
    }else{
        vale.select(); 
        vale.setSelectionRange(0, 99999);
        generatedlink.innerHTML = "https://rblx.party/?donate=" + vale.value;
        navigator.clipboard.writeText(generatedlink.innerHTML);
        alert("Link generated and copied to clipboard!");
    }    
}

var slider = document.getElementById("la");
var output = document.getElementById("sl");
output.innerHTML = "Length: " + slider.value;

slider.oninput = function() {
  output.innerHTML = "Length: " + this.value;
}

function randomString() {  
  var len = document.querySelector("#la");
            //define a variable consisting alphabets in small and capital letter  
    var characters = "_abcdefghijklmnopqrstuvwxyz0123456789";  
              
            //specify the length for the new string  
    var lenString = len.value;  
    var randomstring = '';  
  
            //loop to select a new character in each iteration  
    for (var i=0; i<lenString; i++) {  
        var rnum = Math.floor(Math.random() * characters.length);  
        randomstring += characters.substring(rnum, rnum+1);  
    }  
  
             //display the generated string   
    document.getElementById("ru").value = randomstring;  
}  

function copyText() {
        var inva = document.getElementById("ru");
        inva.select(); 
        inva.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(inva.value);
}
