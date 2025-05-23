import { useCart } from "../contexts/CartContext";

function CartModal({ isOpen, onClose }) {
    const { cartItems, total, removeFromCart, updateQuantity } = useCart()
    return (
        isOpen && (
            <div className="fixed inset-0 bg-black/50 flex justify-end z-50">
                <div className="bg-white w-full max-w-md h-full p-8 overflow-y-auto animate-[slideInLeft_0.3s_ease-in_forwards]">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold">Your Cart</h2>
                        <button onClick={onClose} className="text-3xl hover:text-gray-500 transition-colors duration-300 cursor-pointer">&times;</button>
                    </div>

                    {cartItems.length === 0 ? (
                        <p className="text-center py-8">Your cart is empty</p>
                    ) : (
                        <>
                            <div className="space-y-4">
                                {cartItems.map((item) => (
                                    <div key={item.id} className="flex gap-4 border-b pb-4">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-20 h-20 object-cover rounded"
                                        />
                                        <div className="flex-1">
                                            <h3 className="font-medium">{item.name}</h3>
                                            <p className="text-gray-600">${item.price.toFixed(2)}</p>
                                            <div className="flex items-center mt-2">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    className="px-2 border border-black hover:bg-red-800 hover:text-white transition-colors duration-300 cursor-pointer"
                                                >
                                                    -
                                                </button>
                                                <span className="px-4">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="px-2 border border-black hover:bg-emerald-800 hover:text-white transition-colors duration-300 cursor-pointer"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-red-600 hover:text-red-400 transition-colors duration-300 cursor-pointer"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 pt-4 border-t">
                                <div className="flex justify-between font-bold text-lg">
                                    <span>Total:</span>
                                    <span>${total.toFixed(2)}</span>
                                </div>
                                <button className="w-full mt-4 bg-[#4f46e5] hover:bg-[#4f46e5]/90 transition-all duration-300  cursor-pointer  text-white py-2 rounded">
                                    Checkout
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        )
    );
}

export default CartModal;