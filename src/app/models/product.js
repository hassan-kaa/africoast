import mongoose from "mongoose";
const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: [true, "Product already exists !"],
    required: [true, "Product is required!"],
  },
  description: {
    type: String,
    required: [true, "tag is required!"],
  },
  price: {
    type: Number,
    required:[true,"price is required"]
  },
  discount: {
    type: Number,
    required:false
  },
  images: {
    type: mongoose.Types.Buffer,
    required:false
  },
});

const Product = mongoose.models.Product || mongoose.model("Product", ProductSchema);

export default Product;
