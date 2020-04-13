const http = require("http");

const PORT = 9001; // IT'S OVER 9000!!!

const server = http.createServer((request, response) => {
	console.log(request);
	response.end("Don't forget to tip your server");
});

server.listen(PORT, () => console.log("Server is listening", server));
