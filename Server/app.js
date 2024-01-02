import express from "express";

const app = express();

app.get("/status", (request, response) => {
  response.send(JSON.stringify({ message: "Service healthy" }));
});

app.listen(4040, () => console.log("Listening on port 4040"));

const myMiddleware = (request, response, next) => {
  // do something with request and/or response
  next(); // tell express to move to the next middleware function
};

app.use(myMiddleware); // use the myMiddleware for every request to the app
