import React from 'react';
import { ShoppingBag } from 'lucide-react';

const MarketplacePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-8">
        <ShoppingBag className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-bold">Health Products Marketplace</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* Placeholder for marketplace items */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="aspect-square bg-gray-100 rounded-md mb-4"></div>
          <h3 className="text-lg font-semibold mb-2">Product Name</h3>
          <p className="text-gray-600 mb-4">Product description goes here...</p>
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold">$99.99</span>
            <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketplacePage;