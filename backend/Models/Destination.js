import mongoose from "mongoose";
const destinationSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
  price: String,
});
const Destination = mongoose.model("Destination", destinationSchema);
export default Destination;