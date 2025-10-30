// import mongoose from "mongoose";

// const cartItemSchema = new mongoose.Schema({
//   productId: Number,
//   name: String,
//   price: Number,
//   image: String,
//   qty: { type: Number, default: 1 },
// });

// export default mongoose.model("CartItem", cartItemSchema);
import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
  productId: {
    type: Number, // fake store product id (not Mongo ObjectId)
    required: true,
  },
  name: String,
  price: Number,
  image: String,
  qty: {
    type: Number,
    required: true,
    min: 1,
  },
});

export default mongoose.model("CartItem", cartItemSchema);
