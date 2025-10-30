import { FaShoppingCart } from "react-icons/fa";

export default function Navbar({ cartCount, onCartOpen }) {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 shadow-lg backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Brand Logo */}
        <h1 className="text-3xl font-extrabold text-white tracking-wide drop-shadow-md">
          Vibe<span className="text-yellow-300">.</span>
        </h1>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-8 text-white font-medium">
          <li className="hover:text-yellow-300 cursor-pointer transition">Home</li>
          <li className="hover:text-yellow-300 cursor-pointer transition">Shop</li>
          <li className="hover:text-yellow-300 cursor-pointer transition">Collections</li>
          <li className="hover:text-yellow-300 cursor-pointer transition">Contact</li>
        </ul>

        {/* Cart Icon */}
        <div className="relative cursor-pointer" onClick={onCartOpen}>
          <FaShoppingCart className="text-white text-2xl hover:scale-110 transition-transform" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-yellow-300 text-black text-xs font-bold rounded-full px-2 py-0.5 shadow">
              {cartCount}
            </span>
          )}
        </div>
      </div>
    </nav>
  );
}
