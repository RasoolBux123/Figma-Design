import React from 'react';
import group from '../assets/group.png'; // Replace with actual phone image path

const HeroSection = () => {
  return (
    <section className="bg-blue-50 py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
        <div className="md:w-1/2 text-center md:text-left space-y-4">
          <h1 className="text-4xl font-bold text-gray-800">
            Largest <span className="text-blue-500">Wholesalers</span> of <span className="text-blue-500">Mobile Phones</span>
          </h1>
          <p className="text-gray-600">
            Supply that meets Demand. Get the best wholesale prices of used and refurbished Mobile Stocks.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
          <input 
            type="Email" 
            placeholder="Email ..." 
            className="px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
          />
            <button className="px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600">Subscribe</button>
            <button className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">Stock List</button>
          </div>
          <p className="text-gray-500 text-sm">🚀 400k+ people Registered</p>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
          <img src={group} alt="Phone" className="max-w-xs" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
