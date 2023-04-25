const link1 = "https://www.roblox.com/games/start?launchData=%7B%22giftTarget%22%3A%22";
const link2 = "%22%7D&placeId=8737602449";
const param = window.location.search;
const urlpa = new URLSearchParams(param);
//document.getElementById("don").style.display = "none"; 
if (urlpa.has('donate')) {
	const usr = urlpa.get('donate');
	document.getElementById("don").style.display = "block"; 
	document.getElementById("menu").style.display = "none";
	document.getElementById("bq").style.display = "none";
	document.title = usr + " need you!";
	document.getElementById("uname").innerHTML = "Donate Robux to " + usr + " in Pls Donate!";
	window.location.replace(link1 + usr + link2);
	document.getElementById("goto").onclick = function() {
       location.href = link1 + usr + link2;
   }
}

function getUserID()
{
	const user = urlpa.get('donate');
    fetch(`https://www.roblox.com/users/profile?username=${user}`)
        .then(r => {
            if (!r.ok) { throw "Invalid response"; }
            return r.url.match(/\d+/)[0];
        })
        .then(id => {
            console.log(id);
        })
}
