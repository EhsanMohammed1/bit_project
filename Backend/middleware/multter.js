// const multer = require("multer");
// const product = require("./routes/product.js");
// const express = require("express");

// const app=express();

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/");
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     const fileExtension = file.originalname.split(".").pop();
//     cb(null, file.fieldname + "-" + uniqueSuffix + "." + fileExtension);
//   },
// });

// app.use("/api/products", product);

// exports.upload = multer({ storage: storage });

// exports.single = multer({ storage: storage });
