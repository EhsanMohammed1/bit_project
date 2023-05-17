const dotenv = require("dotenv");
const clodinaryModule = require("cloudinary");
const { model } = require("mongoose");

clodinaryModule.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_ley: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
model.exports = clodinaryModule;
