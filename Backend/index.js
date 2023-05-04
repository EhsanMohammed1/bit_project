const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const products = require("./porducts.js");

const app = express();
require("dotenv").config();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("welcome to our first online shopping");
});
app.get("/products", (req, res) => {
  res.send(products);
});

const port = process.env.PORT || 7000;
const url = process.env.BD_URL;
app.listen(port, console.log(`our backend listen on port ${port}`));

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mongoDB successfully conected......"))
  .catch((err) => console.log("mongoDB connection faild....", err.message));
