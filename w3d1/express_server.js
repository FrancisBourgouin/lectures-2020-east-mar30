const express = require("express");
const server = express();
const port = 9001;

server.set("view engine", "ejs");

// Middlewares Logger logs urls when a request happens

const myLogger = function (req, res, next) {
	console.log("LOGGED", req.url, req.status);
	next();
};
server.use(myLogger);

// Middleware Redirector, redirects if student is not part of the URL
const redirector = (req, res, next) => {
	if (req.url.includes("student")) {
		console.log(req.url);
		next();
	} else {
		res.redirect("/student");
	}
};
// server.use(redirector);

// When the server gets a request that is a GET with the url of /
server.get("/", (req, res) => res.send("Hello World!"));

server.get(
	"/chicken",
	(request, res) => res.send(`Mwahaha you ${request.method} the chicken`)
	// res.send("Mwahahaha you "+req.method+" the chicken")
);

// Use request parameters to fetch a dynamic value instead of hardcoding all the routes

// server.get("/student/1");
// server.get("/student/2");
// server.get("/student/3");
// server.get("/student/4");
// server.get("/student/...");

server.get("/student/:student_id", (req, res) => {
	const students = {
		"1": "Andrew",
		"2": "Isabella",
		"3": "Amro",
	};
	res.send(students[req.params.student_id]);
});

// All http methods have a corresponding method in server as seen below :

// server.post();
// server.put();
// server.delete();

// We start the server by asking it to listen to a specific port

// Team 1

server.get("/team1", (req, res) => {
	const faveFoods = {
		isabella: "sushi",
		neihy: "bananas",
		ariane: "avocado",
	};

	const templateVars = {
		faveFoods,
	};
	// res.send(
	// 	`Our favorite foods are: ${faveFoods.isabella}, ${faveFoods.neihy}, ${faveFoods.ariane}`
	// );
	// res.send(
	// 	`<h2>Our favorite foods are:</h2> <ul> <li>${faveFoods.isabella}</li>  <li>${faveFoods.neihy}</li> <li>${faveFoods.ariane}</li></ul>`
	// );
	res.render("favorite_foods", templateVars);
});

// Team 2

let favHobbies = ["reading", "walking", "guitar playing"];

server.get("/team2", function (req, res) {
	// res.send(`Our favourite hobbies are: ${favHobbies}`);
	const templateVars = {
		list: favHobbies,
		title: "Hobbies",
	};
	res.render("favorite_arrays", templateVars);
});

// Team 3

const moveList = ["The Intouchables", "Benchwarmers", "Hanna"];
// Your route:
server.get("/team3", (req, res) => {
	// res.send(
	// 	`Favorite movies are: \n Andrew: ${moveList[1]} \n Amro: ${moveList[0]} \n Jacob: ${moveList[2]}`
	// );
	const templateVars = {
		list: moveList,
		title: "Movies",
	};
	res.render("favorite_arrays", templateVars);
});

// Team 4
let favoriteSong = ["Sorry"];

server.get("/team4", function (req, res) {
	res.send(`This is my favorite song ${favoriteSong}`);
});

server.listen(port, () =>
	console.log(`Example app listening at http://localhost:${port}`)
);
