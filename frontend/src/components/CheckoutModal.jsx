// export default function CheckoutModal({ receipt, onClose }) {
//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
//       <div className="bg-white rounded-xl shadow-lg p-6 w-96 text-center">
//         <h2 className="text-2xl font-bold text-green-600 mb-3">
//           ✅ Checkout Successful
//         </h2>
//         <p className="text-gray-700">Thank you, {receipt.name}!</p>
//         <p className="text-gray-500 mb-2">Email: {receipt.email}</p>
//         <p className="font-semibold text-lg">Total: ₹{receipt.total}</p>
//         <p className="text-sm text-gray-400">
//           {new Date(receipt.timestamp).toLocaleString()}
//         </p>
//         <button
//           onClick={onClose}
//           className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// }

export default function CheckoutModal({ receipt, onClose }) {
  if (!receipt) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-[380px] text-center transform transition-all scale-100">
        <h2 className="text-3xl font-bold text-green-600 mb-4 animate-bounce">
          ✅ Checkout Successful
        </h2>
        <p className="text-gray-700 text-lg">Thank you, {receipt.name}!</p>
        <p className="text-gray-500 mb-3">{receipt.email}</p>
        <div className="bg-gray-50 py-3 rounded-lg mb-3">
          <p className="font-semibold text-xl text-blue-600">
            Total: ₹{receipt.total?.toFixed(2) || 0}
          </p>
        </div>
        <p className="text-sm text-gray-400 italic">
          {receipt.timestamp
            ? new Date(receipt.timestamp).toLocaleString()
            : "Order date unavailable"}
        </p>
        <button
          onClick={onClose}
          className="mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-6 rounded-lg font-medium hover:opacity-90 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}
