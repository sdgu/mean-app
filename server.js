const express = require("express");
const path = require("path");
const http = require("http");
const bodyParser = require("body-parser");

const api = require("./server/routes/api");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.set("appPath", "dist");
app.use(express.static(path.join(__dirname, "dist")));

app.use("/api", api);

app.get("/*", (req, res) =>
{
	res.sendFile(path.join(__dirname, "dist/index.html"));
	// res.sendFile(app.get("appPath") + "/index.html");
});

const port = process.env.PORT || "4210";
app.set("port", port);

const server = http.createServer(app);

server.listen(port, () => console.log(`API running on port ${port}`));
