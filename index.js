const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const shortenLink = require("./app/shortenLink");
const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

const run = async () => {
  await mongoose.connect("mongodb://localhost/shortenLink", {useNewUrlParser: true, useUnifiedTopology: true});

  app.use("/", shortenLink());

  console.log("Connected to mongo DB");

  app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
  });
};

run().catch(console.log);

