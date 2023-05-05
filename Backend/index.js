const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const products = require("./porducts.js");
const register = require("./routes/register.js");
const login = require("./routes/login.js");

const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use("/api/register", register);
app.use("/api/login", login);

app.get("/", (req, res) => {
  app.get("/products", (req, res) => {
    res.send(products);
  });
  res.send("welcome to our first online shopping");
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
