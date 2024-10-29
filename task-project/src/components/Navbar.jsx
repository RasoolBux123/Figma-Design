import React from 'react';
import vector from '../assets/Vector.png';

const Navbar = () => {
  return (
    <nav className="bg-white py-4 shadow-md">
      <div className="container mx-auto flex justify-center items-center space-x-10">
        <ul className="flex space-x-6 text-gray-700 items-center">
          <li className="hover:text-blue-500 cursor-pointer">HOME</li>
          <li className="hover:text-blue-500 cursor-pointer">ABOUT US</li>
          <li className="hover:text-blue-500 cursor-pointer">WHOLESALE</li>
          <li><img src={vector} alt="Logo" className="h-10" /></li>
          <li className="hover:text-blue-500 cursor-pointer">SERVICE</li>
          <li className="hover:text-blue-500 cursor-pointer">NEWS</li>
          <li className="hover:text-blue-500 cursor-pointer">HOW IT WORKS</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
