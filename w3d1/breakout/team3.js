// Using template literals, build a route handler for the route
// '/team3' that will send a string with your favorite movies

// Example route :

server.get("/", function (req, res) {
	res.send("Just got a GET request to '/'");
});

const moveList = ["The Intouchables", "Benchwarmers", "Hanna"];
// Your route:
server.get("/team3", (req, res) => {
	res.send(
		`Favorite movies are: \n Andrew: ${moveList[1]} \n Amro: ${moveList[0]} \n Jacob: ${moveList[2]}`
	);
});
