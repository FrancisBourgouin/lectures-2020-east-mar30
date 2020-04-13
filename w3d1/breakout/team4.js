// Using template literals, build a route handler for the route '/team4' that will send a string with your favorite songs

// Example route :

server.get("/", function (req, res) {
	res.send("Just got a GET request to '/'");
});

// Your route:
let favouriteSong = ["Sorry"];

server.get("/team4", function (req, res) {
	res.send(`This is my favorite song ${favoriteSong}`);
});
