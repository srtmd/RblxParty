const link1 = "https://www.roblox.com/games/start?launchData=%7B%22giftTarget%22%3A%22";
const link2 = "%22%7D&placeId=8737602449";
const param = window.location.search;
const urlpa = new URLSearchParams(param);
if (urlpa.has('donate')) {
	const usr = urlpa.get('donate');
	window.location.replace(link1 + usr + link2);
}