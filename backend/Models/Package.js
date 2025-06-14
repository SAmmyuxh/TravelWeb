import mongoose from "mongoose";
const packageSchema = new mongoose.Schema({
  title: String,
  price: Number,
  image: String,
  duration: String,
  rating: Number,
});
const Package = mongoose.model("Package", packageSchema);
export default Package;