// import { FaTrash } from "react-icons/fa";
// import { useState } from "react";

// export default function Cart({ cart, total, onRemove, onCheckout }) {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">🛒 Your Cart</h2>

//       {cart.length === 0 ? (
//         <p className="text-gray-500">Cart is empty</p>
//       ) : (
//         <>
//           <ul className="space-y-3 max-h-80 overflow-y-auto">
//             {cart.map((item) => (
//               <li
//                 key={item._id}
//                 className="flex items-center justify-between bg-white p-3 rounded-lg shadow"
//               >
//                 <div className="flex items-center gap-3">
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="h-12 w-12 object-contain"
//                   />
//                   <div>
//                     <p className="font-medium">{item.name}</p>
//                     <p className="text-sm text-gray-500">
//                       ₹{item.price} × {item.qty}
//                     </p>
//                   </div>
//                 </div>
//                 <button
//                   onClick={() => onRemove(item._id)}
//                   className="text-red-500 hover:text-red-700"
//                 >
//                   <FaTrash />
//                 </button>
//               </li>
//             ))}
//           </ul>

//           <p className="text-xl font-bold mt-4">Total: ₹{total}</p>

//           <div className="mt-6 space-y-3">
//             <input
//               type="text"
//               placeholder="Your Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="border p-2 w-full rounded-lg"
//             />
//             <input
//               type="email"
//               placeholder="Your Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="border p-2 w-full rounded-lg"
//             />
//             <button
//               onClick={() => onCheckout(name, email)}
//               className="bg-green-600 text-white w-full py-2 rounded-lg hover:bg-green-700"
//             >
//               Checkout
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }
import { FaTrash } from "react-icons/fa";
import { useState } from "react";

export default function Cart({ cart, total, onRemove, onCheckout }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="p-5 bg-gray-50 rounded-2xl shadow-xl">
      <h2 className="text-2xl font-bold text-blue-700 mb-5 border-b pb-2">
        🛒 Your Cart
      </h2>

      {cart.length === 0 ? (
        <p className="text-gray-500 text-center italic">Your cart is empty</p>
      ) : (
        <>
          <ul className="space-y-3 max-h-80 overflow-y-auto pr-1">
            {cart.map((item) => (
              <li
                key={item._id}
                className="flex items-center justify-between bg-white p-3 rounded-xl shadow hover:shadow-lg transition"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-12 w-12 object-contain rounded-md border"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">{item.name}</p>
                    <p className="text-sm text-gray-500">
                      ₹{item.price} × {item.qty}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => onRemove(item._id)}
                  className="text-red-500 hover:text-red-700 transition"
                >
                  <FaTrash />
                </button>
              </li>
            ))}
          </ul>

          <div className="flex justify-between mt-6 text-lg font-semibold border-t pt-3">
            <span>Total</span>
            <span className="text-blue-600">₹{total.toFixed(2)}</span>
          </div>

          <div className="mt-6 space-y-3">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 p-2 w-full rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 p-2 w-full rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition"
            />
            <button
              onClick={() => onCheckout(name, email)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white w-full py-2 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
