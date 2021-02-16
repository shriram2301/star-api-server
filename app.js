import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import config from "./connect-db";
const loginRouter = require("./src/router/login/loginRouter");
const app = express();
const db = config;

const PORT = 8080;
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(cors("*"));

app.use("/", loginRouter);

db.authenticate()
  .then(() => {
    console.log("Database connected...");
  })
  .catch((err) => {
    console.log("Error: " + err);
  });

app.get("/", (req, res) => {
  res.send("hello world");
});

db.sync()
  .then(() => {
    app.listen(PORT, console.log(`Server started on port ${PORT}`));
  })
  .catch((err) => console.log("Error: " + err));
