// const PORT = 3000;
// const express = require("express");
// const server = express();
// const bodyParser = require("body-parser");
// server.use(bodyParser.json());
// require("dotenv").config();
// // console.log(process.env.JWT_SECRET);

// const morgan = require("morgan");
// server.use(morgan("dev"));

// const apiRouter = require("./api");
// server.use("/api", apiRouter);
// const { client } = require("./db");
// client.connect();

// server.listen(PORT, () => {
//   console.log("The server is up on port", PORT);
// });
require("dotenv").config();

const { PORT = 3000 } = process.env;
const express = require("express");
const server = express();

const bodyParser = require("body-parser");
server.use(bodyParser.json());

const morgan = require("morgan");
server.use(morgan("dev"));

server.use((req, res, next) => {
  console.log("<____Body Logger START____>");
  console.log(req.body);
  console.log("<_____Body Logger END_____>");

  next();
});

const apiRouter = require("./api");
server.use("/api", apiRouter);

const { client } = require("./db");
client.connect();

server.listen(PORT, () => {
  console.log("The server is up on port", PORT);
});
