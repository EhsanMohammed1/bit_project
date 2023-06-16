const mongoose = require("mongoose");
const productSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    brand: { type: String, required: true },
    dic: { type: String, required: true },
    img: { type: Object, required: true },
    price: { type: Number, required: true },
    cat: { type: String, required: true },
    color: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);
exports.Product = Product;
