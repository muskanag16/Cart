// import { useState, useEffect } from "react";
// import axios from "axios";
// import ProductCard from "./components/ProductCard";
// import Cart from "./components/Cart";
// import CheckoutModal from "./components/CheckoutModal";

// export default function App() {
//   const [products, setProducts] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [total, setTotal] = useState(0);
//   const [showModal, setShowModal] = useState(false);
//   const [receipt, setReceipt] = useState(null);

//   const API_BASE = "http://localhost:5000/api";

//   // Fetch products
//   useEffect(() => {
//     axios.get(`${API_BASE}/products`).then((res) => setProducts(res.data));
//     fetchCart();
//   }, []);

//   const fetchCart = async () => {
//     const res = await axios.get(`${API_BASE}/cart`);
//     setCart(res.data.items);
//     setTotal(res.data.total);
//   };

//   const addToCart = async (product) => {
//     await axios.post(`${API_BASE}/cart`, {
//       productId: product.id,
//       name: product.name,
//       price: product.price,
//       image: product.image,
//       qty: 1,
//     });
//     fetchCart();
//   };

//   const removeFromCart = async (id) => {
//     await axios.delete(`${API_BASE}/cart/${id}`);
//     fetchCart();
//   };

//   const checkout = async (name, email) => {
//     const res = await axios.post(`${API_BASE}/checkout`, { cartItems: cart });
//     setReceipt({ ...res.data, name, email });
//     setShowModal(true);
//     fetchCart();
//   };

//   return (
//     <div className="min-h-screen flex flex-col">
//       <header className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-md">
//         <h1 className="text-2xl font-bold">🛍️ Mock E-Com Cart</h1>
//         <p className="font-medium">Total: ₹{total}</p>
//       </header>

//       <main className="flex flex-col md:flex-row flex-grow">
//         <section className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
//           {products.map((product) => (
//             <ProductCard
//               key={product.id}
//               product={product}
//               onAdd={() => addToCart(product)}
//             />
//           ))}
//         </section>

//         <aside className="w-full md:w-1/3 bg-gray-100 p-6 border-l">
//           <Cart
//             cart={cart}
//             total={total}
//             onRemove={removeFromCart}
//             onCheckout={checkout}
//           />
//         </aside>
//       </main>

//       {showModal && (
//         <CheckoutModal receipt={receipt} onClose={() => setShowModal(false)} />
//       )}
//     </div>
//   );
// }
// import { useState, useEffect } from "react";
// import axios from "axios";
// import ProductCard from "./components/ProductCard";
// import Cart from "./components/Cart";
// import CheckoutModal from "./components/CheckoutModal";

// export default function App() {
//   const [products, setProducts] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [total, setTotal] = useState(0);
//   const [showModal, setShowModal] = useState(false);
//   const [receipt, setReceipt] = useState(null);

//   const API_BASE = "http://localhost:5000/api";

//   // Fetch products & cart
//   useEffect(() => {
//     axios.get(`${API_BASE}/products`).then((res) => setProducts(res.data));
//     fetchCart();
//   }, []);

//   const fetchCart = async () => {
//     const res = await axios.get(`${API_BASE}/cart`);
//     setCart(res.data.items);
//     setTotal(res.data.total);
//   };

//   const addToCart = async (product) => {
//     await axios.post(`${API_BASE}/cart`, {
//       productId: product.id,
//       name: product.name,
//       price: product.price,
//       image: product.image,
//       qty: 1,
//     });
//     fetchCart();
//   };

//   const removeFromCart = async (id) => {
//     await axios.delete(`${API_BASE}/cart/${id}`);
//     fetchCart();
//   };

//   const checkout = async (name, email) => {
//     const res = await axios.post(`${API_BASE}/checkout`, { cartItems: cart });
//     setReceipt({ ...res.data, name, email });
//     setShowModal(true);
//     fetchCart();
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 via-white to-gray-100 font-[Poppins]">
//       {/* 🌈 Header */}
//       <header className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white p-5 flex justify-between items-center shadow-md">
//         <h1 className="text-3xl font-extrabold tracking-wide">
//           Vibe<span className="text-yellow-300">.</span>
//         </h1>
//         <div className="flex items-center gap-4">
//           <p className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm text-sm font-medium">
//             Total: <span className="font-semibold">₹{total}</span>
//           </p>
//         </div>
//       </header>

//       {/* 🌟 Main Layout */}
//       <main className="flex flex-col md:flex-row flex-grow">
//         {/* 🛒 Products Section */}
//         <section className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-8">
//           {products.map((product) => (
//             <ProductCard
//               key={product.id}
//               product={product}
//               onAdd={() => addToCart(product)}
//             />
//           ))}
//         </section>

//         {/* 🧾 Cart Section */}
//         <aside className="w-full md:w-1/3 bg-white/70 border-l shadow-inner p-6 backdrop-blur-sm">
//           <Cart
//             cart={cart}
//             total={total}
//             onRemove={removeFromCart}
//             onCheckout={checkout}
//           />
//         </aside>
//       </main>

//       {/* ✅ Checkout Modal */}
//       {showModal && (
//         <CheckoutModal receipt={receipt} onClose={() => setShowModal(false)} />
//       )}

//       {/* 💜 Footer */}
//       <footer className="text-center py-4 bg-gray-900 text-gray-300 text-sm">
//         Made with 💖 by <span className="font-semibold text-white">Vibe Commerce</span>
//       </footer>
//     </div>
//   );
// }
// import React, { useState } from "react";
// import Cart from "./components/Cart";
// import ProductCard from "./components/ProductCard"; // agar products list component hai

// export default function App() {
//   const [cart, setCart] = useState([]);

//   // ✅ Add to Cart Function
//   const addToCart = (item) => {
//     setCart((prevCart) => {
//       const existing = prevCart.find((x) => x._id === item._id);
//       if (existing) {
//         // 🔁 Increase quantity
//         return prevCart.map((x) =>
//           x._id === item._id ? { ...x, qty: x.qty + 1 } : x
//         );
//       } else {
//         // 🆕 Add new product with qty = 1
//         return [...prevCart, { ...item, qty: 1 }];
//       }
//     });
//   };

//   // ✅ Remove from Cart Function
//   const removeFromCart = (id) => {
//     setCart((prevCart) => {
//       const existing = prevCart.find((x) => x._id === id);
//       if (existing && existing.qty > 1) {
//         // 🔁 Decrease quantity
//         return prevCart.map((x) =>
//           x._id === id ? { ...x, qty: x.qty - 1 } : x
//         );
//       } else {
//         // ❌ Remove item completely
//         return prevCart.filter((x) => x._id !== id);
//       }
//     });
//   };

//   // ✅ Calculate total
//   const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

//   // ✅ Checkout Handler
//   const handleCheckout = (name, email) => {
//     alert(`Thank you, ${name}! Your order has been placed.`);
//     setCart([]);
//   };

//   return (
//     <div className="p-6">
//       {/* Example Product Listing */}
//       <Products onAddToCart={addToCart} />

//       {/* 🛒 Cart Section */}
//       <div className="mt-10">
//         <Cart
//           cart={cart}
//           total={total}
//           onRemove={removeFromCart}
//           onCheckout={handleCheckout}
//         />
//       </div>
//     </div>
//   );
// }
import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import CheckoutModal from "./components/CheckoutModal";

export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [receipt, setReceipt] = useState(null);

  const API_BASE = "http://localhost:5000/api";

  // 🌐 Fetch Products & Cart
  useEffect(() => {
    axios.get(`${API_BASE}/products`).then((res) => setProducts(res.data));
    fetchCart();
  }, []);

  const fetchCart = async () => {
    const res = await axios.get(`${API_BASE}/cart`);
    setCart(res.data.items);
    setTotal(res.data.total);
  };

  // const addToCart = async (product) => {
  //   await axios.post(`${API_BASE}/cart`, {
  //     productId: product.id,
  //     name: product.name,
  //     price: product.price,
  //     image: product.image,
  //     qty: 1,
  //   });
  //   fetchCart();
  // };
const addToCart = async (product) => {
  // Check if product already exists in cart
  const existing = cart.find((item) => item.productId === product.id);

  if (existing) {
    // Increase quantity instead of adding a new entry
    await axios.post(`${API_BASE}/cart`, {
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      qty: existing.qty + 1, // increment existing qty
    });
  } else {
    // Add as a new product
    await axios.post(`${API_BASE}/cart`, {
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      qty: 1,
    });
  }

  fetchCart();
};

  const removeFromCart = async (id) => {
    await axios.delete(`${API_BASE}/cart/${id}`);
    fetchCart();
  };

  const checkout = async (name, email) => {
    const res = await axios.post(`${API_BASE}/checkout`, { cartItems: cart });
    setReceipt({ ...res.data, name, email });
    setShowModal(true);
    fetchCart();
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-pink-50 via-white to-blue-50 font-[Poppins]">
      {/* 🌈 HEADER */}
      <header className="bg-gradient-to-r from-blue-700 via-purple-600 to-pink-600 text-white p-5 flex justify-between items-center shadow-lg">
        <h1 className="text-3xl font-extrabold tracking-wide animate-pulse">
          Vibe<span className="text-yellow-300">.</span>
        </h1>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#" className="hover:text-yellow-300 transition">Home</a>
          <a href="#" className="hover:text-yellow-300 transition">Collection</a>
          <a href="#" className="hover:text-yellow-300 transition">About</a>
          <a href="#" className="hover:text-yellow-300 transition">Contact</a>
        </nav>

        <div className="flex items-center gap-3 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
          <span className="font-semibold text-sm">Total:</span>
          <span className="text-yellow-300 font-bold text-lg">₹{total}</span>
        </div>
      </header>

      {/* 🌟 MAIN LAYOUT */}
      <main className="flex flex-col md:flex-row flex-grow">
        {/* 🛍️ PRODUCTS GRID */}
        <section className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="transition-transform transform hover:scale-[1.03]"
            >
              <ProductCard product={product} onAdd={() => addToCart(product)} />
            </div>
          ))}
        </section>

        {/* 🧾 CART SECTION */}
        <aside className="w-full md:w-1/3 bg-white/70 border-l shadow-xl p-6 backdrop-blur-md rounded-t-3xl md:rounded-none">
          <Cart
            cart={cart}
            total={total}
            onRemove={removeFromCart}
            onCheckout={checkout}
          />
        </aside>
      </main>

      {/* 💳 CHECKOUT MODAL */}
      {showModal && (
        <CheckoutModal receipt={receipt} onClose={() => setShowModal(false)} />
      )}

      {/* 💜 FOOTER */}
      <footer className="text-center py-5 bg-gray-900 text-gray-300 text-sm mt-auto">
        Made with 💖 by{" "}
        <span className="font-semibold text-white">Vibe Commerce</span> | © 2025
      </footer>
    </div>
  );
}
