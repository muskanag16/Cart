// import { FaCartPlus } from "react-icons/fa";

// export default function ProductCard({ product, onAdd }) {
//   return (
//     <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition">
//       <img
//         src={product.image}
//         alt={product.name}
//         className="h-48 w-full object-contain p-4"
//       />
//       <div className="p-4">
//         <h2 className="font-semibold text-lg mb-2 line-clamp-2">
//           {product.name}
//         </h2>
//         <p className="text-blue-600 font-bold mb-3">₹{product.price}</p>
//         <button
//           onClick={onAdd}
//           className="flex items-center justify-center gap-2 bg-blue-600 text-white w-full py-2 rounded-lg hover:bg-blue-700"
//         >
//           <FaCartPlus /> Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// }
import { FaCartPlus } from "react-icons/fa";

export default function ProductCard({ product, onAdd }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 p-4 w-full max-w-sm mx-auto border border-gray-100">
      {/* Product Image */}
      <div className="h-64 w-full flex items-center justify-center bg-gradient-to-b from-gray-50 to-white rounded-xl overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="object-contain h-56 w-full transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Product Details */}
      <div className="mt-4 flex flex-col justify-between h-32">
        <h2 className="font-semibold text-lg text-gray-800 line-clamp-2">
          {product.name}
        </h2>
        <div className="flex items-center justify-between mt-3">
          <p className="text-blue-600 font-bold text-xl">₹{product.price}</p>
          <button
            onClick={onAdd}
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
          >
            <FaCartPlus className="text-lg" /> Add
          </button>
        </div>
      </div>
    </div>
  );
}
