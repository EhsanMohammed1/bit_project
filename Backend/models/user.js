const mongoose = require("mongoose");

const userModules = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 30 },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    maxlength: 200,
  },
  password: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    maxlength: 1024,
  },
  img: { type: String, required: false },
  isAdmin: { type: Boolean, default: false },
});

const User = mongoose.model("User", userModules);
exports.User = User;
