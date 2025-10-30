import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";
import CartDrawer from "../components/CartDrawer";
import CheckoutModal from "../components/CheckoutModal";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [receipt, setReceipt] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products").then((res) => {
      setProducts(res.data);
    });
  }, []);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((i) => i._id === product._id);
      if (existing) {
        return prev.map((i) =>
          i._id === product._id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const handleCheckout = async () => {
    const res = await axios.post("http://localhost:5000/api/checkout", {
      cartItems: cart,
    });
    setReceipt(res.data);
    setCart([]);
  };

  return (
    <>
      <Navbar cartCount={cart.length} onCartOpen={() => setShowCart(true)} />

      <div className="pt-20 px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} onAddToCart={addToCart} />
        ))}
      </div>

      {showCart && (
        <CartDrawer
          cart={cart}
          onClose={() => setShowCart(false)}
          onCheckout={handleCheckout}
        />
      )}

      {receipt && <CheckoutModal receipt={receipt} onClose={() => setReceipt(null)} />}
    </>
  );
}
// import { useEffect, useState } from "react";
// import axios from "axios";
// import ProductCard from "../components/ProductCard";
// import Navbar from "../components/Navbar";
// import CartDrawer from "../components/CartDrawer";
// import CheckoutModal from "../components/CheckoutModal";

// export default function Home() {
//   const [products, setProducts] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [showCart, setShowCart] = useState(false);
//   const [receipt, setReceipt] = useState(null);

//   // ✅ Fetch products once
//   useEffect(() => {
//     axios.get("http://localhost:5000/api/products").then((res) => {
//       setProducts(res.data);
//     });
//   }, []);

//   // ✅ Add to Cart
//   const addToCart = (product) => {
//     setCart((prev) => {
//       const existing = prev.find((i) => i._id === product._id);
//       if (existing) {
//         return prev.map((i) =>
//           i._id === product._id ? { ...i, qty: i.qty + 1 } : i
//         );
//       }
//       return [...prev, { ...product, qty: 1 }];
//     });
//   };

//   // ✅ Checkout Handler
//   const handleCheckout = async () => {
//     const res = await axios.post("http://localhost:5000/api/checkout", {
//       cartItems: cart,
//     });
//     setReceipt(res.data);
//     setCart([]);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100">
//       {/* 🛍️ Navbar */}
//       <Navbar cartCount={cart.length} onCartOpen={() => setShowCart(true)} />

//       {/* 🛒 Products Grid */}
//       <main className="max-w-7xl mx-auto px-6 pt-24 pb-16">
//         <h2 className="text-3xl font-bold text-gray-800 mb-8 tracking-wide text-center">
//           Explore the <span className="text-blue-600">Vibe</span> Collection ✨
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {products.map((product) => (
//             <div
//               key={product._id}
//               className="transform hover:scale-[1.02] transition-all duration-300"
//             >
//               <ProductCard product={product} onAddToCart={addToCart} />
//             </div>
//           ))}
//         </div>
//       </main>

//       {/* 🧺 Cart Drawer */}
//       {showCart && (
//         <CartDrawer
//           cart={cart}
//           onClose={() => setShowCart(false)}
//           onCheckout={handleCheckout}
//         />
//       )}

//       {/* 💳 Checkout Modal */}
//       {receipt && (
//         <CheckoutModal receipt={receipt} onClose={() => setReceipt(null)} />
//       )}

//       {/* 🔻 Footer */}
//       <footer className="bg-white text-gray-500 text-center py-4 border-t mt-auto">
//         © 2025 <span className="font-semibold text-blue-600">VibeStore</span>. All rights reserved.
//       </footer>
//     </div>
//   );
// }
// import { useEffect, useState } from "react";
// import axios from "axios";
// import ProductCard from "../components/ProductCard";
// import Navbar from "../components/Navbar";
// import CartDrawer from "../components/CartDrawer";
// import CheckoutModal from "../components/CheckoutModal";

// export default function Home() {
//   const [products, setProducts] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [showCart, setShowCart] = useState(false);
//   const [receipt, setReceipt] = useState(null);

//   // ✅ Fetch products
//   useEffect(() => {
//     axios.get("http://localhost:5000/api/products").then((res) => {
//       setProducts(res.data);
//     });
//   }, []);

//   // ✅ Add or Update Quantity
//   const addToCart = (product) => {
//     setCart((prev) => {
//       // handle both _id and id (for safety)
//       const existing = prev.find(
//         (item) => item._id === product._id || item.id === product.id
//       );

//       if (existing) {
//         return prev.map((item) =>
//           item._id === product._id || item.id === product.id
//             ? { ...item, qty: item.qty + 1 }
//             : item
//         );
//       } else {
//         return [...prev, { ...product, qty: 1 }];
//       }
//     });
//   };

//   // ✅ Checkout
//   const handleCheckout = async () => {
//     const res = await axios.post("http://localhost:5000/api/checkout", {
//       cartItems: cart,
//     });
//     setReceipt(res.data);
//     setCart([]);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100">
//       {/* 🛍️ Navbar */}
//       <Navbar cartCount={cart.length} onCartOpen={() => setShowCart(true)} />

//       {/* 🛒 Products Grid */}
//       <main className="max-w-7xl mx-auto px-6 pt-24 pb-16">
//         <h2 className="text-3xl font-bold text-gray-800 mb-8 tracking-wide text-center">
//           Explore the <span className="text-blue-600">Vibe</span> Collection ✨
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {products.map((product) => (
//             <div
//               key={product._id || product.id}
//               className="transform hover:scale-[1.02] transition-all duration-300"
//             >
//               <ProductCard product={product} onAddToCart={addToCart} />
//             </div>
//           ))}
//         </div>
//       </main>

//       {/* 🧺 Cart Drawer */}
//       {showCart && (
//         <CartDrawer
//           cart={cart}
//           onClose={() => setShowCart(false)}
//           onCheckout={handleCheckout}
//         />
//       )}

//       {/* 💳 Checkout Modal */}
//       {receipt && (
//         <CheckoutModal receipt={receipt} onClose={() => setReceipt(null)} />
//       )}

//       {/* 🔻 Footer */}
//       <footer className="bg-white text-gray-500 text-center py-4 border-t mt-auto">
//         © 2025 <span className="font-semibold text-blue-600">VibeStore</span>. All rights reserved.
//       </footer>
//     </div>
//   );
// }
