require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const urlRoute = require("./routes/url");
const URL = require("./models/url");
const { dbConnection2 } = require("./dbconnect");
const app = express();

const port = process.env.PORT;

app.use("/url", urlRoute);
app.use(express.json());

dbConnection2();
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
