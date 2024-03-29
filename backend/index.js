const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const { cwd } = require("process");

const register = require("./routes/register.js");
const login = require("./routes/login.js");
const products = require("./porducts.js");
const productRouter = require("./routes/product.js");
const user = require("./routes/users.js")
const app = express();
app.use("/uploads", express.static(process.cwd() + "/uploads"));
app.use(express.static("public"));
app.use("/uploads", express.static("image"));

require("dotenv").config();
app.use(express.json({ limit: "50mb" }));
app.use(cors());

app.use("/api/register", register);
app.use("/api/login", login);
app.use("/api/products", productRouter);
app.use("/api/users", user);

app.get("/", (req, res) => {
  res.send("Welcome our to online shop API...");
});

app.get("/products", (req, res) => {
  res.send(products);
});

const url = process.env.BD_URL;
const port = process.env.PORT || 8011;

app.listen(port, () => {
  console.log(`Server running on port: ${port}...`);
});

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connection scucessfull..."))
  .catch((error) => console.error("MongoDB connection failed:", error.message));
