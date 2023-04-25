const link1 = "https://www.roblox.com/games/start?launchData=%7B%22giftTarget%22%3A%22";
const link2 = "%22%7D&placeId=8737602449";
const param = window.location.search;
const urlpa = new URLSearchParams(param);
if (urlpa.has('donate')) {
	const usr = urlpa.get('donate');
	document.title = usr + " need you!";
	document.description = "Donate Robux to " + usr + " in Pls Donate!";
	document.querySelectorAll('meta[property=og\\:image]')[0].setAttribute('content', 'http://www.roblox.com/Thumbs/Avatar.ashx?x=150&y=150&Format=Png&username=' + usr);
	window.location.replace(link1 + usr + link2);
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
