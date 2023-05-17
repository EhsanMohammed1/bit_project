import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  dic: { type: String, required: true },
  img: { type: Object, required: true },
  price: { type: Object, required: true },
  cat: { type: String, required: true },
  color:{type:String,required:true}
});

const productModel=mongoose.model("product",productSchema)

export default productModel