require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { dbConnection } = require("./config/db");

app.use(bodyParser.json());

app.listen(process.env.PORT, () => {
  console.log("");
  console.log(`\x1b[32m **************************** \x1b[0m`);
  console.log(`\x1b[32m ** Listening on Port:${process.env.PORT} ** \x1b[0m`);
  console.log(`\x1b[32m **************************** \x1b[0m`);
});

dbConnection();

app.use("/books", require("./routers/books.routes"));

app.get("/", (req, res) => {
  res.send("Home");
});
