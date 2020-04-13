// Using template literals, build a route handler for the route '/team2' that will send a string with your favorite hobbies

// Example route :

server.get("/", function (req, res) {
	res.send("Just got a GET request to '/'");
});

// Your route:

let favHobbies = ["reading", "walking", "guitar playing"];

server.get("/team2", function (req, res) {
	res.send(`Our favourite hobbies are: ${favHobbies}`);
});
