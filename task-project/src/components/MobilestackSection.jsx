import React from 'react';
import Vector2 from '../assets/Vector2.png'; // Ensure this path and name are correct

const MobilestockSection = () => {
  const products = [
    { id: 1, name: 'iPhone 14 Pro Max', model: 'Apple iPhone 14 Pro 256GB Gold (2023)' },
    { id: 2, name: 'iPhone 14 Pro Max', model: 'Apple iPhone 14 Pro 256GB Gold (2023)' },
    { id: 3, name: 'iPhone 14 Pro Max', model: 'Apple iPhone 14 Pro 256GB Gold (2023)' },
    { id: 4, name: 'iPhone 14 Pro Max', model: 'Apple iPhone 14 Pro 256GB Gold (2023)' },
  ];

  return (
    <section className="py-10 bg-blue-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-green-500">
        
          Mobile <span className="text-gray-800">Stock</span>
        </h2>
        <p className="text-gray-600 mt-2">
          We stay up-to-date with latest technology trends and offer innovative solutions that help you stay ahead in competition.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow hover:shadow-lg">
              <img src={Vector2} alt={product.name} className="h-40 mx-auto" />
              
              <h3 className="mt-4 text-xl font-semibold text-gray-700">{product.name}</h3>
              <p className="text-gray-500 text-sm">{product.model}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobilestockSection;
