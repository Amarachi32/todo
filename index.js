const express = require("express");
const mongoose = require("mongoose");
const post = require("./models/posts.model");

// const ejs = require("ejs");
require("dotenv").config();
const app = express();
const { postRouter } = require("./routes/postRoutes");

port = process.env.PORT || 8000;

app.use(express.json());

app.use(express.urlencoded({ extended: true, limit: "10kb" }));
// app.use(express.static("public"));

app.use("/posts", postRouter);

mongoose
  .connect(process.env.DATABAESE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log("mongodb connected");
  })
  .catch((error) => console.log("error"));

app.listen(port, () => {
  console.log("server listening on port 3000");
});
