import React from 'react';
import { ShoppingCart } from 'lucide-react';

const CartPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-8">
        <ShoppingCart className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-bold">Shopping Cart</h1>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col gap-4">
          {/* Placeholder for cart items */}
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-gray-100 rounded-md"></div>
              <div>
                <h3 className="text-lg font-semibold">Product Name</h3>
                <p className="text-gray-600">Quantity: 1</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xl font-bold">$99.99</span>
              <button className="text-red-500 hover:text-red-700">Remove</button>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t pt-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xl font-bold">Total:</span>
            <span className="text-2xl font-bold">$99.99</span>
          </div>
          <button className="w-full bg-primary text-white py-3 rounded-md hover:bg-primary/90 transition-colors">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;