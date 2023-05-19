import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  dic: { type: String, required: true },
  img: { type: Object, required: true },
  price: { type: Object, required: true },
  cat: { type: String, required: true },
  color: { type: Buffer, contentType: String, required: true },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
