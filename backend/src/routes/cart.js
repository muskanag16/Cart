// import express from "express";
// import CartItem from "../models/CartItem.js";

// const router = express.Router();

// // GET cart
// router.get("/", async (req, res) => {
//   const items = await CartItem.find();
//   const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);
//   res.json({ items, total });
// });

// // ADD to cart
// router.post("/", async (req, res) => {
//   const { productId, name, price, image, qty } = req.body;
//   const existing = await CartItem.findOne({ productId });

//   if (existing) {
//     existing.qty += qty;
//     await existing.save();
//     return res.json(existing);
//   }

//   const newItem = new CartItem({ productId, name, price, image, qty });
//   await newItem.save();
//   res.status(201).json(newItem);
// });

// // DELETE from cart
// router.delete("/:id", async (req, res) => {
//   await CartItem.findByIdAndDelete(req.params.id);
//   res.json({ message: "Item removed" });
// });

// export default router;
// import express from "express";
// import CartItem from "../models/CartItem.js";

// const router = express.Router();

// // ✅ Add to Cart
// router.post("/", async (req, res) => {
//   try {
//     const { productId, qty } = req.body;

//     if (!productId || !qty) {
//       return res.status(400).json({ message: "Missing fields" });
//     }

//     const newItem = new CartItem({ productId, qty });
//     await newItem.save();

//     res.status(201).json(newItem);
//   } catch (err) {
//     console.error("Error adding to cart:", err);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// // ✅ Get all cart items
// router.get("/", async (req, res) => {
//   try {
//     const items = await CartItem.find().populate("productId");
//     const total = items.reduce(
//       (sum, item) => sum + item.productId.price * item.qty,
//       0
//     );
//     res.json({ items, total });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Failed to fetch cart" });
//   }
// });

// // ✅ Delete from cart
// router.delete("/:id", async (req, res) => {
//   try {
//     await CartItem.findByIdAndDelete(req.params.id);
//     res.json({ message: "Item removed" });
//   } catch (err) {
//     res.status(500).json({ message: "Failed to delete" });
//   }
// });

// export default router;
// import express from "express";
// import CartItem from "../models/CartItem.js";
// import axios from "axios";

// const router = express.Router();

// // 🛒 Add item to cart
// router.post("/", async (req, res) => {
//   try {
//     const { productId, qty } = req.body;

//     // Fetch product details from Fake Store API
//     const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
//     const product = response.data;

//     const cartItem = new CartItem({
//       productId: product.id,
//       name: product.title,
//       price: product.price * 100,
//       image: product.image,
//       qty,
//     });

//     await cartItem.save();
//     res.status(201).json(cartItem);
//   } catch (err) {
//     console.error("Error adding to cart:", err);
//     res.status(500).json({ message: "Failed to add item to cart" });
//   }
// });

// // 🧾 Get all cart items
// router.get("/", async (req, res) => {
//   try {
//     const items = await CartItem.find();
//     const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);
//     res.json({ items, total });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Failed to fetch cart" });
//   }
// });

// // ❌ Remove from cart
// router.delete("/:id", async (req, res) => {
//   try {
//     await CartItem.findByIdAndDelete(req.params.id);
//     res.json({ message: "Item removed" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Failed to delete item" });
//   }
// });

// // 💳 Checkout → mock receipt
// router.post("/checkout", async (req, res) => {
//   try {
//     const items = await CartItem.find();
//     const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);

//     // Clear cart after checkout
//     await CartItem.deleteMany({});

//     const receipt = {
//       total,
//       timestamp: new Date(),
//       itemCount: items.length,
//     };

//     res.json(receipt);
//   } catch (err) {
//     console.error("Checkout error:", err);
//     res.status(500).json({ message: "Checkout failed" });
//   }
// });

// export default router;
  


// import express from "express";
// import CartItem from "../models/CartItem.js";
// import axios from "axios";

// const router = express.Router();

// // 🛒 Add or update item in cart
// router.post("/", async (req, res) => {
//   try {
//     const { productId, qty } = req.body;

//     // 🔍 Check if product already exists in cart
//     let existingItem = await CartItem.findOne({ productId });

//     if (existingItem) {
//       // 🔄 Increase quantity instead of adding duplicate
//       existingItem.qty += qty;
//       await existingItem.save();
//       return res.status(200).json({ message: "Quantity updated", item: existingItem });
//     }

//     // 🆕 If not exists, fetch product details from Fake Store API
//     const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
//     const product = response.data;

//     const newItem = new CartItem({
//       productId: product.id,
//       name: product.title,
//       price: product.price * 100,
//       image: product.image,
//       qty,
//     });

//     await newItem.save();
//     res.status(201).json({ message: "New item added", item: newItem });
//   } catch (err) {
//     console.error("Error adding/updating cart:", err);
//     res.status(500).json({ message: "Failed to add or update item" });
//   }
// });

// // 🧾 Get all cart items
// router.get("/", async (req, res) => {
//   try {
//     const items = await CartItem.find();
//     const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);
//     res.json({ items, total });
//   } catch (err) {
//     console.error("Error fetching cart:", err);
//     res.status(500).json({ message: "Failed to fetch cart" });
//   }
// });

// // ❌ Remove item from cart
// router.delete("/:id", async (req, res) => {
//   try {
//     await CartItem.findByIdAndDelete(req.params.id);
//     res.json({ message: "Item removed" });
//   } catch (err) {
//     console.error("Error deleting item:", err);
//     res.status(500).json({ message: "Failed to delete item" });
//   }
// });

// // 💳 Checkout route (mock receipt only)
// router.post("/checkout", async (req, res) => {
//   try {
//     const items = await CartItem.find();
//     const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);

//     // ✅ Create mock receipt
//     const receipt = {
//       total,
//       itemCount: items.length,
//       date: new Date().toISOString(),
//     };

//     // 🧹 Clear cart after checkout
//     await CartItem.deleteMany({});

//     res.json(receipt);
//   } catch (err) {
//     console.error("Checkout error:", err);
//     res.status(500).json({ message: "Checkout failed" });
//   }
// });

// export default router;
// import express from "express";
// import CartItem from "../models/CartItem.js";
// import axios from "axios";

// const router = express.Router();

// // 🛒 Add or update item in cart
// router.post("/", async (req, res) => {
//   try {
//     const { productId } = req.body;

//     // 🔍 Check if product already exists in cart
//     let existingItem = await CartItem.findOne({ productId });

//     if (existingItem) {
//       // ✅ Always increment by 1 safely
//       existingItem.qty = (existingItem.qty || 0) + 1;
//       await existingItem.save();
//       return res.status(200).json({ message: "Quantity increased", item: existingItem });
//     }

//     // 🆕 If not exists, fetch product details from Fake Store API
//     const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
//     const product = response.data;

//     const newItem = new CartItem({
//       productId: product.id,
//       name: product.title,
//       price: Math.round(product.price * 100), // in ₹
//       image: product.image,
//       qty: 1,
//     });

//     await newItem.save();
//     res.status(201).json({ message: "New item added", item: newItem });
//   } catch (err) {
//     console.error("Error adding/updating cart:", err);
//     res.status(500).json({ message: "Failed to add or update item" });
//   }
// });

// // 🧾 Get all cart items
// router.get("/", async (req, res) => {
//   try {
//     const items = await CartItem.find();
//     const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);
//     res.json({ items, total });
//   } catch (err) {
//     console.error("Error fetching cart:", err);
//     res.status(500).json({ message: "Failed to fetch cart" });
//   }
// });

// // ❌ Remove item from cart
// router.delete("/:id", async (req, res) => {
//   try {
//     await CartItem.findByIdAndDelete(req.params.id);
//     res.json({ message: "Item removed" });
//   } catch (err) {
//     console.error("Error deleting item:", err);
//     res.status(500).json({ message: "Failed to delete item" });
//   }
// });

// // 💳 Checkout (mock receipt + clear cart)
// router.post("/checkout", async (req, res) => {
//   try {
//     const items = await CartItem.find();
//     const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);

//     // ✅ Create mock receipt
//     const receipt = {
//       total,
//       itemCount: items.length,
//       timestamp: new Date().toISOString(),
//     };

//     // 🧹 Clear cart after checkout
//     await CartItem.deleteMany({});

//     res.json(receipt);
//   } catch (err) {
//     console.error("Checkout error:", err);
//     res.status(500).json({ message: "Checkout failed" });
//   }
// });

// export default router;
import express from "express";
import CartItem from "../models/CartItem.js";
import axios from "axios";

const router = express.Router();

// 🛒 Add or update item in cart
router.post("/", async (req, res) => {
  try {
    const { productId } = req.body;

    let existingItem = await CartItem.findOne({ productId });

    if (existingItem) {
      existingItem.qty = (existingItem.qty || 0) + 1;
      await existingItem.save();
      return res.status(200).json({ message: "Quantity increased", item: existingItem });
    }

    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
    const product = response.data;

    const newItem = new CartItem({
      productId: product.id,
      name: product.title,
      price: Math.round(product.price * 100),
      image: product.image,
      qty: 1,
    });

    await newItem.save();
    res.status(201).json({ message: "New item added", item: newItem });
  } catch (err) {
    console.error("Error adding/updating cart:", err);
    res.status(500).json({ message: "Failed to add or update item" });
  }
});

// 🧾 Get all cart items
router.get("/", async (req, res) => {
  try {
    const items = await CartItem.find();
    const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);
    res.json({ items, total });
  } catch (err) {
    console.error("Error fetching cart:", err);
    res.status(500).json({ message: "Failed to fetch cart" });
  }
});

// ❌ Remove item or decrease quantity
router.delete("/:id", async (req, res) => {
  try {
    const item = await CartItem.findById(req.params.id);

    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    if (item.qty > 1) {
      // ✅ Decrease quantity by 1
      item.qty -= 1;
      await item.save();
      return res.json({ message: "Quantity decreased", item });
    } else {
      // ❌ If last one, remove completely
      await CartItem.findByIdAndDelete(req.params.id);
      return res.json({ message: "Item removed completely" });
    }
  } catch (err) {
    console.error("Error deleting/decreasing item:", err);
    res.status(500).json({ message: "Failed to update or delete item" });
  }
});

// 💳 Checkout
router.post("/checkout", async (req, res) => {
  try {
    const items = await CartItem.find();
    const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);

    const receipt = {
      total,
      itemCount: items.length,
      timestamp: new Date().toISOString(),
    };

    await CartItem.deleteMany({});
    res.json(receipt);
  } catch (err) {
    console.error("Checkout error:", err);
    res.status(500).json({ message: "Checkout failed" });
  }
});

export default router;
