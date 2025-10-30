import express from "express";
import axios from "axios";

const router = express.Router();

// GET all products (Fake Store API)
router.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    const products = response.data.map((p) => ({
      id: p.id,
      name: p.title,
      price: p.price * 100, // convert to rupees
      image: p.image,
      description: p.description,
      category: p.category,
    }));
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Error fetching products" });
  }
});

export default router;
