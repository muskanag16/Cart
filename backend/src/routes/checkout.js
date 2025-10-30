import express from "express";
import CartItem from "../models/CartItem.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { cartItems } = req.body;
  const total = cartItems.reduce((sum, i) => sum + i.price * i.qty, 0);

  await CartItem.deleteMany(); // clear cart after checkout

  res.json({
    message: "Checkout successful!",
    total,
    timestamp: new Date(),
  });
});

export default router;
