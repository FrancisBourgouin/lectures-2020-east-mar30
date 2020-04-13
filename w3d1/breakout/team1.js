// Using template literals, build a route handler for the route '/team1' that will send a string with your favorite foods
// Example route :

server.get("/", function (req, res) {
	res.send("Just got a GET request to '/'");
});

// Your route:

server.get("/team1", (req, res) => {
	const faveFoods = {
		isabella: "sushi",
		neihy: "bananas",
		ariane: "avocado",
	};
	res.send(
		`Our favorite foods are: ${faveFoods.isabella}, ${faveFoods.neihy}, ${faveFoods.ariane}`
	);
});
