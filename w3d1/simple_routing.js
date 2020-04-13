const http = require("http");

const PORT = 9001; // IT'S OVER 9000!!!

const randomFunction = () => {
	return Math.random();
};

const server = http.createServer((request, response) => {
	console.log(`path : ${request.url} method: ${request.method}`);

	const urls = {
		"/chicken": "Chickens are cool",
		"/": "Welcome !",
		"/tip": "Thankyou for the tip",
		"/random": randomFunction(),
	};

	response.end(urls[request.url]);
});

server.listen(PORT, () => console.log("Server is listening"));
