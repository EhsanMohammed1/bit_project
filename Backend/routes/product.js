const { Product } = require("../models/porducts.js");
const { auth, isUser, isAdmin } = require("../middleware/auth.js");
const multer = require("multer");
const router = require("express").Router();

//CREATE
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/", isAdmin, upload.single("img"), async (req, res) => {
  try {
    const { name, brand, dic, price, cat, color } = req.body;
    const img = req.file;

    if (img) {
      const product = new Product({
        name,
        brand,
        dic,
        price,
        cat,
        color,
        img: {
          filename: img.filename,
          path: img.path,
          mimetype: img.mimetype,
        },
      });

      // Move the uploaded file to local storage
      const fs = require("fs");
      const sourcePath = req.path;
      const destinationPath = `uploads/${img.filename}`;

      fs.rename(sourcePath, destinationPath, async () => {
        try {
          const savedProduct = await product.save();
          res.status(200).send(savedProduct);
        } catch (error) {
          console.log(error);
          fs.unlink(destinationPath, () => {
            res.status(500).send({ error: "Error saving the product" });
          });
        }
      });
    } else {
      res.status(400).send({ error: "No image file provided" });
    }
  } catch (error) {
    res.status(500).send({ error: "Internal server error" });
  }
});

//DELETE

router.delete("/:id", isAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).send("Product has been deleted...");
  } catch (error) {
    res.status(500).send(error);
  }
});
// get products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).send(products);
  } catch (error) {
    console.log(error);
    req.status(500).send(error);
  }
});

//GET ALL PRODUCTS

router.get("/", async (req, res) => {
  const qbrand = req.query.brand;
  try {
    let products;

    if (qbrand) {
      products = await Product.find({
        brand: qbrand,
      });
    } else {
      products = await Product.find();
    }

    res.status(200).send(products);
  } catch (error) {
    res.status(500).send(error);
  }
});

//GET PRODUCT

router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send(error);
  }
});

//UPDATE

router.put("/:id", isAdmin, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).send(updatedProduct);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
