const link1 = "https://www.roblox.com/games/start?launchData=%7B%22giftTarget%22%3A%22";
const link2 = "%22%7D&placeId=8737602449";
const link3 = "https://www.roblox.com/users/profile?username=";
const param = window.location.search;
const urlpa = new URLSearchParams(param);
//document.getElementById("don").style.display = "none"; 
if (urlpa.has('d')) {
	const usr = urlpa.get('d');
	document.title = usr + " need you!";
	window.location.replace(link1 + usr + link2);
}

if (urlpa.has('p')) {
	const usr = urlpa.get('p');
	document.title = usr + " Profile";
	window.location.replace(link3 + usr);
}