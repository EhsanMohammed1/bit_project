const {User} = require("../models/user");
const express = require("express");

const router = express.Router();

// Get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find().sort({ _id: -1 });
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send(err,"hellooooo");
  }
});

//delete product id 

router.delete("/:id", async (req, res) => {
  try {
    const deleteuser= await User.findByIdAndDelete(req.params.id);
    res.status(200).send(deleteuser);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
